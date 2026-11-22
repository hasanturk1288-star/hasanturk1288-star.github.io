/* =========================================================
   KPSS TARİH NOTLARI — BİLGİ TABANI EKİ 2
   Amaç: Kolay seviyesi 100'ün altında kalan ünitelerde her seviyede en az 100 FARKLI soru.
   facts.js ile aynı format; gen.js'ten ÖNCE yüklenir ve FACTS'e doğrudan eklenir.
   Kural: sub özellikleri YALNIZCA o konuya ait olmalı; iç içe konular NOMIX'e eklenir.
   ========================================================= */
(function () {
const EK = {
tarih_bilimi: {
 sub: [["Arkeoloji","⛏️",["Kazılarla gün yüzüne çıkarılan kalıntıları inceler","Yazısız dönemlerin aydınlatılmasında başvurulan temel bilimdir","Höyük ve ören yerlerinde kazı çalışmaları yürütür","Buluntuların yaşını belirlemek için Karbon-14 yönteminden yararlanır"]],
       ["Paleografya","✍️",["Eski yazıları okuma ve çözme bilimidir","El yazmalarının hangi dönemde yazıldığını yazı özelliklerinden belirler","Kâğıt, papirüs ve parşömen üzerindeki eski metinlerle ilgilenir"]],
       ["Epigrafya","🪨",["Taş ve metal gibi sert maddeler üzerine yazılmış kitabeleri inceler","Orhun Yazıtları'nın incelenmesi bu bilimin çalışma alanına girer","Yazıt bilimi olarak da bilinir"]],
       ["Nümizmatik","🪙",["Eski paraları inceler","Sikkelerden bir devletin ekonomik durumu ve egemenlik alanı hakkında bilgi edinir","Para bilimi olarak da bilinir"]]]
},
ilk_cag: {
 sub: [["Asurlar","📚",["Ninova'da bilinen ilk büyük kütüphanelerden birini kurdular","Anadolu'ya ticaret kolonileri kurarak yazıyı getirdiler","Kültepe tabletleri bu topluluğun ticaret faaliyetlerini anlatır"]],
       ["Romalılar","🏛️",["On İki Levha Kanunları'nı hazırladılar","Toplum patriciler ve plebler olarak sınıflara ayrılmıştı","MS 395'te imparatorlukları ikiye ayrıldı"]]]
},
islam_oncesi: {
 sub: [["Kırgızlar","🏔️",["840'ta Uygur Devleti'ni yıkarak Orhun bölgesine hâkim oldular","Manas Destanı bu topluluğa aittir","Yenisey Yazıtları ile ilişkilendirilirler"]],
       ["Avarlar","🐎",["626'da Sasanilerle birlikte İstanbul'u kuşattılar","Göktürklerin baskısıyla batıya göç ettiler","Üzengiyi Avrupa'ya tanıttıkları kabul edilir"]],
       ["Orhun Yazıtları","🗿",["Türk adının geçtiği ilk Türkçe yazılı belgelerdir","Bilge Kağan, Kül Tigin ve Tonyukuk adına dikilmiştir","1893'te Vilhelm Thomsen tarafından çözülmüştür","Türk milletine seslenen öğütler içerir"]],
       ["Kavimler Göçü","🧭",["375'te başladı","Avrupa Hunlarının Karadeniz'in kuzeyinden batıya ilerlemesiyle başladı","Batı Roma İmparatorluğu'nun yıkılışını hızlandırdı","Avrupa'nın etnik yapısını değiştirdi"]]]
},
islam: {
 sub: [["Fatımiler","🕌",["Kuzey Afrika'da kurulan Şii devletidir","Kahire şehrini kurdular","Ezher Camii ve Medresesi'ni kurdular"]],
       ["Eyyubiler","🏰",["Selahaddin Eyyubi tarafından kuruldu","Hıttin Savaşı'nda Haçlıları yenerek Kudüs'ü aldılar","Mısır'daki Fatımi yönetimine son verdiler"]],
       ["Sasaniler","🔥",["İran'da kurulan ve Zerdüştlüğü resmî din kabul eden devlettir","Bizans ile uzun süre mücadele ettiler","Başkentleri Medain (Ktesifon) idi"]]],
 ev: [[909,"909","Fatımi Devleti'nin kuruluşu"],[1171,"1171","Eyyubi Devleti'nin kuruluşu"]]
},
turk_islam: {
 sub: [["Divânu Lugâti't-Türk","📘",["Türkçenin Arapça kadar zengin bir dil olduğunu göstermek amacıyla yazıldı","Abbasi halifesine sunuldu","İlk Türkçe sözlük ve dil bilgisi eseri olarak kabul edilir","İçinde Türk dünyasını gösteren bir harita bulunur"]],
       ["Kutadgu Bilig","📗",["Yusuf Has Hacip tarafından yazıldı","Adı 'mutluluk veren bilgi' anlamına gelir","Devlet yönetimi ve ahlak üzerine öğütler veren manzum bir eserdir","Tabgaç Buğra Han'a sunuldu"]]]
},
turkiye: {
 sub: [["Germiyanoğulları","🏺",["Merkezi Kütahya'dır","Osmanlı'ya çeyiz yoluyla toprak verdiler"]],
       ["Karesioğulları","⚓",["Balıkesir ve çevresinde kuruldu","Osmanlı'ya katılan ilk Anadolu beyliğidir","Osmanlıların Rumeli'ye geçişini kolaylaştıran bir donanmaya sahiptiler"]],
       ["Candaroğulları","🌲",["Kastamonu ve Sinop çevresinde hüküm sürdü","Fatih Sultan Mehmet döneminde Osmanlı topraklarına katıldı"]],
       ["Babai İsyanı","🔥",["1240'ta II. Gıyaseddin Keyhüsrev döneminde çıktı","Baba İlyas ve Baba İshak önderliğinde gerçekleşti","Anadolu'da dinî görünümlü ilk büyük halk ayaklanmasıdır"]]]
},
orta_cag: {
 sub: [["Frank Krallığı","👑",["Şarlman döneminde en güçlü dönemine ulaştı","Puvatya Savaşı'nda (732) Emevilerin Avrupa'daki ilerleyişini durdurdu","843 Verdun Antlaşması ile üçe bölündü"]],
       ["Kara Veba","☠️",["14. yüzyılda Avrupa nüfusunun yaklaşık üçte birinin ölümüne yol açtı","Salgın sonrası iş gücü azalınca serflerin pazarlık gücü arttı","Asya'dan ticaret yollarıyla Avrupa'ya yayıldı"]],
       ["Yüz Yıl Savaşları","⚔️",["İngiltere ile Fransa arasında yapıldı","1337-1453 yılları arasında sürdü","Jeanne d'Arc bu savaşlarda Fransız direnişinin sembolü oldu","Barutlu silahların kullanımı şatoların önemini azalttı"]],
       ["Vikingler","🛶",["İskandinavya kökenli denizci topluluklardır","Avrupa kıyılarına akınlar düzenlediler","Kuzey Amerika'ya Kolomb'dan önce ulaştıkları kabul edilir"]],
       ["Kutsal Roma-Germen İmparatorluğu","🦅",["962'de I. Otto'nun taç giymesiyle kuruldu","Papa ile imparator arasındaki atama (Investitür) çatışması bu devlette yaşandı","1806'da Napolyon döneminde sona erdi"]]],
 ev: [[732,"732","Puvatya Savaşı"],[843,"843","Verdun Antlaşması"],[962,"962","Kutsal Roma-Germen İmparatorluğu'nun kuruluşu"],[1453,"1453","Yüz Yıl Savaşları'nın sona ermesi"]]
},
osm_kultur: {
 sub: [["Vakıf sistemi","🤲",["Mülk ve gelirlerin hayır amacıyla topluma adanmasıdır","Cami, medrese, imaret ve çeşme gibi hizmetlerin giderlerini karşıladı","Devletin sosyal hizmet yükünü hafifletti"]],
       ["İltizam sistemi","💰",["Vergi toplama hakkının belirli bir süre için açık artırmayla satılmasıdır","Devlete peşin gelir sağladı","Mültezimlerin halktan fazla vergi toplamasına yol açabildi"]]]
},
avrupa: {
 sub: [["Otuz Yıl Savaşları","🗡️",["Katolikler ile Protestanlar arasındaki din savaşlarıdır","1618-1648 yılları arasında sürdü","Vestfalya Barışı ile sona erdi"]],
       ["Amerikan Bağımsızlık Savaşı","🗽",["1776'da Bağımsızlık Bildirgesi yayımlandı","On üç koloninin İngiltere'ye karşı mücadelesidir","Fransız İhtilali'ni etkileyen gelişmelerden biridir","Bu sürecin ardından ilk yazılı anayasalardan biri hazırlandı"]],
       ["Mutlakiyet","👑",["Hükümdarın sınırsız yetkiye sahip olduğu yönetim anlayışıdır","Fransa Kralı XIV. Louis bu anlayışın en güçlü temsilcisidir","'Devlet benim' sözü bu yönetim anlayışını özetler"]]],
 ev: [[1618,"1618","Otuz Yıl Savaşları'nın başlaması"],[1776,"1776","Amerika'nın Bağımsızlık Bildirgesi"]]
},
ilkeler: {
 sub: [["Teşvik-i Sanayi Kanunu","🏭",["1927'de çıkarıldı","Sanayi yatırımı yapan özel girişimcilere kolaylıklar sağladı","Liberal ekonomi döneminde özel sektörü desteklemek amacıyla çıkarıldı"]],
       ["Türk Tarih Kurumu","📜",["1931'de kuruldu","Türk tarihini bilimsel yöntemlerle araştırmak amacıyla kuruldu"]],
       ["Türk Dil Kurumu","🔤",["1932'de kuruldu","Türkçeyi yabancı dillerin etkisinden kurtarmak amacıyla kuruldu"]],
       ["Menemen Olayı","⚠️",["1930'da İzmir'de çıktı","Asteğmen Kubilay'ın şehit edilmesiyle sonuçlandı","Serbest Cumhuriyet Fırkası'nın kapanmasından sonra yaşandı"]]],
 ev: [[1927,"1927","Teşvik-i Sanayi Kanunu"],[1931.0412,"12 Nisan 1931","Türk Tarih Kurumu'nun kuruluşu"],[1932.0712,"12 Temmuz 1932","Türk Dil Kurumu'nun kuruluşu"]]
},
dis: {
 sub: [["Nyon Konferansı","🚢",["1937'de toplandı","Akdeniz'deki korsanlık faaliyetlerine karşı düzenlendi","Türkiye'ye Doğu Akdeniz'de güvenlik görevi verildi"]],
       ["Nüfus mübadelesi","🔄",["Lozan görüşmeleri sırasında Türkiye ile Yunanistan arasında kararlaştırıldı","İstanbul Rumları ve Batı Trakya Türkleri mübadele dışında tutuldu","Uygulamada çıkan anlaşmazlıklar sonraki yıllarda çözüme kavuşturuldu"]],
       ["Briand-Kellogg Paktı","🕊️",["1928'de imzalandı","Savaşı ulusal politika aracı olmaktan çıkarmayı amaçladı","Türkiye bu pakta 1929'da katıldı"]],
       ["1925 Türk-Sovyet Antlaşması","🤝",["17 Aralık 1925'te imzalandı","Milletler Cemiyeti'nin Musul kararının hemen ardından imzalandı","Tarafların birbirine karşı saldırmazlık ve tarafsızlık taahhüdünü içerir"]]],
 ev: [[1923.0130,"30 Ocak 1923","Türk-Yunan nüfus mübadelesi sözleşmesi"],[1928,"1928","Briand-Kellogg Paktı'nın imzalanması"],[1937.0914,"Eylül 1937","Nyon Konferansı"],[1939.0623,"23 Haziran 1939","Hatay konusunda Türk-Fransız anlaşması"]]
},
dunya_savas: {
 sub: [["Münih Konferansı","🤝",["1938'de toplandı","Südet bölgesi Almanya'ya bırakıldı","İngiltere ve Fransa'nın yatıştırma politikasının sembolü oldu"]],
       ["Mihver Devletleri","⚙️",["Almanya, İtalya ve Japonya'dan oluşan ittifaktır","Berlin-Roma-Tokyo ekseni olarak da adlandırılır"]],
       ["Atlantik Bildirisi","📜",["1941'de ABD ve İngiltere liderleri tarafından yayımlandı","Birleşmiş Milletler'in kuruluşuna temel oluşturdu"]],
       ["Mançurya Bunalımı","🏯",["1931'de Japonya'nın Mançurya'yı işgal etmesiyle başladı","Milletler Cemiyeti'nin saldırgan devletler karşısındaki etkisizliğini gösterdi"]],
       ["Potsdam Konferansı","🏛️",["1945 yazında toplandı","Almanya'nın silahsızlandırılması ve Nazizmden arındırılması kararlaştırıldı","Japonya'dan koşulsuz teslim olması istendi"]],
       ["Barbarossa Harekâtı","❄️",["1941'de Almanya'nın SSCB'ye saldırısıdır","Almanya'yı iki cephede savaşmak zorunda bıraktı"]]],
 ev: [[1931,"1931","Japonya'nın Mançurya'yı işgali"],[1941.0622,"22 Haziran 1941","Almanya'nın SSCB'ye saldırması (Barbarossa)"],[1941.0814,"14 Ağustos 1941","Atlantik Bildirisi"],[1945.0717,"Temmuz 1945","Potsdam Konferansı"]]
},
cagdas: {
 sub: [["Bağlantısızlar Hareketi","🌍",["1961'de Belgrad'da resmen kuruldu","İki bloğun dışında kalmak isteyen ülkelerin oluşturduğu harekettir","Mısır, Yugoslavya ve Hindistan liderlerinin öncülüğünde ortaya çıktı"]],
       ["Bağdat Paktı","🛡",["Türkiye, Irak, İran, Pakistan ve İngiltere'den oluştu","Türkiye ve Irak'ın öncülüğünde kuruldu","Irak'ın ayrılmasından sonra CENTO adını aldı"]]]
}
};
// FACTS'e ekle (gen.js çalışmadan önce)
Object.entries(EK).forEach(([k, v]) => {
  const F = FACTS[k] || (FACTS[k] = {rel: [], sub: [], ev: []});
  ["rel", "sub", "ev"].forEach(p => { if (v[p]) F[p] = (F[p] || []).concat(v[p]); });
});
// Anlamca iç içe konular birbirine çeldirici yapılmasın
NOMIX.push(
  ["Kırgızlar","Uygurlar"],["Avarlar","Göktürkler"],["Orhun Yazıtları","Göktürkler"],["Kavimler Göçü","Avrupa Hunları"],["Kavimler Göçü","Asya Hun Devleti"],
  ["Eyyubiler","Fatımiler"],["Divânu Lugâti't-Türk","Karahanlılar"],["Kutadgu Bilig","Karahanlılar"],["Kutadgu Bilig","Divânu Lugâti't-Türk"],
  ["Babai İsyanı","Anadolu Selçuklu Devleti"],["Germiyanoğulları","Karamanoğulları"],
  ["Kara Veba","Feodalite"],["Yüz Yıl Savaşları","Feodalite"],["Kutsal Roma-Germen İmparatorluğu","Katolik Kilisesi"],["Frank Krallığı","Feodalite"],
  ["Vakıf sistemi","Lonca teşkilatı"],["İltizam sistemi","Tımar sistemi"],
  ["Otuz Yıl Savaşları","Reform"],["Amerikan Bağımsızlık Savaşı","Aydınlanma Çağı"],["Mutlakiyet","Fransız İhtilali"],["Mutlakiyet","Aydınlanma Çağı"],
  ["Teşvik-i Sanayi Kanunu","Devletçilik"],["Türk Tarih Kurumu","Milliyetçilik"],["Türk Dil Kurumu","Milliyetçilik"],["Türk Tarih Kurumu","Türk Dil Kurumu"],["Menemen Olayı","Laiklik"],["Menemen Olayı","İnkılapçılık"],
  ["Nüfus mübadelesi","1930 Türk-Yunan Antlaşması"],["1925 Türk-Sovyet Antlaşması","Musul sorunu"],
  ["Münih Konferansı","Nazi Almanyası"],["Münih Konferansı","II. Dünya Savaşı"],["Mihver Devletleri","Nazi Almanyası"],["Mihver Devletleri","Faşist İtalya"],["Mihver Devletleri","II. Dünya Savaşı"],
  ["Atlantik Bildirisi","II. Dünya Savaşı"],["Mançurya Bunalımı","II. Dünya Savaşı"],["Potsdam Konferansı","Yalta Konferansı"],["Potsdam Konferansı","II. Dünya Savaşı"],
  ["Barbarossa Harekâtı","Nazi Almanyası"],["Barbarossa Harekâtı","II. Dünya Savaşı"],
  ["Bağlantısızlar Hareketi","Soğuk Savaş'ın sona ermesi"],["Bağdat Paktı","NATO"]
);
// Kodlamalar (bu konulardan üretilen sorularda gösterilir)
Object.assign(KODLAR, {
  "Arkeoloji": "ARKEOLOJİ = kazı + kalıntı ⛏️", "Paleografya": "PALEO-GRAFYA = eski yazı ✍️ (kâğıt, papirüs)", "Epigrafya": "EPİ-GRAFYA = taş üstüne yazı 🪨 (kitabe)",
  "Nümizmatik": "NÜMİZ = para 🪙", "Kırgızlar": "KIRGIZ → Uygur'u yıktı, Manas'ı söyledi 🏔️", "Orhun Yazıtları": "BKT = Bilge – Kül Tigin – Tonyukuk 🗿",
  "Fatımiler": "FATIMİ → Kahire + Ezher 🕌", "Eyyubiler": "EYYUBİ → Selahaddin + Hıttin + Kudüs 🏰", "Karesioğulları": "KARESİ → ilk katılan + Rumeli'ye köprü donanma ⚓",
  "Babai İsyanı": "BABAİ 1240 → Kösedağ 1243'ün habercisi 🔥", "Kara Veba": "VEBA → nüfus ↓, serf ↑ ☠️", "Yüz Yıl Savaşları": "100 yıl değil 116 yıl! 1337–1453 ⚔️",
  "İltizam sistemi": "İLTİZAM süreli, MALİKÂNE ömür boyu 💰", "Mutlakiyet": "'Devlet benim' → XIV. Louis 👑", "Menemen Olayı": "SCF kapandı → Menemen → Kubilay ⚠️",
  "Türk Tarih Kurumu": "Tarih 1931, Dil 1932: önce TARİH sonra DİL 📜", "Türk Dil Kurumu": "Tarih 1931, Dil 1932: önce TARİH sonra DİL 🔤",
  "Mihver Devletleri": "MİHVER = Berlin–Roma–Tokyo ⚙️", "Potsdam Konferansı": "Yalta planladı, POTSDAM uyguladı 🏛️", "Bağdat Paktı": "BAĞDAT → Irak çıktı → CENTO 🛡"
});
})();
