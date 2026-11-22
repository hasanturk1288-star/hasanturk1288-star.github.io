/* =========================================================
   KPSS TARİH NOTLARI — SORU ÜRETİCİ v2
   facts.js + facts2.js + notes.js (zaman çizelgeleri) → ÖSYM tarzı sorular.
   Hedef: her ünitede her seviyeden (Kolay / Orta / Zor) en az 105 soru.
   - Sabit tohumlu rastgelelik: her açılışta AYNI sorular üretilir.
   - Soru id'si içerikten (hash) türetilir: bilgi eklense bile eski soruların id'si değişmez,
     kullanıcının ilerlemesi korunur.
   Soru türleri:
   🟢 Kolay : eşleştirme (rel), "ilgilidir", "bu bilgi hangi konuya ait", "o tarihte hangi olay"
   🟡 Orta  : "ilgili değildir", "hangi eşleştirme doğru", "hangi tarihte", "X'ten önce/sonra hangi olay",
              "hangisi diğerlerinden önce"
   🔴 Zor   : I-II-III öncüllü, "hangi eşleştirme yanlış", 3 ve 4 olaylı kronoloji,
              "hangileri X'ten önce gerçekleşmiştir", "en son"
   ========================================================= */
(function () {
  const TARGET = 105;
  const CAT_SYM = {devlet:"🏛️", kisi:"👤", savas:"⚔️", antlasma:"📜", kavram:"💡", eser:"📚", kurum:"🏫", yer:"📍",
    gorev:"🎖️", belge:"📜", cemiyet:"🛡", kongre:"🏛️", kanun:"⚖️", cephe:"🗺️", akim:"💭", donem:"⏳",
    parti:"🗳️", olay:"📌", sorun:"🧩", doktrin:"💵", kriz:"🚀", konferans:"🤝",
    bilim:"🔬", takvim:"📆", uygarlik:"🏺", hareket:"🌍"};
  const ROMAN = ["I", "II", "III", "IV"];
  // Öncül satırı: olay adı da Romen rakamıyla başlıyorsa ("I. Dünya Savaşı") karışmasın diye tırnak içine al
  const rn = (i, t) => /^(I|II|III|IV|V|VI|VII|VIII)\.\s/.test(t) ? `${ROMAN[i]}. “${t}”` : `${ROMAN[i]}. ${t}`;

  // facts2.js eklerini birleştir
  if (typeof FACTS_EK !== "undefined") Object.entries(FACTS_EK).forEach(([k, v]) => {
    const F = FACTS[k] || (FACTS[k] = {rel: [], sub: [], ev: []});
    ["rel", "sub", "ev"].forEach(p => { if (v[p]) F[p] = (F[p] || []).concat(v[p]); });
  });

  function rng(seed) { // mulberry32
    return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }
  function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

  // POOL[kategori] = [{a: cevap, ui: ünite sırası}] → yerel çeldirici yetmezse dönem olarak en yakın ünitelerden seçilir
  // (örn. Osmanlı sorusuna NATO değil, yakın dönemin kurumları çeldirici olur).
  const POOL = {}, SUBJ = [], ANS_Q = {}, UIDX = Object.fromEntries(UNITS.map((u, i) => [u.id, i]));
  Object.entries(FACTS).forEach(([uid, f]) => {
    (f.rel || []).forEach(r => { if (typeof r[0] === "string") (POOL[r[0]] = POOL[r[0]] || []).push({a: r[2], ui: UIDX[uid]}); if (!ANS_Q[r[2]]) ANS_Q[r[2]] = r[1]; });
    (f.sub || []).forEach(s => SUBJ.push(s[0]));
  });
  const KOD = typeof KODLAR !== "undefined" ? KODLAR : {};
  // Konu adı → kodlama (eşleştirme ve tarih sorularında cevap bir konuya denk geliyorsa kullanılır)
  const SUBKOD = new Map();
  Object.values(FACTS).forEach(f => (f.sub || []).forEach(s => { const k = s[3] || KOD[s[0]]; if (k) SUBKOD.set(s[0].toLocaleLowerCase("tr"), k); }));
  const kodFor = (...texts) => { for (const t of texts) { if (!t) continue; const lt = String(t).toLocaleLowerCase("tr");
      if (SUBKOD.has(lt)) return SUBKOD.get(lt);
      for (const [n, k] of SUBKOD) if (n.length >= 6 && lt.includes(n)) return k; } return ""; };
  const NM = new Set((typeof NOMIX !== "undefined" ? NOMIX : []).flatMap(([a, b]) => [a + "|" + b, b + "|" + a]));
  const noMix = (a, b) => NM.has(a + "|" + b);
  // Çeldirici açıklaması: "Kâzım Karabekir: Kurtuluş Savaşı'nda Doğu Cephesi komutanı"
  const describe = d => { const q = ANS_Q[d]; if (!q) return d;
    const ph = q.replace(/\s+(kimdir|hangisidir|nedir|neresidir)\?$/, "");
    return ph !== q ? `${d}: ${ph}` : `${d} → “${q}”`; };
  const usedIds = new Set(QUESTIONS.map(q => q.id));
  const OUT = [];

  UNITS.forEach((u, ui) => {
    const F = FACTS[u.id]; if (!F) return;
    const R = rng(hash("u:" + u.id)); // ünite sırası değişse de aynı sorular üretilsin
    const sh = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
    const pick = a => a[Math.floor(R() * a.length)];
    const hand = {1: 0, 2: 0, 3: 0};
    QUESTIONS.forEach(q => { if (q.u === u.id && !q.gen) hand[q.l]++; });
    const B = {1: [], 2: [], 3: []}, seenFull = new Set(), seenBase = new Map();

    function push(l, sym, q, o, a, exp, kod, extra, cap) {
      const base = q + "|" + o[a], c = seenBase.get(base) || 0;
      // Aynı kök + aynı cevap yalnızca bir kez: şıkları farklı "kopya" sorular üretilmez (öğrenci aynı soruyu tekrar görmesin)
      if (c >= 1) return false;
      const full = base + "|" + o.slice().sort().join("¦");
      if (seenFull.has(full)) return false;
      seenFull.add(full); seenBase.set(base, c + 1);
      B[l].push(Object.assign({u: u.id, l, sym, q, o, a, exp, kod: kod || "", hot: false, gen: true, _k: full}, extra || {}));
      return true;
    }
    const five = (ans, ds) => { const d = sh([...new Set(ds)].filter(x => x !== ans)).slice(0, 4); if (d.length < 4) return null; const o = sh([ans, ...d]); return {o, a: o.indexOf(ans)}; };

    /* ---------- 1) EŞLEŞTİRME (rel) ---------- */
    const rel = F.rel || [];
    function gRel(r, cap) {
      const [cat, q, ans, lvl = 1, exp, kod, hot] = r; let res;
      if (Array.isArray(cat)) res = five(ans, cat);
      else {
        let ds = [...new Set(rel.filter(x => x[0] === cat).map(x => x[2]))].filter(x => x !== ans);
        if (ds.length < 4) {
          const near = sh(POOL[cat] || []).sort((x, y) => Math.abs(x.ui - ui) - Math.abs(y.ui - ui)).map(x => x.a);
          for (const a of near) { if (ds.length >= 4) break; if (a !== ans && !ds.includes(a)) ds.push(a); }
        }
        res = five(ans, ds);
      }
      if (!res) return;
      const IT = typeof ILKE_TANIM !== "undefined" ? ILKE_TANIM : {};
      const others = res.o.filter(x => x !== ans), richer = Array.isArray(cat)
        ? (IT[ans] ? `Doğru cevap: ${ans}. ${ans} ${IT[ans]}. Bu düzenleme en çok bu ilkenin amacına hizmet eder.` : `Doğru cevap: ${ans}.`)
        : `Doğru cevap: ${ans}. Diğer seçenekler: ` + others.map(describe).join(" • ");
      push(lvl, Array.isArray(cat) ? "⭐" : (CAT_SYM[cat] || u.sym), q, res.o, res.a, exp || richer, kod || kodFor(ans), {hot: !!hot}, cap);
    }

    /* ---------- 2) KONU-ÖZELLİK ---------- */
    const subs = (F.sub || []).map(s => [s[0], s[1], s[2], s[3] || KOD[s[0]] || ""]);
    const all = subs.flatMap((s, si) => s[2].map(t => ({t, si})));
    const nameOf = i => subs[i][0];
    // Bir bilgi, başka bir konunun adını içeriyorsa o konu için çeldirici/yanlış eşleştirme olarak KULLANILMAZ
    // (örn. "NATO'ya karşı kurulan ittifak" bilgisi "NATO ile ilgili değildir" sorusunda çeldirici olamaz).
    const low = s => String(s).toLocaleLowerCase("tr");
    const mentions = (t, name) => { const key = low(name).replace(/\s*\(.*?\)/g, "").trim(), w = key.split(/[\s']/)[0], lt = low(t);
      return lt.includes(key) || (w.length >= 4 && lt.includes(w)); };
    const foreignOf = si => all.filter(x => x.si !== si && !mentions(x.t, subs[si][0]) && !noMix(subs[si][0], subs[x.si][0]));
    const okSub = all.length >= 8 && subs.length >= 2;

    function gIlgili(x, cap) { // 🟢
      const fo = foreignOf(x.si); if (fo.length < 4) return;
      const fs = sh(fo).slice(0, 4), o = sh([x.t, ...fs.map(y => y.t)]), s = subs[x.si];
      push(1, s[1], `Aşağıdakilerden hangisi ${s[0]} ile ilgilidir?`, o, o.indexOf(x.t),
        `“${x.t}” ifadesi ${s[0]} ile ilgilidir. Diğerleri: ` + fs.map(y => `${y.t} → ${nameOf(y.si)}`).join(" • "), s[3], null, cap);
    }
    function gKonu(x, cap) { // 🟢 bu bilgi hangi konuya ait
      const s = subs[x.si];
      const okName = n => !mentions(x.t, n) && !noMix(s[0], n);
      let others = subs.filter((_, i) => i !== x.si).map(z => z[0]).filter(okName);
      if (others.length < 4) others = others.concat(sh(SUBJ.filter(n => n !== s[0] && !others.includes(n) && okName(n))));
      const res = five(s[0], others); if (!res) return;
      push(1, s[1], `“${x.t}”\nBu bilgi aşağıdakilerden hangisiyle ilgilidir?`, res.o, res.a, `Bu bilgi ${s[0]} ile ilgilidir.`, s[3], null, cap);
    }
    function gGrup(si, cap, k) { // 🟡 paragraf: bir konunun 3-4 özelliği verilir, "hangisiyle ilgilidir?"
      const s = subs[si]; k = Math.min(k || 3, s[2].length); if (k < 3) return;
      const fs = sh(s[2].map((_, i) => i)).slice(0, k).sort((a, b) => a - b).map(i => s[2][i]); // sabit sıra: aynı bilgi seti = aynı soru
      const okName = n => n !== s[0] && !fs.some(t => mentions(t, n)) && !noMix(s[0], n);
      let others = subs.map(z => z[0]).filter(okName);
      if (others.length < 4) others = others.concat(sh(SUBJ.filter(n => okName(n) && !others.includes(n))));
      const res = five(s[0], others); if (!res) return;
      push(2, "📄", fs.map(t => "– " + t.replace(/[.!?]?$/, ".")).join("\n") + "\n\nYukarıda verilen bilgiler aşağıdakilerden hangisiyle ilgilidir?", res.o, res.a,
        `Verilen bilgilerin hepsi ${s[0]} ile ilgilidir. Paragraf sorularında tek bir bilgiye değil, bütün bilgileri birlikte karşılayan seçeneğe bak.`, s[3], {par: true, noBolt: true}, cap);
    }
    function gDegil(si, cap) { // 🟡
      const s = subs[si], at = s[2]; if (at.length < 4) return;
      const fo = foreignOf(si); if (!fo.length) return;
      const f = pick(fo), o = sh([...sh(at).slice(0, 4), f.t]);
      push(2, s[1], `Aşağıdakilerden hangisi ${s[0]} ile ilgili değildir?`, o, o.indexOf(f.t),
        `“${f.t}” ifadesi ${s[0]} ile değil, ${nameOf(f.si)} ile ilgilidir.`, s[3], null, cap);
    }
    const pairTxt = (si, t) => `${nameOf(si)} → ${t}`;
    function wrongPair(y) {
      const zs = subs.map((_, i) => i).filter(i => i !== y.si && !mentions(y.t, nameOf(i)) && !noMix(nameOf(i), nameOf(y.si))); if (!zs.length) return null;
      const z = pick(zs); return {txt: pairTxt(z, y.t), why: `${y.t} → aslında ${nameOf(y.si)}`};
    }
    function gEsDogru(x, cap) { // 🟡 hangi eşleştirme doğru
      const fo = sh(all.filter(y => y !== x)).slice(0, 4); if (fo.length < 4) return;
      const ws = fo.map(wrongPair); if (ws.some(w => !w)) return;
      const ok = pairTxt(x.si, x.t), o = sh([ok, ...ws.map(w => w.txt)]);
      if (new Set(o).size < 5) return;
      push(2, "🔗", "Aşağıdaki eşleştirmelerden hangisi doğrudur?", o, o.indexOf(ok),
        `Doğru eşleştirme: ${ok}. Yanlışlar: ` + ws.map(w => w.why).join(" • "), "", {noBolt: true}, cap);
    }
    function gEsYanlis(cap) { // 🔴 hangi eşleştirme yanlış
      const pool = sh(all); if (pool.length < 5) return;
      const w = wrongPair(pool[4]); if (!w) return;
      const trues = pool.slice(0, 4).map(y => pairTxt(y.si, y.t)), o = sh([...trues, w.txt]);
      if (new Set(o).size < 5) return;
      push(3, "🔗", "Aşağıdaki eşleştirmelerden hangisi yanlıştır?", o, o.indexOf(w.txt),
        `Yanlış eşleştirme: ${w.txt}. Doğrusu: ${w.why}.`, "", {noBolt: true}, cap);
    }
    const PATS = [[1, 1, 0, 2], [1, 1, 1, 4], [0, 1, 1, 3], [1, 0, 0, 0], [0, 1, 0, 1]];
    function gOncul(si, pi, cap) { // 🔴
      const s = subs[si], p = PATS[pi], tr = sh(s[2]), fo = foreignOf(si);
      if (p.slice(0, 3).filter(Boolean).length > tr.length || !fo.length) return;
      let ti = 0;
      const st = p.slice(0, 3).map(isT => { if (isT) return {t: tr[ti++], ok: true}; const f = pick(fo); return {t: f.t, ok: false, from: nameOf(f.si)}; });
      if (new Set(st.map(x => x.t)).size < 3) return;
      push(3, s[1], `${s[0]} ile ilgili,\n${st.map((x, i) => rn(i, x.t) + ".").join("\n")}\nifadelerinden hangileri doğrudur?`, ON, p[3],
        st.map((x, i) => `${ROMAN[i]} ${x.ok ? "✓ doğru" : "✗ yanlış (" + x.from + " ile ilgilidir)"}`).join(" • "), s[3], {noBolt: true}, cap);
    }

    /* ---------- 3) ZAMAN ÇİZELGESİ ---------- */
    const evMap = new Map();
    [...((NOTES[u.id] && NOTES[u.id].tl) || []), ...(F.ev || [])].forEach(e => { if (!evMap.has(e[2])) evMap.set(e[2], {k: e[0], d: e[1], t: e[2]}); });
    const evs = [...evMap.values()];
    // İki olay kesin sıralanabilir mi? (aynı yıl ve günü bilinmeyen olaylar birlikte kullanılmaz)
    const okPair = (a, b) => a.k !== b.k && a.d !== b.d && !(Math.floor(a.k) === Math.floor(b.k) && (Number.isInteger(a.k) || Number.isInteger(b.k)));
    const pickEv = (cnt, must, filter) => { const res = must ? [must] : []; for (const e of sh(filter ? evs.filter(filter) : evs)) { if (res.length >= cnt) break; if (!res.includes(e) && res.every(x => okPair(x, e))) res.push(e); } return res.length === cnt ? res : null; };
    const tline = s => "Kronoloji: " + s.slice().sort((a, b) => a.k - b.k).map(x => `${x.d} ${x.t}`).join(" → ");

    function gTarihOlay(e, cap) { // 🟢 o tarihte hangi olay
      const s = pickEv(5, e); if (!s) return; const o = sh(s.map(x => x.t));
      push(1, "📅", `${e.d} tarihinde gerçekleşen olay aşağıdakilerden hangisidir?`, o, o.indexOf(e.t), tline(s), kodFor(e.t), null, cap);
    }
    function gOlayTarih(e, cap) { // 🟡 hangi tarihte
      const s = pickEv(5, e); if (!s) return; const o = sh(s.map(x => x.d));
      push(2, "📅", `“${e.t}” hangi tarihte gerçekleşmiştir?`, o, o.indexOf(e.d), tline(s), kodFor(e.t), null, cap);
    }
    function gOnceSonra(p, before, cap) { // 🟡 X'ten önce/sonra gerçekleşen olay
      const cmp = x => okPair(x, p) && (before ? x.k < p.k : x.k > p.k), anti = x => okPair(x, p) && (before ? x.k > p.k : x.k < p.k);
      const good = evs.filter(cmp), bad = sh(evs.filter(anti)).slice(0, 4);
      if (!good.length || bad.length < 4) return;
      const g = pick(good), o = sh([g.t, ...bad.map(x => x.t)]);
      push(2, "⏳", `“${p.t}” olayından ${before ? "önce" : "sonra"} gerçekleşen olay aşağıdakilerden hangisidir?`, o, o.indexOf(g.t),
        tline([p, g, ...bad]), kodFor(p.t, g.t), {noBolt: true}, cap);
    }
    function gIlkSon(first, cap) { // 🟡 ilk / 🔴 en son
      const s = pickEv(5); if (!s) return;
      const sorted = s.slice().sort((a, b) => a.k - b.k), ans = first ? sorted[0] : sorted[4], o = sh(s.map(x => x.t));
      push(first ? 2 : 3, "⏳", `Aşağıdaki olaylardan hangisi ${first ? "diğerlerinden önce" : "en son"} gerçekleşmiştir?`, o, o.indexOf(ans.t), tline(s), "", {noBolt: true}, cap);
    }
    function perms(n) { const r = []; const go = (a, rest) => { if (!rest.length) return r.push(a); rest.forEach((x, i) => go([...a, x], rest.filter((_, j) => j !== i))); }; go([], [...Array(n).keys()]); return r; }
    const P3 = perms(3), P4 = perms(4), pl = p => p.map(i => ROMAN[i]).join(" – ");
    function gKron(n, cap) { // 🔴 3 veya 4 olaylı sıralama
      const s = pickEv(n); if (!s) return;
      const corr = pl([...Array(n).keys()].sort((a, b) => s[a].k - s[b].k));
      const o = sh([corr, ...sh((n === 3 ? P3 : P4).map(pl).filter(x => x !== corr)).slice(0, 4)]);
      push(3, "⏳", `${s.map((x, i) => rn(i, x.t)).join("\n")}\nYukarıdaki olayların eskiden yeniye doğru sıralaması hangisidir?`, o, o.indexOf(corr), tline(s), "", {noBolt: true}, cap);
    }
    function gOncesiOncul(cap) { // 🔴 hangileri X'ten önce
      const p = pick(evs), cand = evs.filter(x => okPair(x, p));
      if (cand.length < 3) return;
      const s = sh(cand).slice(0, 3), patt = s.map(x => x.k < p.k ? 1 : 0).join("");
      const IDX = {"100": 0, "010": 1, "110": 2, "011": 3, "111": 4}; if (!(patt in IDX)) return;
      push(3, "⏳", `${s.map((x, i) => rn(i, x.t)).join("\n")}\nYukarıdaki olaylardan hangileri “${p.t}” olayından önce gerçekleşmiştir?`, ON, IDX[patt],
        tline([p, ...s]), "", {noBolt: true}, cap);
    }

    /* ---------- TEMEL ÜRETİM ---------- */
    rel.forEach(r => gRel(r, 1));
    if (okSub) {
      all.forEach(x => { gIlgili(x, 1); gKonu(x, 1); gEsDogru(x, 1); });
      subs.forEach((s, si) => { s[2].forEach(() => gDegil(si, 1)); PATS.forEach((_, pi) => gOncul(si, pi, 1));
        gGrup(si, 1, 3); gGrup(si, 1, 3); gGrup(si, 1, 4); });
      for (let i = 0; i < Math.ceil(all.length / 2); i++) gEsYanlis(1);
    }
    evs.forEach(e => { gTarihOlay(e, 1); gOlayTarih(e, 1); gOnceSonra(e, true, 1); gOnceSonra(e, false, 1); });
    for (let i = 0; i < 12; i++) { gIlkSon(true, 1); gIlkSon(false, 1); gKron(3, 1); gKron(4, 1); gOncesiOncul(1); }

    /* ---------- HEDEFE TAMAMLAMA (çeldiricileri farklı varyantlar) ---------- */
    const GEN = {
      1: [() => okSub && gIlgili(pick(all), 3), () => okSub && gKonu(pick(all), 2), () => gTarihOlay(pick(evs), 3),
          () => { const r = rel.filter(x => (x[3] || 1) === 1); r.length && gRel(pick(r), 2); }],
      2: [() => okSub && gDegil(Math.floor(R() * subs.length), 3), () => okSub && gEsDogru(pick(all), 2), () => gOlayTarih(pick(evs), 3),
          () => gOnceSonra(pick(evs), R() < .5, 3), () => gIlkSon(true, 3), () => { const r = rel.filter(x => x[3] === 2); r.length && gRel(pick(r), 2); }],
      3: [() => okSub && gEsYanlis(3), () => okSub && gOncul(Math.floor(R() * subs.length), Math.floor(R() * PATS.length), 3),
          () => gKron(3, 3), () => gKron(4, 3), () => gOncesiOncul(3), () => gIlkSon(false, 3)]
    };
    [1, 2, 3].forEach(l => { let tries = 0; while (hand[l] + B[l].length < TARGET && tries++ < 6000) pick(GEN[l])(); });

    [1, 2, 3].forEach(l => B[l].forEach(q => {
      let id = 100000 + hash(q._k) % 900000000; while (usedIds.has(id)) id++;
      usedIds.add(id); q.id = id; delete q._k; OUT.push(q);
    }));
  });

  QUESTIONS.push(...OUT);
})();
