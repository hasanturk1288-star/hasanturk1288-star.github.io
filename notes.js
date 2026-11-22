/* =========================================================
   KPSS TARİH NOTLARI — KONU ÖZETLERİ VE ZAMAN ÇİZELGELERİ
   sum   = ünitenin tek cümlelik özeti
   pts   = anahtar bilgiler
   traps = ⚠️ sınavda en çok karıştırılanlar
   tl    = zaman çizelgesi [sıralama anahtarı, gösterilen tarih, olay]
           (anahtar: yıl veya yıl.aygün → 1919.0519 = 19 Mayıs 1919; MÖ yıllar negatif)
   ========================================================= */
const NOTES = {
islam_oncesi: {
  sum: "Orta Asya'da kurulan ilk Türk devletleri; devlet yapısı, kut anlayışı ve yazılı kültürün temelleri.",
  pts: [
    "🏹 Asya Hun: bilinen ilk Türk devleti. Mete Han onlu sistemle ilk düzenli orduyu kurdu.",
    "🗿 Göktürkler: 'Türk' adını resmî devlet adı olarak ilk kullanan devlet. Orhun Yazıtları, Türk adının geçtiği ilk Türk kaynağıdır.",
    "🏠 Uygurlar: yerleşik hayata geçen ilk Türk devleti. Mani dini, kâğıt, matbaa ve Uygur alfabesi.",
    "✨ Kut: yönetme yetkisinin Tanrı'dan geldiği inancı. Ülüş: ülkenin hanedanın ortak malı sayılması → taht kavgaları.",
    "🏛️ Kurultay (Toy): devlet işlerinin görüşüldüğü meclis. Töre: yazısız hukuk kuralları.",
    "🐎 Kavimler Göçü (375): Avrupa Hunları → feodalitenin doğuşu, Roma'nın ikiye ayrılması."
  ],
  traps: [
    "'Türk' adını ilk kullanan Göktürk, yerleşik hayata geçen ilk devlet Uygur'dur.",
    "Orhun Yazıtları II. Göktürk (Kutluk) dönemine aittir, Uygurlara değil."
  ],
  tl: [[-220,"MÖ 220","Asya Hun Devleti"],[375,"375","Kavimler Göçü"],[552,"552","I. Göktürk Devleti kuruldu"],[682,"682","II. Göktürk (Kutluk) Devleti"],[720,"720–735","Orhun Yazıtları dikildi"],[745,"745","Uygur Devleti kuruldu"],[751,"751","Talas Savaşı"]]
},
turk_islam: {
  sum: "Türklerin İslamiyet'i kabulü ve kurulan ilk Türk-İslam devletleri.",
  pts: [
    "⚔️ Talas (751) sonrası Türk-Arap yakınlaşması; Türkler Abbasi ordusunda yükseldi (Samarra şehri).",
    "☪️ Karahanlılar: ilk Müslüman Türk devleti (Satuk Buğra Han). Türkçeyi resmî dil olarak kullandılar.",
    "📚 Kutadgu Bilig (Yusuf Has Hacip), Divânu Lugâti't-Türk (Kaşgarlı Mahmud), Atabetü'l-Hakayık (Edip Ahmet).",
    "👑 Gazneliler: 'Sultan' unvanını ilk kullanan Gazneli Mahmud; Hindistan'a 17 sefer.",
    "🥁 Büyük Selçuklu: Dandanakan (1040) ile kuruldu, Tuğrul Bey 1055'te Bağdat'a girdi, Malazgirt (1071).",
    "🎓 Nizamülmülk: Nizamiye Medreseleri ve Siyasetname. İkta: toprak geliri karşılığı asker beslenmesi.",
    "🐫 Mısır'daki Türk devletleri sırası: Tolunoğulları (ilk) → İhşitler → Memlükler."
  ],
  traps: [
    "Sultan unvanını ilk kullanan Gazneli Mahmud'dur; halifenin 'Doğunun ve Batının Sultanı' unvanını verdiği ise Tuğrul Bey'dir.",
    "Dandanakan = kuruluş, Malazgirt = Anadolu'nun kapısı, Katvan (1141) = Karahıtaylara yenilgi."
  ],
  tl: [[840,"840","Karahanlı Devleti"],[868,"868","Tolunoğulları (Mısır)"],[963,"963","Gazneli Devleti"],[1040,"1040","Dandanakan Savaşı"],[1055,"1055","Tuğrul Bey Bağdat'a girdi"],[1071,"1071","Malazgirt Savaşı"],[1096,"1096","I. Haçlı Seferi"],[1141,"1141","Katvan Savaşı"]]
},
turkiye: {
  sum: "Malazgirt sonrası Anadolu'nun Türkleşmesi: Anadolu Selçuklu Devleti ve beylikler.",
  pts: [
    "🏯 I. Beylikler Dönemi: Saltuklular (ilk), Mengücekliler, Danişmentliler, Artuklular, Çaka Beyliği.",
    "⛵ Çaka Bey: Anadolu'da ilk Türk donanması (İzmir).",
    "🔒 Miryokefalon (1176): Anadolu'nun Türk yurdu olduğu kesinleşti.",
    "🐪 Kervansaraylar, devlet sigortası, Sinop-Antalya-Alanya limanları → canlı ticaret.",
    "🔥 Babai İsyanı (1240) → Kösedağ (1243) → Moğol hâkimiyeti → II. Beylikler Dönemi.",
    "🗣️ Karamanoğlu Mehmet Bey 1277'de Türkçeyi resmî dil ilan etti. Ahilik teşkilatının kurucusu Ahi Evran."
  ],
  traps: [
    "Malazgirt kapıyı AÇTI (Büyük Selçuklu), Miryokefalon KİLİTLEDİ (Anadolu Selçuklu).",
    "Germiyanoğulları toprakları çeyizle, Hamitoğulları toprakları satın almayla Osmanlı'ya geçti."
  ],
  tl: [[1075,"1075","Anadolu Selçuklu kuruldu (İznik)"],[1097,"1097","Başkent Konya'ya taşındı"],[1176,"1176","Miryokefalon Savaşı"],[1240,"1240","Babai İsyanı"],[1243,"1243","Kösedağ Savaşı"],[1277,"1277","Türkçe resmî dil (Karamanoğulları)"],[1308,"1308","Anadolu Selçuklu yıkıldı"]]
},
osm_siyasi: {
  sum: "Beylikten imparatorluğa: kuruluştan Kanuni dönemine kadar siyasi olaylar.",
  pts: [
    "🐑 Osman Bey: Koyunhisar (1302), Bizans'a karşı ilk savaş.",
    "💰 Orhan Bey: ilk para, ilk düzenli ordu, ilk medrese (İznik 1331), Rumeli'ye geçiş (Çimpe 1353).",
    "✝️ I. Murat: Sırpsındığı (1364), Haçlılarla ilk savaş; I. Kosova (1389).",
    "⚡ Yıldırım Bayezid: Niğbolu (1396) zaferi, Ankara (1402) yenilgisi → Fetret Devri.",
    "🗡️ II. Murat: Varna (1444), II. Kosova (1448) → Balkanlar kesin Türk yurdu.",
    "🏛️ Fatih: İstanbul (1453), Otlukbeli (1473). Yavuz: Çaldıran – Mercidabık – Ridaniye (1517, halifelik).",
    "⚓ Kanuni: Mohaç (1526), Viyana Kuşatması (1529), Fransa'ya kapitülasyon (1535), Preveze (1538)."
  ],
  traps: [
    "Bizans'la ilk savaş Koyunhisar, Haçlılarla ilk savaş Sırpsındığı'dır.",
    "Niğbolu Yıldırım'ın Haçlılara karşı zaferi, Ankara ise Timur'a yenilgisidir."
  ],
  tl: [[1299,"1299","Osmanlı Beyliği kuruldu"],[1302,"1302","Koyunhisar Savaşı"],[1353,"1353","Çimpe Kalesi alındı"],[1364,"1364","Sırpsındığı Savaşı"],[1396,"1396","Niğbolu Savaşı"],[1402,"1402","Ankara Savaşı"],[1448,"1448","II. Kosova Savaşı"],[1453,"1453","İstanbul'un fethi"],[1514,"1514","Çaldıran Savaşı"],[1517,"1517","Ridaniye Savaşı"],[1526,"1526","Mohaç Savaşı"],[1538,"1538","Preveze Deniz Savaşı"]]
},
osm_kultur: {
  sum: "Osmanlı devlet teşkilatı, toprak düzeni, ordu, eğitim ve toplum yapısı.",
  pts: [
    "🏛️ Divan-ı Hümayun: Sadrazam (Fatih'ten sonra başkan), Kazasker (hukuk-eğitim), Defterdar (maliye), Nişancı (tuğra, tapu), Kaptan-ı Derya.",
    "🌾 Tımar sistemi: toprak geliri karşılığı tımarlı sipahi yetiştirme. Gelire göre Has > Zeamet > Tımar.",
    "🗺️ Arazi türleri: Mîrî (devlet), Mülk (şahıs), Vakıf (hayır kurumu).",
    "👦 Devşirme → Acemi Oğlanlar Ocağı → Yeniçeri; yetenekliler Enderun'da devlet adamı olarak yetiştirildi.",
    "🕍 Millet sistemi: toplum dine göre örgütlendi. Lonca: Ahilikten gelen esnaf teşkilatı.",
    "👑 Veraset: hanedanın ortak malı → padişah ve oğulları (I. Murat) → kardeş katli (Fatih) → ekber ve erşed (I. Ahmet).",
    "💰 Vergi: İltizam (süreli) → Malikâne (1695, ömür boyu) → Esham (1775, borçlanma senedi)."
  ],
  traps: [
    "Şeyhülislam fetva verir ama Divan-ı Hümayun'un sürekli üyesi değildir.",
    "İltizam süreli, Malikâne ömür boyudur."
  ],
  tl: [[1331,"1331","İlk medrese (İznik)"],[1363,"1363","Yeniçeri Ocağı (yaklaşık)"],[1557,"1557","Süleymaniye Külliyesi tamamlandı"],[1695,"1695","Malikâne sistemi"],[1727,"1727","İlk Türk matbaası"],[1775,"1775","Esham uygulaması"]]
},
osm_1718: {
  sum: "Duraklama ve gerileme: ıslahatlar, isyanlar ve Avrupa karşısında kaybedilen üstünlük.",
  pts: [
    "⚖️ Zitvatorok (1606): Avusturya arşidükü padişaha eşit sayıldı.",
    "🧭 Kasr-ı Şirin (1639): bugünkü Türkiye-İran sınırının temeli.",
    "✂️ II. Viyana Kuşatması (1683) başarısız oldu → Karlofça (1699): ilk büyük toprak kaybı.",
    "🌷 Lale Devri (1718–1730): Pasarofça ile başladı, Patrona Halil İsyanı ile bitti. İlk matbaa, Avrupa'ya geçici elçiler.",
    "💸 Küçük Kaynarca (1774): Kırım bağımsız oldu, ilk savaş tazminatı ödendi, Rusya Ortodoksların koruyucusu oldu.",
    "🎖️ III. Selim: Nizam-ı Cedit ve daimî elçilikler; Kabakçı Mustafa İsyanı (1807) ile tahttan indirildi.",
    "🔨 17. yy ıslahatları eskiye dönüş ve baskıya dayalıdır; 18. yy ıslahatlarında Avrupa örnek alındı."
  ],
  traps: [
    "Lale Devri'nde GEÇİCİ, III. Selim döneminde DAİMÎ elçilikler açıldı.",
    "Karlofça ilk büyük toprak kaybı, Küçük Kaynarca ilk savaş tazminatıdır."
  ],
  tl: [[1606,"1606","Zitvatorok Antlaşması"],[1639,"1639","Kasr-ı Şirin Antlaşması"],[1683,"1683","II. Viyana Kuşatması"],[1699,"1699","Karlofça Antlaşması"],[1711,"1711","Prut Savaşı"],[1718,"1718","Pasarofça – Lale Devri başladı"],[1730,"1730","Patrona Halil İsyanı"],[1774,"1774","Küçük Kaynarca Antlaşması"],[1807,"1807","Kabakçı Mustafa İsyanı"]]
},
osm_1920: {
  sum: "Dağılma dönemi: modernleşme belgeleri, meşrutiyetler, fikir akımları ve savaşlar.",
  pts: [
    "🤝 Sened-i İttifak (1808): ayanlar resmen tanındı, padişah yetkisi ilk kez sınırlandı.",
    "🛡 II. Mahmut: Yeniçeri Ocağı kaldırıldı (1826, Vaka-i Hayriye), ilk nüfus sayımı ve Takvim-i Vekayi (1831).",
    "🚢 Balta Limanı (1838): İngiltere'ye ticari ayrıcalık → yerli sanayi çöktü.",
    "📜 Tanzimat (1839): can, mal, namus güvencesi, kanun üstünlüğü. Islahat (1856): gayrimüslimlere geniş haklar.",
    "🗳️ I. Meşrutiyet (1876): Kanun-i Esasi ve Meclis-i Mebusan. II. Meşrutiyet (1908).",
    "💭 Fikir akımları: Osmanlıcılık (Balkan Savaşları'yla çöktü), İslamcılık (Arap İsyanı ile çöktü), Türkçülük, Batıcılık.",
    "🗡️ I. Dünya Savaşı: taarruz cepheleri Kafkas ve Kanal; Çanakkale Zaferi (1915)."
  ],
  traps: [
    "Sened-i İttifak = ayanlar karşısında sınırlama; Tanzimat = kanun üstünlüğünün kabulü.",
    "Uşi (1912) ile Trablusgarp, Atina (1913) ile Girit kaybedildi."
  ],
  tl: [[1808,"1808","Sened-i İttifak"],[1826,"1826","Yeniçeri Ocağı kaldırıldı"],[1838,"1838","Balta Limanı Antlaşması"],[1839,"1839","Tanzimat Fermanı"],[1856,"1856","Islahat Fermanı"],[1876,"1876","I. Meşrutiyet"],[1908,"1908","II. Meşrutiyet"],[1911,"1911","Trablusgarp Savaşı"],[1912,"1912","I. Balkan Savaşı"],[1914,"1914","I. Dünya Savaşı'na giriş"],[1915,"1915","Çanakkale Zaferi"]]
},
kh: {
  sum: "Mondros'tan TBMM'nin açılışına: işgaller, cemiyetler, genelgeler ve kongreler.",
  pts: [
    "🗝️ Mondros (30 Ekim 1918): 7. madde stratejik yerlerin işgali, 24. madde Doğu illeri.",
    "🛡️ Yararlı cemiyetler: Kilikyalılar, Trakya-Paşaeli, İzmir MHC, Doğu Anadolu MHC. Zararlı: Wilson Prensipleri, Mavri Mira, Pontus.",
    "⛴️ 19 Mayıs 1919 Samsun → Havza Genelgesi (protesto mitingleri) → Amasya Genelgesi (22 Haziran).",
    "📣 Amasya: Kurtuluş Savaşı'nın gerekçesi, amacı ve yöntemi; milli egemenliğe ilk vurgu.",
    "🏔️ Erzurum: bölgesel toplandı, ulusal karar aldı; manda ilk kez reddedildi.",
    "🤝 Sivas: cemiyetler birleşti (Anadolu ve Rumeli MHC), Temsil Heyeti tüm yurdu temsil etti, İrade-i Milliye çıktı.",
    "🤞 Misak-ı Milli (28 Ocak 1920) → İstanbul'un resmen işgali (16 Mart 1920) → TBMM (23 Nisan 1920)."
  ],
  traps: [
    "Manda ilk kez Erzurum'da, kesin olarak Sivas'ta reddedildi.",
    "Misak-ı Milli'yi TBMM değil, son Osmanlı Mebusan Meclisi kabul etti."
  ],
  tl: [[1918.1030,"30 Ekim 1918","Mondros Ateşkes Antlaşması"],[1919.0515,"15 Mayıs 1919","İzmir'in işgali"],[1919.0519,"19 Mayıs 1919","Samsun'a çıkış"],[1919.0622,"22 Haziran 1919","Amasya Genelgesi"],[1919.0723,"23 Temmuz 1919","Erzurum Kongresi"],[1919.0904,"4 Eylül 1919","Sivas Kongresi"],[1920.0128,"28 Ocak 1920","Misak-ı Milli"],[1920.0316,"16 Mart 1920","İstanbul'un resmen işgali"],[1920.0423,"23 Nisan 1920","TBMM açıldı"],[1920.0810,"10 Ağustos 1920","Sevr Antlaşması"]]
},
kc: {
  sum: "TBMM'nin cephelerdeki mücadelesi ve antlaşmalarla bağımsızlığın tescili.",
  pts: [
    "🥇 Doğu Cephesi: Kâzım Karabekir → Gümrü (1920), TBMM'nin ilk uluslararası antlaşması.",
    "🤝 Güney Cephesi: Kuva-yi Milliye direnişi (Maraş, Antep, Urfa) → Ankara Antlaşması (1921).",
    "📘 I. İnönü (Ocak 1921): düzenli ordunun ilk zaferi → Teşkilat-ı Esasiye, Londra Konferansı.",
    "🤝 Moskova Antlaşması (16 Mart 1921): Sovyetlerle dostluk. II. İnönü Zaferi (1 Nisan 1921).",
    "🎒 Kütahya-Eskişehir yenilgisi → Başkomutanlık Kanunu → Tekâlif-i Milliye → Sakarya (1921): Mareşal ve Gazi.",
    "🌊 Büyük Taarruz (26 Ağustos 1922) → Başkomutanlık Meydan Muharebesi (30 Ağustos) → İzmir'in kurtuluşu (9 Eylül).",
    "🕊️ Mudanya (11 Ekim 1922): Doğu Trakya savaşsız alındı. Lozan (24 Temmuz 1923): yeni Türk devletinin tapusu."
  ],
  traps: [
    "Doğu sınırı Gümrü → Moskova → Kars sırasıyla kesinleşti.",
    "Başkomutanlık Kanunu Sakarya'dan ÖNCE, Gazi unvanı Sakarya'dan SONRA."
  ],
  tl: [[1920.1203,"3 Aralık 1920","Gümrü Antlaşması"],[1921.0110,"10 Ocak 1921","I. İnönü Zaferi"],[1921.0120,"20 Ocak 1921","Teşkilat-ı Esasiye"],[1921.0316,"16 Mart 1921","Moskova Antlaşması"],[1921.0401,"1 Nisan 1921","II. İnönü Zaferi"],[1921.0805,"5 Ağustos 1921","Başkomutanlık Kanunu"],[1921.0913,"13 Eylül 1921","Sakarya Zaferi"],[1921.1013,"13 Ekim 1921","Kars Antlaşması"],[1921.1020,"20 Ekim 1921","Ankara Antlaşması (Fransa)"],[1922.0830,"30 Ağustos 1922","Başkomutanlık Meydan Muharebesi"],[1922.1011,"11 Ekim 1922","Mudanya Ateşkesi"],[1923.0724,"24 Temmuz 1923","Lozan Barış Antlaşması"]]
},
inkilap: {
  sum: "Siyasi, hukuki, eğitim-kültür, toplumsal ve ekonomik alanlarda yapılan inkılaplar.",
  pts: [
    "👑 Siyasi: Saltanatın kaldırılması (1 Kasım 1922), Cumhuriyet (29 Ekim 1923), Halifeliğin kaldırılması (3 Mart 1924).",
    "✋ 3 Mart 1924: Halifelik, Tevhid-i Tedrisat, Şer'iye ve Evkaf ile Erkân-ı Harbiye vekâletleri kaldırıldı.",
    "⚖️ Hukuk: Medeni Kanun (1926, İsviçre), Ceza Kanunu (İtalya), Ticaret Kanunu (Almanya).",
    "🎩 Toplumsal: Şapka Kanunu ve tekke-zaviyelerin kapatılması (1925), uluslararası saat ve takvim (1925), ölçüler (1931), Soyadı (1934).",
    "🔤 Eğitim-kültür: Harf İnkılabı (1928), Millet Mektepleri, TTK (1931), TDK (1932), Üniversite Reformu (1933).",
    "🗳️ Kadın hakları: belediye (1930), muhtarlık (1933), milletvekili (1934) seçimleri.",
    "🏭 Ekonomi: İzmir İktisat Kongresi (1923), Aşar kalktı (1925), Kabotaj (1926), Teşvik-i Sanayi (1927), I. Beş Yıllık Sanayi Planı (1934)."
  ],
  traps: [
    "Saltanat 1 Kasım 1922, Harf İnkılabı 1 Kasım 1928: aynı gün, farklı yıl!",
    "Tekke ve zaviyeler 3 Mart 1924'te değil, 1925'te kapatıldı."
  ],
  tl: [[1922.1101,"1 Kasım 1922","Saltanatın kaldırılması"],[1923.0217,"17 Şubat 1923","İzmir İktisat Kongresi"],[1923.1029,"29 Ekim 1923","Cumhuriyetin ilanı"],[1924.0303,"3 Mart 1924","Halifeliğin kaldırılması"],[1925.1125,"25 Kasım 1925","Şapka Kanunu"],[1926.0217,"17 Şubat 1926","Türk Medeni Kanunu"],[1928.1101,"1 Kasım 1928","Harf İnkılabı"],[1934.0621,"21 Haziran 1934","Soyadı Kanunu"],[1934.1205,"5 Aralık 1934","Kadınlara milletvekilliği hakkı"],[1937.0205,"5 Şubat 1937","Laiklik anayasaya girdi"]]
},
ilkeler: {
  sum: "Altı temel ilke (altı ok), bütünleyici ilkeler ve inkılapların hangi ilkeyle ilişkili olduğu.",
  pts: [
    "🗳️ Cumhuriyetçilik: milli egemenlik → Cumhuriyetin ilanı, çok partili hayat denemeleri.",
    "📖 Milliyetçilik: milli birlik ve kültür → TTK, TDK, Kabotaj Kanunu.",
    "👥 Halkçılık: kanun önünde eşitlik → aşarın kaldırılması, lakap ve unvanların kaldırılması, kadın hakları.",
    "🏭 Devletçilik: devletin ekonomide girişimci olması → Sümerbank, Etibank, I. Beş Yıllık Sanayi Planı.",
    "⚖️ Laiklik: din ve devlet işlerinin ayrılması → Halifeliğin kaldırılması, Tevhid-i Tedrisat, Medeni Kanun.",
    "🔄 İnkılapçılık: inkılapları koruma ve geliştirme → diğer ilkelerin teminatı.",
    "🧩 Bütünleyici ilkeler: milli egemenlik, milli birlik-beraberlik, özgürlük-bağımsızlık, yurtta sulh cihanda sulh, çağdaşlaşma, bilimsellik-akılcılık, insan ve insanlık sevgisi."
  ],
  traps: [
    "Bir inkılap birden fazla ilkeyle ilgili olabilir: Medeni Kanun = Laiklik + Halkçılık.",
    "Devletçilik temel ilkedir, bütünleyici ilke değildir."
  ],
  tl: [[1929,"1929","Dünya Ekonomik Bunalımı"],[1931,"1931","Altı ilke CHF programına girdi"],[1933,"1933","Sümerbank kuruldu"],[1934,"1934","I. Beş Yıllık Sanayi Planı"],[1935,"1935","Etibank kuruldu"],[1937,"1937","İlkeler anayasaya girdi"]]
},
dis: {
  sum: "'Yurtta sulh, cihanda sulh' anlayışıyla Lozan'dan kalan sorunların çözümü ve bölgesel paktlar.",
  pts: [
    "⛽ Musul: 1926 Ankara Antlaşması ile Irak'a bırakıldı; 25 yıl petrol gelirinin %10'u Türkiye'ye.",
    "🏠 Yunanistan: nüfus mübadelesinden doğan etabli sorunu 1930 Ankara Antlaşması ile çözüldü.",
    "🌐 1932: Türkiye Milletler Cemiyeti'ne üye oldu.",
    "🤝 Balkan Antantı (1934): Türkiye, Yunanistan, Romanya, Yugoslavya.",
    "🌊 Montrö (1936): Boğazlarda tam egemenlik, komisyon kaldırıldı.",
    "🕌 Sadabat Paktı (1937): Türkiye, İran, Irak, Afganistan.",
    "🗺️ Hatay: 1938'de bağımsız devlet oldu, 1939'da Türkiye'ye katıldı."
  ],
  traps: [
    "Lozan'da Boğazlar uluslararası komisyona bırakıldı; Montrö ile komisyon kaldırıldı.",
    "Balkan Antantı'nda Bulgaristan ve Arnavutluk yoktur."
  ],
  tl: [[1926,"1926","Musul sorunu (Ankara Antlaşması)"],[1930,"1930","Türk-Yunan Ankara Antlaşması"],[1932,"1932","Milletler Cemiyeti üyeliği"],[1934,"1934","Balkan Antantı"],[1936,"1936","Montrö Boğazlar Sözleşmesi"],[1937,"1937","Sadabat Paktı"],[1938,"1938","Hatay Devleti kuruldu"],[1939,"1939","Hatay Türkiye'ye katıldı"]]
},
cagdas: {
  sum: "II. Dünya Savaşı sonrası iki kutuplu dünya, Soğuk Savaş ve Türkiye'nin dış politikası.",
  pts: [
    "🌐 Birleşmiş Milletler (1945): Türkiye kurucu üye.",
    "💵 Truman Doktrini (1947) ve Marshall Planı (1948): ABD yardımları.",
    "🛡️ NATO 1949'da kuruldu; Türkiye Kore Savaşı'na (1950) asker gönderdi ve 1952'de NATO'ya girdi.",
    "🗳️ Çok partili hayat: 1946 seçimi (açık oy – gizli tasnif), 1950'de DP iktidarı.",
    "🚀 Küba Füze Krizi (1962): Jüpiter füzeleri Türkiye'den çekildi.",
    "🏝️ Kıbrıs: 1974 Barış Harekâtı, 1983 KKTC.",
    "🧱 Berlin Duvarı (1989) yıkıldı, SSCB (1991) dağıldı → Soğuk Savaş sona erdi."
  ],
  traps: [
    "Truman Doktrini Türkiye ve Yunanistan'a askeri-ekonomik yardım, Marshall Planı ise Avrupa'nın ekonomik kalkınmasıdır.",
    "NATO 1949'da kuruldu; Türkiye 1952'de üye oldu."
  ],
  tl: [[1945,"1945","Birleşmiş Milletler kuruldu"],[1947,"1947","Truman Doktrini"],[1949,"1949","NATO kuruldu"],[1950,"1950","Kore Savaşı"],[1952,"1952","Türkiye NATO'ya girdi"],[1955,"1955","Varşova Paktı"],[1962,"1962","Küba Füze Krizi"],[1974,"1974","Kıbrıs Barış Harekâtı"],[1989,"1989","Berlin Duvarı yıkıldı"],[1991,"1991","SSCB dağıldı"]]
}
};

