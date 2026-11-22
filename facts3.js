/* =========================================================
   TARİH NOTLARI — BİLGİ TABANI EKİ 3 (TYT / AYT kapsamı)
   Yeni üniteler: Tarih Bilimi, İlk Çağ, İslam Tarihi, Orta Çağ Avrupası, Yeni-Yakın Çağ Avrupası, II. Dünya Savaşı.
   Format facts.js ile aynıdır. Kural: sub özellikleri YALNIZCA o konuya ait olmalı.
   ========================================================= */
Object.assign(FACTS, {

/* ─────────── 📅 TARİH BİLİMİ VE ZAMAN ─────────── */
tarih_bilimi: {
 rel: [
  ["kavram","Geçmişteki olayları yer ve zaman belirterek, sebep-sonuç ilişkisi içinde inceleyen bilim hangisidir?","Tarih",1],
  ["bilim","Kazı yoluyla ortaya çıkarılan kalıntıları inceleyen yardımcı bilim hangisidir?","Arkeoloji",1],
  ["bilim","Eski yazıları okuyan yardımcı bilim hangisidir?","Paleografya",2],
  ["bilim","Taş, kemik ve metal üzerine yazılmış kitabeleri inceleyen yardımcı bilim hangisidir?","Epigrafya",2],
  ["bilim","Eski paraları inceleyen yardımcı bilim hangisidir?","Nümizmatik",2],
  ["bilim","Ferman ve berat gibi resmî belgeleri inceleyen yardımcı bilim hangisidir?","Diplomatik",3],
  ["bilim","Olayları zaman sırasına koyan ve zamanı ölçen yardımcı bilim hangisidir?","Kronoloji",1],
  ["bilim","Mühürleri inceleyen yardımcı bilim hangisidir?","Sfrajistik",3],
  ["bilim","Armaları inceleyen yardımcı bilim hangisidir?","Heraldik",3],
  ["bilim","Soy kütüklerini (şecere) inceleyen yardımcı bilim hangisidir?","Genealoji",3],
  ["bilim","Kelimelerin kökenini inceleyen yardımcı bilim hangisidir?","Etimoloji",2],
  ["bilim","İnsan topluluklarının fiziki ve kültürel özelliklerini inceleyen bilim hangisidir?","Antropoloji",2],
  ["takvim","Ay yılını esas alan ve Hicret'i başlangıç kabul eden takvim hangisidir?","Hicri takvim",1],
  ["takvim","Hz. İsa'nın doğumunu başlangıç kabul eden takvim hangisidir?","Miladi takvim",1],
  ["takvim","Güneş yılını esas alıp Hicret'i başlangıç kabul eden ve Osmanlı'da mali işlerde kullanılan takvim hangisidir?","Rumi takvim",2],
  ["takvim","Büyük Selçuklu Sultanı Melikşah döneminde hazırlanan takvim hangisidir?","Celali takvimi",3],
  ["takvim","Eski Türklerin kullandığı, her yılı bir hayvanla adlandıran takvim hangisidir?","On İki Hayvanlı Türk Takvimi",1],
  ["takvim","Julius Caesar döneminde düzenlenen takvim hangisidir?","Jülyen takvimi",2],
  ["takvim","1582'de Papa XIII. Gregorius döneminde düzenlenen takvim hangisidir?","Gregoryen takvim",3],
  ["donem","Yontma taştan aletlerin kullanıldığı, insanların avcı-toplayıcı olduğu dönem hangisidir?","Paleolitik Çağ (Yontma Taş)",1],
  ["donem","Tarımın başlayıp yerleşik hayata geçildiği dönem hangisidir?","Neolitik Çağ (Cilalı Taş)",1],
  ["donem","Bakırın taşla birlikte kullanıldığı dönem hangisidir?","Kalkolitik Çağ (Bakır Çağı)",2],
  ["donem","Yazının bulunmasıyla başlayan ilk tarih çağı hangisidir?","İlk Çağ",1],
  ["donem","İstanbul'un fethiyle (1453) başlayan çağ hangisidir?","Yeni Çağ",1],
  ["donem","Fransız İhtilali (1789) ile başlayan çağ hangisidir?","Yakın Çağ",1],
  ["yer","Bilinen en eski tapınak alanlarından biri olan ve Şanlıurfa'da bulunan ören yeri hangisidir?","Göbeklitepe",1],
  ["yer","Konya'da bulunan ve en eski yerleşik köy yerleşimlerinden sayılan Neolitik ören yeri hangisidir?","Çatalhöyük",1],
  ["yer","Antalya'da bulunan ve Paleolitik Çağ'a ait ünlü mağara hangisidir?","Karain Mağarası",2],
  ["yer","Burdur'da bulunan Neolitik yerleşim yeri hangisidir?","Hacılar",2]
 ],
 sub: [
  ["Paleolitik Çağ","🗿",["Yontma taştan aletler kullanıldı","İnsanlar avcılık ve toplayıcılıkla geçindi","Ateş kullanılmaya başlandı","İnsanlar mağaralarda ve kaya altlarında yaşadı"]],
  ["Neolitik Çağ","🌾",["Tarım başladı ve hayvanlar evcilleştirildi","Yerleşik hayata geçildi","İlk köy yerleşmeleri kuruldu","Çanak çömlek yapımı ve dokumacılık başladı"]],
  ["Maden Çağları","⚒️",["Bakır, tunç ve demir sırasıyla kullanıldı","Tunç, bakır ile kalayın karıştırılmasıyla elde edildi","Şehir devletleri ve ticaret gelişti","Son evresinde yazının bulunmasıyla tarih çağları başladı"]],
  ["Hicri takvim","🌙",["Ay yılını esas alır","Hz. Muhammed'in Mekke'den Medine'ye göçünü başlangıç kabul eder","Hz. Ömer döneminde kullanılmaya başlandı","Bir yılı yaklaşık 354 gündür"]],
  ["Miladi takvim","☀️",["Hz. İsa'nın doğumunu başlangıç kabul eder","Türkiye'de 1926'dan itibaren resmî takvimdir","1582'deki Gregoryen düzenlemesiyle bugünkü hâlini aldı","Günümüzde dünyada en yaygın kullanılan takvimdir"]],
  ["Rumi takvim","📆",["Osmanlı'da 1840'tan itibaren mali işlerde kullanıldı","Güneş yılını esas alıp Hicret'i başlangıç kabul eder","Mart ayını mali yılın başı sayardı"]],
  ["On İki Hayvanlı Türk Takvimi","🐉",["Eski Türkler tarafından kullanıldı","Her yıl bir hayvan adıyla anılır","12 yıllık devreler hâlinde tekrarlanır"]],
  ["Tarih bilimi","🔍",["Geçmişi yer ve zaman belirterek inceler","Deney ve gözlem yapılamadığı için belgelere dayanır","Olayları sebep-sonuç ilişkisi içinde açıklar","Yardımcı bilimlerden yararlanır"]]
 ],
 ev: [[-6000,"MÖ 6000 (yaklaşık)","Hacılar yerleşiminin gelişmesi"]]
},

/* ─────────── 🏺 İLK ÇAĞ UYGARLIKLARI ─────────── */
ilk_cag: {
 rel: [
  ["uygarlik","Yazıyı ilk kez kullanan (çivi yazısı) uygarlık hangisidir?","Sümerler",1],
  ["uygarlik","Hammurabi Kanunları hangi uygarlığa aittir?","Babil",1],
  ["uygarlik","Kadeş Antlaşması'nı Mısır ile imzalayan Anadolu uygarlığı hangisidir?","Hititler",1],
  ["uygarlik","Parayı ilk kez kullanan uygarlık hangisidir?","Lidyalılar",1],
  ["uygarlik","Kral Yolu'nu yapan ve ülkeyi satraplıklara bölerek yöneten uygarlık hangisidir?","Persler",2],
  ["uygarlik","Alfabeyi geliştirerek Akdeniz'e yayan uygarlık hangisidir?","Fenikeliler",1],
  ["uygarlik","Hiyeroglif yazısıyla ve güneş yılı takvimiyle tanınan uygarlık hangisidir?","Mısırlılar",1],
  ["uygarlik","Ninova Kütüphanesi'ni kuran uygarlık hangisidir?","Asurlar",2],
  ["uygarlik","Başkenti Tuşpa olan ve madencilikte ilerleyen Anadolu uygarlığı hangisidir?","Urartular",2],
  ["uygarlik","Başkenti Gordion olan ve tarımı önemseyen Anadolu uygarlığı hangisidir?","Frigler",2],
  ["uygarlik","Batı Anadolu kıyılarında şehir devletleri kuran ve bilimde ilerleyen uygarlık hangisidir?","İyonyalılar",1],
  ["belge","Bilinen ilk yazılı antlaşma hangisidir?","Kadeş Antlaşması",1],
  ["belge","Sümerlerin hazırladığı bilinen ilk yazılı kanunlar hangisidir?","Urnammu Kanunları",2],
  ["belge","'Göze göz, dişe diş' ilkesine dayanan kanunlar hangisidir?","Hammurabi Kanunları",1],
  ["belge","Roma'da patrici ve plebler arasındaki eşitsizliği azaltmak için yazılan kanunlar hangisidir?","On İki Levha Kanunları",2],
  ["belge","Roma'da Hristiyanlığı serbest bırakan 313 tarihli belge hangisidir?","Milano Fermanı",2],
  ["kisi","'Her şeyin ana maddesi sudur' diyen Miletli düşünür kimdir?","Thales",2],
  ["kisi","'Tarihin babası' kabul edilen Halikarnaslı tarihçi kimdir?","Heredot",1],
  ["kisi","Zenginliğiyle ünlü ve Perslere yenilen Lidya kralı kimdir?","Krezüs (Karun)",3],
  ["kisi","Truva kazılarını başlatan Alman arkeolog kimdir?","Heinrich Schliemann",3],
  ["kisi","Pers İmparatorluğu'nu yıkan Makedonya kralı kimdir?","Büyük İskender",1],
  ["kisi","Milano Fermanı ile Hristiyanlığı serbest bırakan Roma imparatoru kimdir?","I. Konstantin",2],
  ["kisi","Kadeş Savaşı'nda Hititlerle savaşan Mısır firavunu kimdir?","II. Ramses",2],
  ["yer","Hitit başkenti Hattuşa bugün hangi ilimizdedir?","Çorum",2],
  ["yer","Frig başkenti Gordion bugün hangi ilimizin sınırları içindedir?","Ankara",2],
  ["yer","Urartu başkenti Tuşpa bugün hangi ilimizdedir?","Van",2],
  ["yer","Lidya başkenti Sard bugün hangi ilimizin sınırları içindedir?","Manisa",2],
  ["yer","İyon şehri Efes bugün hangi ilimizdedir?","İzmir",2]
 ],
 sub: [
  ["Sümerler","📜",["Çivi yazısını buldular","Ay yılı esaslı takvimi geliştirdiler","Ziggurat adı verilen tapınaklar yaptılar","Bilinen ilk yazılı kanunları (Urnammu) hazırladılar","Gılgamış Destanı bu uygarlığa aittir"],"SÜMER → Sözün (yazının) ilk mekânı"],
  ["Mısırlılar","🏺",["Hiyeroglif yazısını kullandılar","Güneş yılı esaslı takvimi geliştirdiler","Piramitler yaptılar ve mumyalamayı geliştirdiler","Nil taşkınlarını hesaplamak için geometri ve astronomide ilerlediler"],"MISIR → Mumya + Nil + Güneş takvimi"],
  ["Hititler","⚖️",["Bilinen ilk yazılı antlaşma olan Kadeş Antlaşması'nı imzaladılar","Başkentleri Hattuşa'dır","Pankuş adlı meclisleri vardı","'Bin tanrılı halk' olarak anılırlar","Anal (yıllık) yazdırarak tarih yazıcılığının ilk örneklerini verdiler"],"HİTİT → Hattuşa + İlk antlaşma"],
  ["Lidyalılar","💰",["Parayı ilk kez kullandılar","Başkentleri Sard'dır","Krezüs (Karun) bu uygarlığın kralıdır","Kral mezarı olarak tümülüsler (Bintepeler) yaptılar"],"LİDYA → Lira (para) ilk burada"],
  ["Persler","🛣️",["Kral Yolu'nu yaptılar","Ülkeyi satraplıklara bölerek yönettiler","Lidya'yı yıkarak Anadolu'ya hâkim oldular","Büyük İskender tarafından yıkıldılar"]],
  ["Fenikeliler","🔤",["Alfabeyi geliştirip Akdeniz'e yaydılar","Denizcilik ve ticarette ilerleyip koloniler kurdular","Kartaca şehrini kurdular","Mor boya ticaretiyle ünlüdürler"],"FENİKE → Fena hızlı alfabe yayıcı denizciler"],
  ["İyonyalılar","🏛️",["Batı Anadolu kıyılarında şehir devletleri kurdular","Thales ve Heredot gibi düşünürler yetiştirdiler","Efes ve Milet önemli şehirleridir","Bilim ve felsefede Batı düşüncesinin temellerini attılar"]],
  ["Urartular","🏔️",["Başkentleri Tuşpa'dır","Madencilikte ileri gittiler","Sulama kanalları ve barajlar yaptılar","Doğu Anadolu'da kuruldular"]],
  ["Frigler","🌾",["Başkentleri Gordion'dur","Tarım ve dokumacılıkta ilerlediler","Kral Midas efsanesi bu uygarlıkla ilgilidir","Tarım aletlerine zarar vermeyi ağır suç saydılar"]]
 ],
 ev: [[-2350,"MÖ 2350 (yaklaşık)","Akad İmparatorluğu'nun kuruluşu"],[-612,"MÖ 612","Asur'un başkenti Ninova'nın düşmesi"]]
},

/* ─────────── 🕋 İSLAM TARİHİ VE MEDENİYETİ ─────────── */
islam: {
 rel: [
  ["kisi","Hicri takvimi resmî olarak başlatan halife kimdir?","Hz. Ömer",2],
  ["kisi","Kur'an-ı Kerim'i çoğaltıp İslam şehirlerine gönderen halife kimdir?","Hz. Osman",2],
  ["kisi","Kur'an-ı Kerim'i ilk kez kitap hâlinde topla(t)an halife kimdir?","Hz. Ebubekir",2],
  ["kisi","Dört Halife döneminin son halifesi kimdir?","Hz. Ali",1],
  ["kisi","Emevi Devleti'nin kurucusu kimdir?","Muaviye",1],
  ["kisi","Endülüs Emevi Devleti'nin kurucusu kimdir?","I. Abdurrahman",3],
  ["kisi","Cebirin kurucusu kabul edilen İslam bilgini kimdir?","Harezmi",1],
  ["kisi","'El-Kanun fi't-Tıb' adlı eseriyle tanınan hekim ve filozof kimdir?","İbn-i Sina",1],
  ["kisi","'Mukaddime' adlı eseriyle tarih felsefesinin öncüsü sayılan bilgin kimdir?","İbn-i Haldun",2],
  ["kisi","Optik (ışık) çalışmalarıyla tanınan İslam bilgini kimdir?","İbn-i Heysem",3],
  ["kisi","Dünyanın çevresini büyük bir doğrulukla hesaplayan Türk-İslam bilgini kimdir?","Biruni",3],
  ["savas","Müslümanlarla Mekkeli müşrikler arasındaki ilk savaş hangisidir?","Bedir Savaşı",1],
  ["savas","Okçuların yerlerini terk etmesiyle Müslümanların zor durumda kaldığı savaş hangisidir?","Uhud Savaşı",1],
  ["savas","Medine'nin çevresine hendek kazılarak savunulduğu savaş hangisidir?","Hendek Savaşı",1],
  ["savas","Hz. Ali ile Muaviye arasında yapılan savaş hangisidir?","Sıffin Savaşı",2],
  ["savas","Hz. Ali ile Hz. Aişe taraftarları arasında yapılan savaş hangisidir?","Cemel Savaşı",2],
  ["savas","Hz. Hüseyin'in şehit edildiği olay hangisidir?","Kerbela Olayı",1],
  ["savas","Emevilerin Avrupa'daki ilerleyişinin Franklarca durdurulduğu 732 savaşı hangisidir?","Puvatya (Tours) Savaşı",2],
  ["savas","Bizans'a karşı kazanılıp Suriye'nin fethini sağlayan savaş hangisidir?","Yermük Savaşı",3],
  ["savas","Sasanilere karşı kazanılıp İran'ın fethinin yolunu açan savaş hangisidir?","Kadisiye Savaşı",3],
  ["belge","Müslümanlarla Mekkeliler arasında imzalanan ve Müslümanların tanınmasını sağlayan antlaşma hangisidir?","Hudeybiye Antlaşması",1],
  ["belge","Hz. Muhammed'in Medine'de farklı topluluklarla yaptığı ve ilk yazılı anayasa sayılan belge hangisidir?","Medine Sözleşmesi",2],
  ["devlet","Arap olmayan Müslümanları ikinci sınıf gören (mevali) politikayı uygulayan devlet hangisidir?","Emeviler",1],
  ["devlet","Türklerin orduda ve yönetimde yükseldiği, başkenti Bağdat olan devlet hangisidir?","Abbasiler",1],
  ["devlet","İber Yarımadası'nda kurulan ve Kurtuba'yı bilim merkezi yapan devlet hangisidir?","Endülüs Emevileri",1],
  ["devlet","Kuzey Afrika'da kurulup Kahire'yi kuran ve başkent yapan Şii devlet hangisidir?","Fatımiler",2],
  ["kurum","Abbasiler döneminde Bağdat'ta kurulan çeviri ve bilim merkezi hangisidir?","Beytü'l-Hikme",2],
  ["kurum","Hz. Muhammed döneminde Mescid-i Nebevi'nin yanında kurulan ilk eğitim yeri hangisidir?","Suffa",2],
  ["kavram","Hz. Muhammed'in Mekke'den Medine'ye göçüne ne ad verilir?","Hicret",1],
  ["kavram","Emevilerin Arap olmayan Müslümanlara verdiği ad nedir?","Mevali",2]
 ],
 sub: [
  ["Hz. Muhammed dönemi","☪️",["Hicret ile Medine'de İslam devletinin temeli atıldı","Bedir, Uhud ve Hendek savaşları yapıldı","Hudeybiye Antlaşması imzalandı","Medine Sözleşmesi hazırlandı","Mekke fethedildi (630)"],"B-U-H → Bedir, Uhud, Hendek sırası"],
  ["Dört Halife Dönemi","🕌",["Halifeler seçimle iş başına geldi","Hicri takvim kullanılmaya başlandı","Kur'an-ı Kerim kitap hâlinde toplandı ve çoğaltıldı","Suriye, Irak, İran ve Mısır fethedildi","Cemel ve Sıffin savaşları yaşandı"],"E-Ö-O-A → Ebubekir, Ömer, Osman, Ali"],
  ["Emeviler","🏛️",["Muaviye tarafından kuruldu","Halifelik saltanata dönüştü","Arap milliyetçiliği (mevali politikası) uyguladı","Başkentleri Şam'dır","Kerbela Olayı bu dönemde yaşandı"],"EMEVİ → Emanet (halifelik) babadan oğula; Arap önce"],
  ["Abbasiler","📚",["Başkentleri Bağdat'tır","Türkler orduda ve yönetimde yükseldi","Beytü'l-Hikme kuruldu","Talas Savaşı'nda Çinlileri yendiler","Moğolların Bağdat'ı almasıyla (1258) yıkıldılar"],"ABBASİ → Bağdat + Bilim + Türk askerleri"],
  ["Endülüs Emevileri","🏰",["İber Yarımadası'nda kuruldu","I. Abdurrahman tarafından kuruldu","Kurtuba önemli bir bilim merkezi oldu","İslam bilimi bu yoldan Avrupa'ya aktarıldı"]],
  ["İslam bilginleri","🔬",["Harezmi cebirin kurucusu kabul edilir","İbn-i Sina'nın El-Kanun adlı eseri Avrupa'da yüzyıllarca okutuldu","Biruni dünyanın çevresini hesapladı","İbn-i Haldun Mukaddime'yi yazdı"]]
 ],
 ev: [[636,"636","Yermük Savaşı"],[657,"657","Sıffin Savaşı"]]
},

/* ─────────── ⚜️ ORTA ÇAĞ'DA AVRUPA ─────────── */
orta_cag: {
 rel: [
  ["kavram","Orta Çağ Avrupası'nda senyör ve serflerden oluşan toprağa dayalı düzene ne ad verilir?","Feodalite",1],
  ["kavram","Feodal düzende toprağa bağlı yaşayan köylüye ne ad verilir?","Serf",1],
  ["kavram","Feodal düzende geniş topraklara sahip toprak beyine ne ad verilir?","Senyör",1],
  ["kavram","Katolik Kilisesi'nin para karşılığı sattığı günah çıkarma belgesine ne ad verilir?","Endülijans",2],
  ["kavram","Kilisenin bir kişiyi din topluluğundan dışlamasına ne ad verilir?","Aforoz",2],
  ["kavram","Kilisenin desteklediği, dinî doğmalara dayalı düşünce sistemine ne ad verilir?","Skolastik düşünce",1],
  ["kavram","Orta Çağ sonlarında şehirlerde güçlenen tüccar ve zanaatkâr sınıfına ne ad verilir?","Burjuvazi",2],
  ["belge","İngiltere'de kralın yetkilerini ilk kez sınırlayan 1215 tarihli belge hangisidir?","Magna Carta",1],
  ["savas","Haçlıların Kudüs'ü ele geçirdiği sefer hangisidir?","I. Haçlı Seferi",1],
  ["savas","Haçlıların İstanbul'u yağmalayıp Latin İmparatorluğu kurduğu sefer hangisidir?","IV. Haçlı Seferi",2],
  ["savas","İngiltere ile Fransa arasında 1337–1453 yılları arasında süren savaşlar hangisidir?","Yüz Yıl Savaşları",2],
  ["savas","Selahaddin Eyyubi'nin Haçlıları yenerek Kudüs'ü geri aldığı savaş hangisidir?","Hıttin Savaşı",2],
  ["kisi","Clermont'ta I. Haçlı Seferi çağrısını yapan papa kimdir?","II. Urbanus",2],
  ["kisi","800 yılında papa tarafından imparator ilan edilen Frank hükümdarı kimdir?","Şarlman",1],
  ["kisi","Ayasofya'yı yaptıran ve Roma hukukunu derleten Bizans imparatoru kimdir?","I. Justinianus",1],
  ["kisi","Kudüs'ü Haçlılardan geri alan Eyyubi sultanı kimdir?","Selahaddin Eyyubi",1],
  ["kisi","Moğol İmparatorluğu'nun kurucusu kimdir?","Cengiz Han",1],
  ["kisi","Bağdat'ı alarak Abbasi Devleti'ne son veren Moğol hükümdarı kimdir?","Hülagü Han",2],
  ["devlet","Batı Avrupa'da kurulan ve Şarlman döneminde en güçlü hâline ulaşan devlet hangisidir?","Frank Krallığı",1],
  ["devlet","Doğu Roma İmparatorluğu olarak da bilinen ve başkenti İstanbul olan devlet hangisidir?","Bizans İmparatorluğu",1],
  ["devlet","IV. Haçlı Seferi sırasında İstanbul'da kurulan devlet hangisidir?","Latin İmparatorluğu",3],
  ["kurum","Orta Çağ Avrupası şehirlerinde aynı meslekten esnafın oluşturduğu birliklere ne ad verilir?","Gildler",2]
 ],
 sub: [
  ["Feodalite","🏰",["Toprağa dayalı bir yönetim ve toplum düzenidir","Senyörler ile serfler arasında hiyerarşik bir ilişki vardı","Merkezî krallık otoritesi zayıftı","Kavimler Göçü sonrası güvensizlik ortamında doğdu"],"FEODAL → Fief (toprak) + Efendi (senyör)"],
  ["Haçlı Seferleri","✝️",["Papa II. Urbanus'un çağrısıyla başladı","Kudüs'ü ele geçirmek amaçlandı","Avrupa'da feodalitenin zayıflamasına ve ticaretin gelişmesine yol açtı","IV. sefer sırasında İstanbul yağmalandı"],"HAÇLI → Kudüs hedef, ticaret sonuç"],
  ["Bizans İmparatorluğu","🏛️",["Doğu Roma İmparatorluğu olarak da bilinir","Başkenti İstanbul'dur","Ayasofya I. Justinianus döneminde yapıldı","1453'te Osmanlılar tarafından yıkıldı"]],
  ["Katolik Kilisesi","⛪",["Endülijans satarak gelir elde etti","Aforoz yetkisiyle krallar üzerinde baskı kurdu","Skolastik düşünceyi savundu","Latince dinî ayinlerin dili oldu"]],
  ["Magna Carta","📜",["1215'te İngiltere'de imzalandı","Kralın yetkileri ilk kez sınırlandı","Soyluların hakları güvence altına alındı","Anayasal düzenin gelişiminde ilk adımlardan sayılır"],"MAGNA = Büyük (ferman) → kral sınırlandı"],
  ["Moğol İmparatorluğu","🏹",["Cengiz Han tarafından kuruldu","Yasa adlı kanunlarla yönetildi","Bağdat'ı alarak Abbasi Devleti'ne son verdi","İpek Yolu'nda güvenliği sağlayarak ticareti canlandırdı"]]
 ],
 ev: [[1270,"1270","Son büyük Haçlı Seferi"]]
},

/* ─────────── 🧭 YENİ VE YAKIN ÇAĞ AVRUPASI ─────────── */
avrupa: {
 rel: [
  ["kisi","Ümit Burnu'nu dolaşarak deniz yoluyla Hindistan'a ulaşan denizci kimdir?","Vasco da Gama",1],
  ["kisi","1492'de Amerika'ya ulaşan denizci kimdir?","Kristof Kolomb",1],
  ["kisi","Dünyanın çevresini dolaşan ilk sefere öncülük eden denizci kimdir?","Macellan",1],
  ["kisi","Ümit Burnu'nu ilk kez geçen Portekizli denizci kimdir?","Bartolomeu Dias",2],
  ["kisi","Reform hareketini başlatan Alman din adamı kimdir?","Martin Luther",1],
  ["kisi","Matbaayı geliştirerek Avrupa'da yaygınlaştıran kişi kimdir?","Johannes Gutenberg",1],
  ["kisi","'Prens' adlı eseriyle siyaset biliminin öncüsü sayılan düşünür kimdir?","Machiavelli",2],
  ["kisi","Güneş merkezli evren modelini ortaya koyan bilim insanı kimdir?","Kopernik",2],
  ["kisi","'Toplum Sözleşmesi' adlı eserin yazarı kimdir?","Jean-Jacques Rousseau",2],
  ["kisi","'Kanunların Ruhu' eserinde kuvvetler ayrılığını savunan düşünür kimdir?","Montesquieu",2],
  ["kisi","Buhar makinesini geliştirerek Sanayi İnkılabı'na öncülük eden kimdir?","James Watt",1],
  ["kisi","Fransız İhtilali'nden sonra imparator olan Fransız lider kimdir?","Napolyon Bonapart",1],
  ["kisi","Kalvenizmi kuran din adamı kimdir?","Jean Calvin",3],
  ["hareket","Avrupa'da sanat ve bilimde antik çağ eserlerine dönüşle başlayan yeniden doğuş hareketi hangisidir?","Rönesans",1],
  ["hareket","Katolik Kilisesi'ne karşı başlatılan dinde yenileşme hareketi hangisidir?","Reform",1],
  ["hareket","Aklı ve bilimi ön plana çıkaran 18. yüzyıl düşünce hareketi hangisidir?","Aydınlanma Çağı",1],
  ["hareket","Buhar gücüyle makineleşmeyi başlatan, 18. yüzyılda İngiltere'de başlayan gelişme hangisidir?","Sanayi İnkılabı",1],
  ["hareket","Milliyetçilik, eşitlik ve özgürlük fikirlerini yayan 1789 olayı hangisidir?","Fransız İhtilali",1],
  ["hareket","Altın ve gümüşü zenginliğin temel ölçüsü sayan ekonomik anlayış hangisidir?","Merkantilizm",2],
  ["hareket","Avrupalıların 15. yüzyılda yeni ticaret yolları ve topraklar aramasıyla başlayan süreç hangisidir?","Coğrafi Keşifler",1],
  ["belge","Fransız İhtilali'nden sonra ilan edilen insan hakları belgesi hangisidir?","İnsan ve Yurttaş Hakları Bildirisi",1],
  ["belge","Lutherciliğin Almanya'da resmen tanındığı 1555 tarihli antlaşma hangisidir?","Augsburg Barışı",3],
  ["belge","Otuz Yıl Savaşları'nı sona erdiren 1648 tarihli antlaşma hangisidir?","Vestfalya Barışı",2],
  ["belge","İngiltere'de 1689'da kabul edilen ve parlamentonun üstünlüğünü sağlayan belge hangisidir?","Haklar Bildirgesi (Bill of Rights)",3],
  ["konferans","Napolyon sonrası Avrupa düzenini belirlemek için 1815'te toplanan kongre hangisidir?","Viyana Kongresi",1]
 ],
 sub: [
  ["Coğrafi Keşifler","🧭",["Pusulanın kullanılması ve gemi yapımındaki gelişmelerle mümkün oldu","Atlas Okyanusu limanları önem kazandı, Akdeniz limanları önemini yitirdi","Sömürgecilik başladı","Avrupa'ya altın ve gümüş akışı arttı","İpek ve Baharat yollarının önemi azaldı"],"KEŞİF → Akdeniz söndü, Atlas parladı"],
  ["Rönesans","🎨",["İtalya'da başladı","Antik Yunan ve Roma eserleri yeniden incelendi","Sanat ve bilimde kilisenin etkisi azaldı","Leonardo da Vinci ve Michelangelo bu dönemin sanatçılarıdır"],"RÖNESANS = Yeniden doğuş, İtalya'da"],
  ["Reform","🕯️",["Martin Luther tarafından başlatıldı","Katolik Kilisesi'nin endülijans satışına tepki olarak doğdu","Protestanlık ve Kalvenizm gibi mezhepler ortaya çıktı","Avrupa'da din savaşlarına yol açtı","İncil yerel dillere çevrildi"],"REFORM = Din düzeni yeniden; Almanya'da"],
  ["Fransız İhtilali","🗽",["1789'da başladı","Milliyetçilik, eşitlik, özgürlük ve adalet fikirlerini yaydı","Yakın Çağ'ın başlangıcı kabul edilir","İnsan ve Yurttaş Hakları Bildirisi ilan edildi","Milliyetçilik fikri çok uluslu imparatorlukları sarstı"],"1789 → Milliyetçilik kıvılcımı"],
  ["Sanayi İnkılabı","🏭",["18. yüzyılda İngiltere'de başladı","Buhar makinesinin kullanılmasıyla hız kazandı","Ham madde ve pazar arayışı sömürgeciliği artırdı","İşçi sınıfı ortaya çıktı ve sosyalizm gibi akımlar doğdu","Atölyelerin yerini fabrikalar aldı"],"SANAYİ → Buhar + Fabrika + İşçi"],
  ["Aydınlanma Çağı","💡",["Akıl ve bilim ön plana çıktı","Montesquieu, Voltaire ve Rousseau bu dönemin düşünürleridir","Mutlak monarşiler eleştirildi","Fransız İhtilali'ne fikirsel zemin hazırladı"]]
 ],
 ev: [[1543,"1543","Kopernik'in güneş merkezli evren modelini yayımlaması"]]
},

/* ─────────── ✈️ İKİ SAVAŞ ARASI VE II. DÜNYA SAVAŞI ─────────── */
dunya_savas: {
 rel: [
  ["kisi","İtalya'da faşist rejimi kuran lider kimdir?","Benito Mussolini",1],
  ["kisi","Almanya'da Nazi rejimini kuran lider kimdir?","Adolf Hitler",1],
  ["kisi","II. Dünya Savaşı sırasında İngiltere başbakanı olan kimdir?","Winston Churchill",1],
  ["kisi","II. Dünya Savaşı sırasında Sovyetler Birliği'nin lideri kimdir?","Joseph Stalin",1],
  ["kisi","1929 bunalımından sonra 'New Deal' politikasını uygulayan ABD başkanı kimdir?","Franklin D. Roosevelt",2],
  ["kisi","II. Dünya Savaşı yıllarında Türkiye'nin cumhurbaşkanı kimdir?","İsmet İnönü",1],
  ["kisi","I. Dünya Savaşı sonunda 14 maddelik ilkelerini açıklayan ABD başkanı kimdir?","Woodrow Wilson",1],
  ["savas","Japonya'nın baskını üzerine ABD'nin II. Dünya Savaşı'na girmesine yol açan olay hangisidir?","Pearl Harbor Baskını",1],
  ["savas","Müttefiklerin 1944'te Fransa kıyılarına yaptığı büyük çıkarma hangisidir?","Normandiya Çıkarması",1],
  ["savas","Almanların Sovyetler Birliği'nde ağır yenilgiye uğradığı ve savaşın dönüm noktası sayılan muharebe hangisidir?","Stalingrad Muharebesi",2],
  ["savas","İngilizlerin Kuzey Afrika'da Almanları durdurduğu savaş hangisidir?","El Alameyn Savaşı",3],
  ["konferans","Müttefik liderlerin 1945'te Kırım'da savaş sonrası düzeni görüştüğü konferans hangisidir?","Yalta Konferansı",2],
  ["konferans","Almanya'nın Südetler bölgesini almasına izin verilen 1938 konferansı hangisidir?","Münih Konferansı",2],
  ["konferans","Birleşmiş Milletler Antlaşması'nın imzalandığı 1945 konferansı hangisidir?","San Francisco Konferansı",2],
  ["konferans","İnönü, Roosevelt ve Churchill'in Türkiye'nin savaşa katılmasını görüştüğü 1943 konferansı hangisidir?","II. Kahire Konferansı",3],
  ["kavram","Mussolini'nin kurduğu tek parti ve aşırı milliyetçiliğe dayalı yönetime ne ad verilir?","Faşizm",1],
  ["kavram","Hitler'in kurduğu ırkçı ve totaliter rejime ne ad verilir?","Nazizm",1],
  ["kavram","1929'da ABD'de borsanın çökmesiyle başlayan küresel krize ne ad verilir?","Dünya Ekonomik Bunalımı",1],
  ["kavram","İngiltere ve Fransa'nın savaştan kaçınmak için Almanya'nın taleplerine boyun eğme politikasına ne ad verilir?","Yatıştırma politikası",3],
  ["belge","Almanya'nın I. Dünya Savaşı sonunda imzaladığı ağır şartlı antlaşma hangisidir?","Versay Antlaşması",1],
  ["belge","Almanya ile Sovyetler Birliği arasında 1939'da imzalanan saldırmazlık paktı hangisidir?","Molotov–Ribbentrop Paktı",2],
  ["belge","Türkiye'nin 1939'da İngiltere ve Fransa ile imzaladığı karşılıklı yardım antlaşması hangisidir?","Üçlü İttifak Antlaşması (1939)",3],
  ["belge","Türkiye ile Almanya arasında 1941'de imzalanan antlaşma hangisidir?","Türk-Alman Saldırmazlık Paktı",3]
 ],
 sub: [
  ["II. Dünya Savaşı","💥",["Almanya'nın Polonya'yı işgaliyle (1939) başladı","Atom bombası ilk kez kullanıldı","Birleşmiş Milletler'in kurulmasıyla sonuçlandı","Savaş sonunda Soğuk Savaş dönemine girildi"],"1939 Polonya → 1945 Hiroşima"],
  ["Dünya Ekonomik Bunalımı","📉",["1929'da ABD'de borsanın çökmesiyle başladı","Dünya genelinde işsizlik ve iflaslar arttı","Devletlerin ekonomiye müdahalesi arttı","Türkiye'de devletçilik uygulamasını hızlandırdı"],"1929 → Borsa çöktü, devlet devreye girdi"],
  ["Faşist İtalya","⚔️",["Mussolini tarafından yönetildi","Habeşistan'ı işgal etti","Akdeniz'de yayılmacı bir politika izledi","Roma'ya Yürüyüş (1922) ile iktidara gelindi"]],
  ["Nazi Almanyası","🦅",["Hitler tarafından yönetildi","Versay Antlaşması'nın hükümlerini tanımadı","Avusturya'yı ilhak etti (Anşlus)","Ari ırk üstünlüğüne dayanan ırkçı bir ideoloji benimsedi"]],
  ["Türkiye'nin II. Dünya Savaşı politikası","🛡",["İsmet İnönü döneminde savaş dışı kalma (denge) politikası izlendi","1939'da İngiltere ve Fransa ile Üçlü İttifak imzalandı","1941'de Almanya ile saldırmazlık paktı imzalandı","1945'te Almanya ve Japonya'ya savaş ilan edildi","Milli Korunma Kanunu ve Varlık Vergisi gibi olağanüstü ekonomik önlemler alındı"],"DENGE → İnönü: savaşın dışında, dengenin içinde"],
  ["Yalta Konferansı","🤝",["1945'te Kırım'da toplandı","Roosevelt, Churchill ve Stalin katıldı","Birleşmiş Milletler'in kurulması kararlaştırıldı","Almanya'nın savaş sonrası işgal bölgelerine ayrılması kararlaştırıldı"]]
 ],
 ev: [[1942.1023,"23 Ekim 1942","El Alameyn Savaşı'nın başlaması"],[1943.0202,"2 Şubat 1943","Stalingrad'da Alman ordusunun teslim olması"]]
}
});

