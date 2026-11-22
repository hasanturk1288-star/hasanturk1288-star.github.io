/* =========================================================
   KPSS TARİH NOTLARI — HARİTA VERİSİ
   Basitleştirilmiş Türkiye sınırı (boylam, enlem) ve KPSS'de geçen tarihi yerler.
   Not: Sınır şematiktir (öğretim amaçlı), resmî harita değildir.
   ========================================================= */
const MAP_PROJ = {lon0: 25.6, lat0: 42.4, kx: 40, ky: 52, pad: 10, w: 800, h: 370};
const mapX = lon => (lon - MAP_PROJ.lon0) * MAP_PROJ.kx + MAP_PROJ.pad;
const mapY = lat => (MAP_PROJ.lat0 - lat) * MAP_PROJ.ky + MAP_PROJ.pad;

// Saat yönünde: Trakya → Karadeniz → Doğu sınırı → Güney sınırı → Akdeniz → Ege
const TR_BORDER = [
  [26.05,41.70],[26.60,41.97],[27.20,42.05],[28.00,41.98],[28.60,41.45],[29.05,41.25],[29.70,41.17],[30.50,41.15],
  [31.40,41.30],[32.50,41.83],[33.40,42.00],[34.90,42.05],[35.15,42.03],[35.50,41.65],[36.30,41.30],[37.00,41.15],
  [38.40,40.95],[39.70,41.00],[40.50,41.05],[41.50,41.50],[42.50,41.45],[43.20,41.25],[43.50,40.95],[43.70,40.50],
  [44.00,40.10],[44.80,39.70],[44.30,39.40],[44.40,38.40],[44.30,37.90],[44.80,37.20],[44.20,37.00],[42.40,37.10],
  [41.20,37.10],[40.00,36.80],[38.20,36.85],[37.00,36.65],[36.70,36.25],[36.10,35.85],[35.90,36.30],[35.80,36.75],
  [35.50,36.60],[34.60,36.80],[33.60,36.15],[32.50,36.10],[31.50,36.60],[30.60,36.85],[30.40,36.20],[29.60,36.15],
  [28.80,36.60],[28.00,36.70],[27.40,37.00],[27.20,37.60],[26.50,38.30],[26.90,38.50],[26.70,39.00],[26.10,39.50],
  [26.40,40.10],[26.70,40.40],[26.20,40.60],[26.05,40.75],[26.35,41.25]
];
const TR_MARMARA = [[27.00,40.50],[27.80,40.95],[29.00,40.98],[29.30,40.75],[28.00,40.38],[27.00,40.38]];