/* ---------- TYT / AYT kapsamı için eklenen üniteler ---------- */
Object.assign(NOTES, {
tarih_bilimi: {
  sum: "Tarihin konusu, yöntemi ve yardımcı bilimleri; zamanın ölçülmesi, takvimler ve tarih öncesi çağlar.",
  pts: [
    "🔍 Tarih; geçmişteki olayları yer ve zaman belirterek, sebep-sonuç ilişkisi içinde, belgelere dayanarak inceler. Deney ve gözlem yapılamaz.",
    "🧰 Yardımcı bilimler: Arkeoloji (kazı), Paleografya (eski yazılar), Epigrafya (kitabeler), Nümizmatik (paralar), Diplomatik (resmî belgeler), Kronoloji (zaman), Heraldik (armalar), Sfrajistik (mühürler).",
    "🪵 Tarih öncesi çağlar: Paleolitik (yontma taş, avcı-toplayıcı) → Mezolitik → Neolitik (cilalı taş, tarım ve yerleşik hayat) → Maden çağları (bakır, tunç, demir).",
    "✍️ Tarih çağları yazının bulunmasıyla (MÖ 3200, Sümerler) başlar: İlk Çağ → Orta Çağ (375) → Yeni Çağ (1453) → Yakın Çağ (1789).",
    "🐉 On İki Hayvanlı Türk Takvimi: her yıl bir hayvanla anılır, 12 yıllık devreler hâlinde tekrar eder.",
    "🌙 Hicri takvim ay yılını esas alır, Hicret'i (622) başlangıç kabul eder; Hz. Ömer döneminde başlatıldı.",
    "☀️ Miladi takvim Hz. İsa'nın doğumunu esas alır; Türkiye'de 1926'dan itibaren resmî takvimdir. Rumi takvim (1840) Osmanlı'da mali işlerde kullanıldı."
  ],
  traps: [
    "Neolitik Çağ'da ilk kez tarım ve yerleşik hayat başlar; ateş ise Paleolitik Çağ'da kullanılmaya başlanmıştır.",
    "Rumi takvim güneş yılını esas alır ama Hicret'i başlangıç kabul eder; Hicri takvim ise ay yılını esas alır."
  ],
  tl: [[-9600,"MÖ 9600 (yaklaşık)","Göbeklitepe'nin inşası"],[-7400,"MÖ 7400 (yaklaşık)","Çatalhöyük yerleşiminin başlaması"],[-3200,"MÖ 3200","Yazının Sümerlerce bulunması"],[375,"375","Kavimler Göçü: Orta Çağ'ın başlangıcı"],[622,"622","Hicret: Hicri takvimin başlangıcı"],[1079,"1079","Celali takviminin hazırlanması"],[1453,"1453","İstanbul'un fethi: Yeni Çağ'ın başlangıcı"],[1582,"1582","Gregoryen takvime geçiş"],[1789,"1789","Fransız İhtilali: Yakın Çağ'ın başlangıcı"],[1840,"1840","Rumi takvimin kullanılmaya başlanması"],[1926,"1926","Türkiye'de Miladi takvime geçiş"]]
},
ilk_cag: {
  sum: "Mezopotamya, Mısır, Anadolu, Ege ve Akdeniz uygarlıkları; yazı, kanun, para ve alfabe gibi ilkler.",
  pts: [
    "📜 Sümerler: çivi yazısı, ay yılı takvimi, ziggurat, ilk yazılı kanunlar (Urnammu), Gılgamış Destanı.",
    "⚖️ Babil: Hammurabi Kanunları ('göze göz, dişe diş'). Asurlar: Ninova Kütüphanesi ve ticaret kolonileri.",
    "🏺 Mısır: hiyeroglif, güneş yılı takvimi, piramitler, Nil taşkınları sayesinde geometri ve astronomi.",
    "🏛️ Anadolu: Hititler (Hattuşa, Kadeş Antlaşması, Pankuş), Frigler (Gordion, tarım), Lidyalılar (Sard, ilk para), Urartular (Tuşpa, madencilik, kanallar), İyonyalılar (Efes, Milet, Thales, Heredot).",
    "🔤 Fenikeliler alfabeyi geliştirip Akdeniz'e yaydı; Persler Kral Yolu'nu yaptı ve satraplıklarla yönetti.",
    "🗡️ Büyük İskender Pers İmparatorluğu'nu yıktı; Doğu ve Batı kültürü kaynaşarak Helenistik Çağ doğdu.",
    "🏟️ Roma: On İki Levha Kanunları, 395'te Doğu ve Batı Roma olarak ikiye ayrıldı; 313 Milano Fermanı ile Hristiyanlık serbest kaldı."
  ],
  traps: [
    "Yazıyı ilk kullanan Sümerler, alfabeyi geliştirip yayan Fenikeliler, parayı ilk kullanan Lidyalılardır.",
    "Bilinen ilk yazılı antlaşma Kadeş (Hitit–Mısır), ilk yazılı kanunlar Urnammu'dur (Hammurabi değil)."
  ],
  tl: [[-3200,"MÖ 3200","Sümerlerin yazıyı bulması"],[-1750,"MÖ 1750 (yaklaşık)","Hammurabi Kanunları"],[-1259,"MÖ 1259 (yaklaşık)","Kadeş Antlaşması"],[-776,"MÖ 776","İlk Olimpiyat Oyunları"],[-546,"MÖ 546","Lidya'nın Persler tarafından yıkılması"],[-450,"MÖ 450 (yaklaşık)","On İki Levha Kanunları"],[-334,"MÖ 334","Büyük İskender'in Anadolu seferi"],[-27,"MÖ 27","Roma İmparatorluğu'nun kuruluşu"],[313,"313","Milano Fermanı"],[395,"395","Roma'nın ikiye ayrılması"]]
},
islam: {
  sum: "Hz. Muhammed dönemi, Dört Halife, Emeviler, Abbasiler, Endülüs Emevileri ve İslam medeniyetinin bilim insanları.",
  pts: [
    "☪️ Hz. Muhammed: 610'da ilk vahiy, 622 Hicret, Medine Sözleşmesi, Bedir (624) – Uhud (625) – Hendek (627), Hudeybiye (628), Mekke'nin fethi (630).",
    "🕌 Dört Halife (632–661): halifeler seçimle geldi; Hicri takvim (Hz. Ömer), Kur'an'ın toplanması (Hz. Ebubekir) ve çoğaltılması (Hz. Osman); Cemel ve Sıffin savaşları.",
    "🏛️ Emeviler (661–750): Muaviye kurdu, başkent Şam; halifelik saltanata dönüştü; Arap milliyetçiliği (mevali); Kerbela (680).",
    "📚 Abbasiler (750–1258): başkent Bağdat; Türkler orduda yükseldi; Beytü'l-Hikme; Talas (751); Moğollar (1258) yıktı.",
    "🏰 Endülüs Emevileri (756–1031): I. Abdurrahman kurdu; Kurtuba bilim merkezi oldu, Avrupa'ya bilim aktarıldı.",
    "🔬 Bilginler: Harezmi (cebir), İbn-i Sina (tıp, El-Kanun), Biruni (dünyanın çevresi), İbn-i Heysem (optik), İbn-i Haldun (Mukaddime).",
    "🛡️ Puvatya (732): Emevilerin Avrupa'daki ilerleyişi Franklar tarafından durduruldu (Endülüs Emevi Devleti daha sonra, 756'da kuruldu)."
  ],
  traps: [
    "Kur'an'ı ilk toplayan Hz. Ebubekir, çoğaltıp dağıtan Hz. Osman'dır.",
    "Emeviler Arap milliyetçiliği yaptı; Türklerin yükseldiği devlet Abbasilerdir."
  ],
  tl: [[571,"571","Hz. Muhammed'in doğumu"],[610,"610","İlk vahiy"],[622,"622","Hicret"],[624,"624","Bedir Savaşı"],[625,"625","Uhud Savaşı"],[627,"627","Hendek Savaşı"],[628,"628","Hudeybiye Antlaşması"],[630,"630","Mekke'nin fethi"],[632,"632","Hz. Muhammed'in vefatı"],[661,"661","Emevi Devleti'nin kuruluşu"],[680,"680","Kerbela Olayı"],[732,"732","Puvatya Savaşı"],[750,"750","Abbasi Devleti'nin kuruluşu"],[756,"756","Endülüs Emevi Devleti'nin kuruluşu"],[1258,"1258","Moğolların Bağdat'ı alması"]]
},
orta_cag: {
  sum: "Kavimler Göçü sonrası Avrupa: feodalite, Kilise, Bizans, Haçlı Seferleri, Magna Carta ve Moğollar.",
  pts: [
    "🏰 Feodalite: Kavimler Göçü sonrası güvensizlikte doğan, senyör–serf ilişkisine dayalı toprak düzeni; merkezî otorite zayıftı.",
    "⛪ Katolik Kilisesi: endülijans, aforoz, skolastik düşünce; Latince ayin dili. 1054'te Ortodoks ve Katolik kiliseler ayrıldı.",
    "🏛️ Bizans (Doğu Roma): başkent İstanbul; Ayasofya ve hukuk derlemesi I. Justinianus döneminde; 1453'te yıkıldı.",
    "✝️ Haçlı Seferleri (1096–1270): Papa II. Urbanus'un çağrısı; I. Sefer Kudüs'ü aldı (1099), Hıttin'de (1187) Selahaddin Eyyubi geri aldı; IV. Sefer'de İstanbul yağmalandı (1204).",
    "📜 Magna Carta (1215): İngiltere'de kralın yetkileri ilk kez sınırlandı.",
    "👑 Frank Krallığı: Şarlman 800'de imparator ilan edildi. İngiltere–Fransa arasında Yüz Yıl Savaşları (1337–1453).",
    "🏹 Moğollar: Cengiz Han (1206) birliği kurdu, Yasa ile yönetti; Hülagü Bağdat'ı aldı (1258)."
  ],
  traps: [
    "Haçlı Seferleri feodaliteyi zayıflattı, ticareti ve şehirleri (burjuvazi) güçlendirdi.",
    "Magna Carta kralın yetkisini sınırlayan ilk belgedir; demokrasinin kendisi değil, gelişiminin ilk adımıdır."
  ],
  tl: [[476,"476","Batı Roma'nın yıkılışı"],[800,"800","Şarlman'ın imparator ilan edilmesi"],[1054,"1054","Kiliselerin ayrılığı (Ortodoks–Katolik)"],[1095,"1095","Clermont Konsili"],[1099,"1099","Haçlıların Kudüs'ü alması"],[1187,"1187","Hıttin Savaşı"],[1204,"1204","IV. Haçlı Seferi: İstanbul'un yağmalanması"],[1206,"1206","Cengiz Han'ın Moğol birliğini kurması"],[1215,"1215","Magna Carta"],[1337,"1337","Yüz Yıl Savaşları'nın başlaması"],[1347,"1347","Kara Veba'nın Avrupa'ya yayılması"]]
},
avrupa: {
  sum: "Coğrafi Keşifler, Rönesans, Reform, Aydınlanma, Fransız İhtilali ve Sanayi İnkılabı ile değişen Avrupa.",
  pts: [
    "🧭 Coğrafi Keşifler: pusula ve gemi teknolojisiyle; Bartolomeu Dias Ümit Burnu (1488), Kolomb Amerika (1492), Vasco da Gama Hindistan (1498), Macellan dünya turu (1519–1522).",
    "📉 Sonuçları: Atlas Okyanusu limanları önem kazandı, İpek ve Baharat yolları önemini yitirdi, sömürgecilik başladı, Avrupa'ya altın-gümüş aktı (merkantilizm).",
    "🎨 Rönesans: İtalya'da başladı; antik eserlere dönüş, kilise etkisinin azalması; Leonardo da Vinci, Michelangelo. Matbaa (Gutenberg) bilginin yayılmasını hızlandırdı.",
    "🕯️ Reform (1517): Martin Luther, endülijans satışına tepki; Protestanlık ve Kalvenizm; Augsburg Barışı (1555) ile Lutheranlık tanındı.",
    "💡 Aydınlanma: akıl ve bilim; Montesquieu (kuvvetler ayrılığı), Rousseau (Toplum Sözleşmesi), Voltaire.",
    "🗽 Fransız İhtilali (1789): milliyetçilik, eşitlik, özgürlük; İnsan ve Yurttaş Hakları Bildirisi; çok uluslu imparatorlukları sarstı.",
    "🏭 Sanayi İnkılabı: 18. yüzyıl İngiltere, buhar makinesi (James Watt); ham madde ve pazar arayışı, işçi sınıfı, sosyalizm."
  ],
  traps: [
    "Rönesans sanat ve bilimde, Reform dinde yenileşmedir; Reform Almanya'da, Rönesans İtalya'da başladı.",
    "Milliyetçilik akımını yayan Fransız İhtilali, ham madde ve pazar arayışını artıran ise Sanayi İnkılabıdır."
  ],
  tl: [[1450,"1450 (yaklaşık)","Gutenberg'in matbaayı geliştirmesi"],[1488,"1488","Ümit Burnu'nun geçilmesi"],[1492,"1492","Kolomb'un Amerika'ya ulaşması"],[1498,"1498","Hindistan deniz yolunun bulunması"],[1517,"1517","Reform'un başlaması"],[1519,"1519","Macellan seferinin başlaması"],[1555,"1555","Augsburg Barışı"],[1648,"1648","Vestfalya Barışı"],[1689,"1689","İngiliz Haklar Bildirgesi"],[1769,"1769","James Watt'ın buhar makinesi patenti"],[1789,"1789","Fransız İhtilali"],[1815,"1815","Viyana Kongresi"],[1848,"1848","1848 İhtilalleri"]]
},
dunya_savas: {
  sum: "I. Dünya Savaşı sonrası düzen, 1929 bunalımı, totaliter rejimler, II. Dünya Savaşı ve Türkiye'nin savaş politikası.",
  pts: [
    "📜 Versay Antlaşması (1919): Almanya'ya ağır şartlar; Milletler Cemiyeti kuruldu, ancak barışı koruyamadı.",
    "📉 1929 Dünya Ekonomik Bunalımı: ABD borsasının çöküşü; işsizlik, devletin ekonomiye müdahalesi; Türkiye'de devletçilik.",
    "⚔️ Totaliter rejimler: İtalya'da Mussolini (faşizm), Almanya'da Hitler (nazizm); Habeşistan'ın işgali, Avusturya'nın ilhakı, Münih Konferansı (1938).",
    "💥 II. Dünya Savaşı: Almanya'nın Polonya'yı işgaliyle (1 Eylül 1939) başladı; Pearl Harbor (1941) ile ABD katıldı; Stalingrad ve Normandiya dönüm noktalarıdır.",
    "☢️ Savaş 1945'te Almanya'nın teslimi ve Japonya'ya atılan atom bombalarıyla bitti; Birleşmiş Milletler kuruldu, Soğuk Savaş başladı.",
    "🛡️ Türkiye: İsmet İnönü döneminde savaş dışı kalma (denge) politikası; 1939 Üçlü İttifak, 1941 Türk-Alman Saldırmazlık Paktı; 1945'te Almanya ve Japonya'ya savaş ilanı.",
    "🏚️ Savaşın ekonomik etkileri: Türkiye'de Milli Korunma Kanunu, ekmek karnesi ve Varlık Vergisi uygulandı."
  ],
  traps: [
    "ABD'yi savaşa sokan olay Pearl Harbor Baskını'dır; Normandiya Çıkarması Batı cephesinin açılmasıdır.",
    "Türkiye savaşa fiilen katılmadı; BM'nin kurucu üyesi olmak için 1945'te sembolik olarak savaş ilan etti."
  ],
  tl: [[1918.1111,"11 Kasım 1918","I. Dünya Savaşı'nın sona ermesi"],[1919.0628,"28 Haziran 1919","Versay Antlaşması"],[1922,"1922","Mussolini'nin iktidara gelmesi"],[1929,"1929","Dünya Ekonomik Bunalımı"],[1933,"1933","Hitler'in iktidara gelmesi"],[1938,"1938","Münih Konferansı"],[1939.0901,"1 Eylül 1939","Almanya'nın Polonya'yı işgali"],[1939.1019,"19 Ekim 1939","Türkiye-İngiltere-Fransa Üçlü İttifakı"],[1941.1207,"7 Aralık 1941","Pearl Harbor Baskını"],[1944.0606,"6 Haziran 1944","Normandiya Çıkarması"],[1945.0508,"8 Mayıs 1945","Almanya'nın teslim olması"],[1945.0806,"6 Ağustos 1945","Hiroşima'ya atom bombası"]]
}
});

/* Atatürk'ten motivasyon sözleri (ana sayfada her gün biri gösterilir) */
const QUOTES = [
  "Hayatta en hakiki mürşit ilimdir.",
  "Ne mutlu Türküm diyene!",
  "Yurtta sulh, cihanda sulh.",
  "Cumhuriyet sizden fikri hür, vicdanı hür, irfanı hür nesiller ister.",
  "Benim naçiz vücudum elbet bir gün toprak olacaktır, fakat Türkiye Cumhuriyeti ilelebet payidar kalacaktır.",
  "Hâkimiyet kayıtsız şartsız milletindir.",
  "Tarih yazmak, tarih yapmak kadar mühimdir."
];