/* Bu ünitelerdeki iç içe konular (çeldirici olarak kullanılmaz) */
NOMIX.push(
  ["Hicri takvim","Rumi takvim"],["Mısırlılar","Hititler"],["Hz. Muhammed dönemi","Dört Halife Dönemi"],["Dört Halife Dönemi","Emeviler"],
  ["Haçlı Seferleri","Bizans İmparatorluğu"],["Haçlı Seferleri","Katolik Kilisesi"],["Fransız İhtilali","Aydınlanma Çağı"],
  ["II. Dünya Savaşı","Nazi Almanyası"],["II. Dünya Savaşı","Faşist İtalya"],["II. Dünya Savaşı","Türkiye'nin II. Dünya Savaşı politikası"],
  ["II. Dünya Savaşı","Yalta Konferansı"],["Neolitik Çağ","Maden Çağları"],["Miladi takvim","Hicri takvim"],
  ["Hicri takvim","Dört Halife Dönemi"],["Hicri takvim","Hz. Muhammed dönemi"],["Abbasiler","Moğol İmparatorluğu"],["Abbasiler","Talas Savaşı"],
  ["Lidyalılar","Persler"],["Persler","Fenikeliler"],["Persler","İyonyalılar"],["Endülüs Emevileri","Emeviler"],["Rönesans","Reform"]
);
Object.assign(KODLAR, {
  "Paleolitik Çağ": "PALEO = eski taş → yontma, avcı, ateş 🗿",
  "Neolitik Çağ": "NEO = yeni taş → cilalı, tarım, köy 🌾",
  "Maden Çağları": "Bakır → Tunç → Demir: B-T-D sırası ⚒️",
  "Hicri takvim": "HİCRİ = Hicret + Ay yılı (354 gün) 🌙",
  "Miladi takvim":"MİLAT = doğum (Hz. İsa) ☀️",
  "Rumi takvim": "RUMİ = Güneş yılı + Hicret başlangıcı 📆",
  "On İki Hayvanlı Türk Takvimi": "12 yıl, 12 hayvan 🐉",
  "Tarih bilimi": "Yer + zaman + sebep-sonuç + belge 🔍",
  "Persler": "PERS → Posta yolu (Kral Yolu) + satraplık 🛣️",
  "İyonyalılar": "İYON → İlim (Thales, Heredot) + kıyı şehirleri 🏛️",
  "Urartular": "URARTU → Van (Tuşpa) + kanal + maden 🏔️",
  "Frigler": "FRİG → Gordion + Midas + tarım 🌾",
  "Endülüs Emevileri": "ENDÜLÜS → Kurtuba'dan Avrupa'ya bilim köprüsü 🏰",
  "İslam bilginleri": "H-İ-B-İ → Harezmi cebir, İbn-i Sina tıp, Biruni dünya, İbn-i Haldun tarih 🔬",
  "Bizans İmparatorluğu": "BİZANS → Ayasofya (Justinianus) ... 1453 son 🏛️",
  "Katolik Kilisesi": "Endülijans + Aforoz + Skolastik = E-A-S ⛪",
  "Moğol İmparatorluğu": "MOĞOL → Cengiz kurdu, Yasa yönetti, Hülagü Bağdat'ı aldı 🏹",
  "Aydınlanma Çağı": "AYDINLANMA = Akıl ışığı → Montesquieu, Rousseau 💡",
  "Faşist İtalya": "FAŞİZM → Mussolini, Habeşistan ⚔️",
  "Nazi Almanyası": "NAZİ → Hitler, Versay'ı tanımadı, Anşlus 🦅",
  "Yalta Konferansı": "YALTA → Kırım 1945: BM kararı + Almanya bölündü 🤝"
});