// Her yerin bir veya birkaç ipucu var (ipucunda yerin adı geçmez). u = ilgili ünite
const MAP_POINTS = [
  {n:"Samsun", lon:36.33, lat:41.29, u:"kh", c:["Mustafa Kemal'in 19 Mayıs 1919'da çıktığı şehir"]},
  {n:"Havza", lon:35.66, lat:41.00, u:"kh", c:["Halkı işgalleri protesto mitinglerine çağıran genelgenin yayımlandığı yer"]},
  {n:"Amasya", lon:35.83, lat:40.65, u:"kh", c:["Kurtuluş Savaşı'nın gerekçesi, amacı ve yönteminin ilk kez açıklandığı genelgenin yayımlandığı yer"]},
  {n:"Erzurum", lon:41.27, lat:39.90, u:"kh", c:["Bölgesel toplanıp ulusal kararlar alan kongrenin şehri","Mustafa Kemal'in askerlikten istifa ettiği şehir"]},
  {n:"Sivas", lon:37.02, lat:39.75, u:"kh", c:["Milli cemiyetlerin tek çatı altında birleştirildiği kongrenin şehri","İrade-i Milliye gazetesinin çıkarıldığı şehir"]},
  {n:"Ankara", lon:32.86, lat:39.93, u:"kh", c:["TBMM'nin 23 Nisan 1920'de açıldığı şehir","Yıldırım Bayezid'in Timur'a yenildiği 1402 savaşının yapıldığı yer","Frig başkenti Gordion'un bulunduğu il"]},
  {n:"İzmir", lon:27.14, lat:38.42, u:"kh", c:["15 Mayıs 1919'da Yunanlılar tarafından işgal edilen şehir","Misak-ı İktisadi'nin kabul edildiği kongrenin şehri","Anadolu'da ilk Türk donanmasını kuran beyliğin merkezi","İyon şehri Efes'in bulunduğu il"]},
  {n:"İstanbul", lon:28.98, lat:41.01, u:"osm_siyasi", c:["1453'te fethedilen şehir","16 Mart 1920'de İtilaf Devletlerince resmen işgal edilen şehir"]},
  {n:"Edirne", lon:26.56, lat:41.68, u:"osm_siyasi", c:["I. Murat döneminde fethedilip başkent yapılan Rumeli şehri"]},
  {n:"Bursa", lon:29.06, lat:40.19, u:"osm_siyasi", c:["Orhan Bey döneminde fethedilip başkent yapılan şehir"]},
  {n:"İznik", lon:29.72, lat:40.43, u:"turkiye", c:["Anadolu Selçuklu Devleti'nin ilk başkenti","İlk Osmanlı medresesinin açıldığı şehir"]},
  {n:"Konya", lon:32.49, lat:37.87, u:"turkiye", c:["Anadolu Selçuklu Devleti'nin I. Haçlı Seferi'nden sonraki başkenti","Mevlânâ'nın yaşadığı şehir","Neolitik Çağ'ın en eski köy yerleşimlerinden Çatalhöyük'ün bulunduğu il"]},
  {n:"Kütahya", lon:29.98, lat:39.42, u:"turkiye", c:["Germiyanoğulları Beyliği'nin merkezi"]},
  {n:"İnönü", lon:30.15, lat:39.82, u:"kc", c:["Düzenli ordunun ilk zaferinin kazanıldığı yer"]},
  {n:"Sakarya (Polatlı)", lon:32.15, lat:39.58, u:"kc", c:["Mustafa Kemal'e Gazi unvanı ve Mareşal rütbesi kazandıran meydan muharebesinin yeri"]},
  {n:"Kocatepe (Afyon)", lon:30.55, lat:38.75, u:"kc", c:["Büyük Taarruz'un yönetildiği tepe"]},
  {n:"Malazgirt", lon:42.53, lat:39.14, u:"turk_islam", c:["1071'de Anadolu'nun kapılarının Türklere açıldığı savaşın yeri"]},
  {n:"Miryokefalon", lon:30.90, lat:38.00, u:"turkiye", c:["1176'da Anadolu'nun kesin Türk yurdu olduğunun kanıtlandığı savaşın yeri"]},
  {n:"Kösedağ", lon:38.40, lat:40.15, u:"turkiye", c:["Anadolu Selçuklularının 1243'te Moğollara yenildiği yer"]},
  {n:"Otlukbeli", lon:39.75, lat:39.95, u:"osm_siyasi", c:["Fatih'in Akkoyunlu hükümdarı Uzun Hasan'ı yendiği yer"]},
  {n:"Divriği", lon:38.12, lat:39.37, u:"turkiye", c:["Mengüceklilerin UNESCO Dünya Mirası listesindeki Ulu Camii ve Darüşşifası'nın bulunduğu yer"]},
  {n:"Mardin", lon:40.74, lat:37.31, u:"turkiye", c:["Artuklu Beyliği'nin önemli merkezlerinden biri"]},
  {n:"Karaman", lon:33.21, lat:37.18, u:"turkiye", c:["Türkçeyi resmî dil ilan eden beyliğin merkezi"]},
  {n:"Alanya", lon:32.00, lat:36.54, u:"turkiye", c:["I. Alaeddin Keykubat'ın tersane kurdurduğu Akdeniz şehri"]},
  {n:"Sinop", lon:35.15, lat:42.02, u:"turkiye", c:["Anadolu Selçuklularının 1214'te aldığı Karadeniz limanı"]},
  {n:"Antep", lon:37.38, lat:37.06, u:"kc", c:["1921'de TBMM tarafından 'Gazi' unvanı verilen şehir","Şahin Bey'in şehit düştüğü savunmanın yapıldığı şehir"]},
  {n:"Maraş", lon:36.94, lat:37.58, u:"kc", c:["Fransız işgaline karşı Sütçü İmam'ın direnişiyle tanınan şehir"]},
  {n:"Urfa", lon:38.79, lat:37.16, u:"kc", c:["Güney Cephesi'nde Fransız işgaline karşı direnen ve sonradan 'Şanlı' unvanı alan şehir","Bilinen en eski tapınak alanlarından Göbeklitepe'nin bulunduğu il"]},
  {n:"Hatay", lon:36.16, lat:36.20, u:"dis", c:["Atatürk'ün 'şahsi meselem' dediği ve 1939'da Türkiye'ye katılan il"]},
  {n:"Çanakkale", lon:26.41, lat:40.15, u:"osm_1920", c:["18 Mart 1915 deniz zaferinin kazanıldığı yer","Kazılarını Heinrich Schliemann'ın başlattığı antik Truva kentinin bulunduğu il"]},
  {n:"Kars", lon:43.10, lat:40.60, u:"kc", c:["Doğu sınırını kesinleştiren 1921 antlaşmasına adını veren şehir"]},
  {n:"Kastamonu", lon:33.78, lat:41.38, u:"inkilap", c:["Atatürk'ün Şapka İnkılabı öncesinde gezi yaptığı şehir"]},
  {n:"Balıkesir", lon:27.88, lat:39.65, u:"turkiye", c:["Osmanlı'ya katılan ilk beylik olan Karesioğullarının merkezi"]},
  {n:"Trabzon", lon:39.72, lat:41.00, u:"osm_siyasi", c:["Fatih'in 1461'de son verdiği Rum imparatorluğunun merkezi"]},
  /* İlk Çağ ve Tarih Bilimi (TYT / AYT) */
  {n:"Hattuşa (Çorum)", lon:34.62, lat:40.02, u:"ilk_cag", c:["Hitit Devleti'nin başkenti","Kadeş Antlaşması'nın çivi yazılı tabletlerinin bulunduğu başkent"]},
  {n:"Tuşpa (Van)", lon:43.38, lat:38.50, u:"ilk_cag", c:["Madencilikte ilerleyen Urartuların başkenti"]},
  {n:"Sard (Manisa)", lon:28.04, lat:38.49, u:"ilk_cag", c:["Parayı ilk kullanan Lidyalıların başkenti","Pers Kral Yolu'nun batıdaki başlangıç noktası"]},
  {n:"Milet (Aydın)", lon:27.28, lat:37.53, u:"ilk_cag", c:["'Her şeyin ana maddesi sudur' diyen Thales'in yaşadığı İyon şehri"]},
  {n:"Karain (Antalya)", lon:30.57, lat:37.08, u:"tarih_bilimi", c:["Paleolitik Çağ'dan kalma ünlü mağaranın bulunduğu yer"]}
];
