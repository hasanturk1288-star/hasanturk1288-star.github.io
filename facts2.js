/* =========================================================
   KPSS TARİH NOTLARI — BİLGİ TABANI EKİ
   facts.js ile aynı format; gen.js çalışmadan önce FACTS'e eklenir.
   Kural aynı: sub özellikleri YALNIZCA o konuya ait olmalı.
   ========================================================= */
const FACTS_EK = {
islam_oncesi: {
 sub: [["Talas Savaşı","🧻",["751'de yapıldı","Abbasiler ile Çinliler arasında yapıldı","Karluklar Abbasileri destekledi","Kâğıt yapımının İslam dünyasına geçmesini sağladı"],"Talas'ta kâğıt uçtu"]],
 ev: [[626,"626","Avarların İstanbul kuşatması"],[630,"630","I. Göktürk Devleti'nin Çin egemenliğine girmesi"],[744,"744","II. Göktürk Devleti'nin yıkılışı"]]
},
turk_islam: {
 sub: [["Nizamülmülk","🎓",["Siyasetname'yi yazdı","Nizamiye Medreselerini kurdu","Alparslan ve Melikşah dönemlerinde vezirlik yaptı","Batıniler tarafından öldürüldü"]]],
 ev: [[1092,"1092","Melikşah'ın ölümü"],[1157,"1157","Büyük Selçuklu Devleti'nin yıkılışı"],[1250,"1250","Memlük Devleti'nin kuruluşu"]]
},
turkiye: {
 sub: [["Danişmentliler","⚔️",["Sivas, Tokat ve Amasya çevresinde kuruldu","Danişmentname destanı bu beyliğin mücadelelerini anlatır","Haçlı komutanı Bohemond'u esir aldılar"]],
       ["Saltuklular","🏯",["Malazgirt sonrası Anadolu'da kurulan ilk Türk beyliğidir","Erzurum ve çevresinde kuruldu"]]],
 ev: [[1221,"1221","Alanya'nın fethi"],[1273,"1273","Mevlânâ'nın ölümü"]]
},
osm_siyasi: {
 rel: [["antlasma","II. Murat ile Haçlılar arasında 1444'te imzalanan ve bozulunca Varna Savaşı'na yol açan antlaşma hangisidir?","Edirne-Segedin Antlaşması",2],
       ["kisi","İstanbul'un fethi sırasında Bizans'ın son imparatoru kimdir?","XI. Konstantin",2]],
 sub: [["Osman Bey","🐑",["Osmanlı Beyliği'nin kurucusudur","Koyunhisar (Bafeus) Savaşı'nda Bizans'ı yendi","Söğüt ve Domaniç çevresinden yayılmaya başladı"]],
       ["Çelebi Mehmet","🧩",["Fetret Devri'ne son verdi","Osmanlı'nın ikinci kurucusu olarak anılır","Şeyh Bedreddin İsyanı ile uğraştı"]]],
 ev: [[1413,"1413","Fetret Devri'nin sona ermesi"],[1461,"1461","Trabzon Rum İmparatorluğu'nun fethi"],[1522,"1522","Rodos'un fethi"],
      [1430,"1430","Selanik'in fethi"],[1480,"1480","Otranto'nun alınması"],[1521,"1521","Belgrad'ın fethi"],[1534,"1534","Irakeyn Seferi ile Bağdat'ın alınması"]]
},
osm_kultur: {
 sub: [["Yeniçeri Ocağı","🛡",["Kapıkulu piyadelerinden oluşan merkez ordusudur","I. Murat döneminde kuruldu","1826'da kaldırıldı"]],
       ["Mimar Sinan","📐",["Şehzade Camii'ni 'çıraklık eserim' olarak nitelendirdi","Selimiye Camii'ni 'ustalık eserim' olarak nitelendirdi","Devşirme kökenli bir mimardır","Kanuni, II. Selim ve III. Murat dönemlerinde baş mimarlık yaptı"]]],
 ev: [[1609,"1609","Sultanahmet Camii'nin yapımının başlaması"],[1773,"1773","Mühendishane-i Bahri Hümayun'un açılması"]]
},
osm_1718: {
 sub: [["Köprülüler dönemi","🏛️",["Köprülü Mehmet Paşa'nın sadrazamlığıyla başladı","Sadrazamlar padişahtan geniş yetkiler alarak göreve geldi","Aynı aileden birçok sadrazam yetişti"]],
       ["II. Viyana Kuşatması","🏰",["1683'te yapıldı","Merzifonlu Kara Mustafa Paşa tarafından yönetildi","Başarısızlığı Kutsal İttifak Savaşlarını başlattı"]]],
 ev: [[1656,"1656","Köprülü Mehmet Paşa'nın sadrazam olması"],[1789,"1789","III. Selim'in tahta çıkışı"]]
},
osm_1920: {
 sub: [["93 Harbi","⚔️",["1877-1878 yıllarında Rusya ile yapıldı","Ayastefanos ve ardından Berlin antlaşmalarıyla sonuçlandı","Kars, Ardahan ve Batum Rusya'ya bırakıldı","Gazi Osman Paşa'nın Plevne savunması bu savaşta yaşandı"]],
       ["Balta Limanı Antlaşması","🚢",["1838'de İngiltere ile imzalandı","İngiliz tüccarlarına geniş ticari ayrıcalıklar tanıdı","Yerli sanayinin gerilemesine yol açtı","Osmanlı'yı açık pazar hâline getirdi"]],
       ["Sened-i İttifak","🤝",["1808'de imzalandı","Ayanların varlığı resmen tanındı","Padişah ile ayanlar arasında imzalandı"]]],
 ev: [[1854,"1854","İlk dış borcun alınması"],[1878,"1878","Berlin Antlaşması"]]
},
kh: {
 sub: [["Sevr Antlaşması","📄",["10 Ağustos 1920'de imzalandı","TBMM tarafından tanınmadı","Osmanlı'nın imzaladığı ancak yürürlüğe girmeyen antlaşmadır","Boğazların uluslararası bir komisyona bırakılmasını öngördü"]],
       ["Kuva-yi Milliye","🔥",["Düzenli ordu kurulana kadar işgallere karşı halkın oluşturduğu silahlı direniştir","Batı Anadolu'da ilk kez Yunan işgaline karşı etkili oldu","Düzensiz yapısı nedeniyle zamanla düzenli orduya katıldı","Güneyde Fransız işgaline karşı da direniş gösterdi"]],
       ["İstanbul'un resmen işgali","🏙️",["16 Mart 1920'de gerçekleşti","Misak-ı Milli'nin kabulüne tepki olarak yapıldı","Son Osmanlı Mebusan Meclisi'nin dağılmasına yol açtı"]]],
 ev: [[1919.0708,"8 Temmuz 1919","Mustafa Kemal'in askerlikten istifası"],[1920.0429,"29 Nisan 1920","Hıyanet-i Vataniye Kanunu"],[1918.1113,"13 Kasım 1918","İtilaf donanmasının İstanbul'a gelmesi"]]
},
kc: {
 sub: [["Kars Antlaşması","🏔️",["Kafkas cumhuriyetleriyle imzalandı","Doğu sınırını kesinleştirdi","13 Ekim 1921'de imzalandı"]],
       ["Tekâlif-i Milliye Emirleri","🎒",["Başkomutanlık yetkisiyle yayımlandı","Halkın elindeki bazı malların %40'ı orduya verildi","Ordunun ihtiyaçlarını halktan karşılamak amacıyla çıkarıldı"]],
       ["II. İnönü Savaşı","🛡",["Nisan 1921'de kazanıldı","'Siz orada yalnız düşmanı değil, milletin makûs talihini de yendiniz' sözü bu zaferden sonra söylendi"]],
       ["Kütahya-Eskişehir Savaşları","🎯",["Temmuz 1921'de yapıldı","Türk ordusu Sakarya'nın doğusuna çekildi","Başkomutanlık Kanunu'nun çıkarılmasına yol açtı"]]],
 ev: [[1921.0710,"10 Temmuz 1921","Kütahya-Eskişehir Savaşları başladı"],[1922.0918,"18 Eylül 1922","Batı Anadolu'nun tamamen kurtuluşu"]]
},
inkilap: {
 sub: [["Cumhuriyetin ilanı","🏛️",["29 Ekim 1923'te gerçekleşti","Rejim sorunu çözüldü","Mustafa Kemal ilk cumhurbaşkanı oldu","İsmet Paşa ilk başbakan oldu"]],
       ["Şapka Kanunu","🎩",["25 Kasım 1925'te kabul edildi","Kastamonu gezisinin ardından çıkarıldı","Kılık-kıyafette çağdaşlaşmayı amaçladı"]],
       ["Kabotaj Kanunu","⚓",["1 Temmuz 1926'da yürürlüğe girdi","Türk karasularında taşımacılık hakkını Türk vatandaşlarına verdi","Yürürlüğe girdiği gün Denizcilik ve Kabotaj Bayramı olarak kutlanır"]],
       ["Takrir-i Sükun Kanunu","🔇",["Şeyh Said İsyanı üzerine çıkarıldı","Hükümete olağanüstü yetkiler verdi","İstiklal Mahkemeleri yeniden kuruldu"]],
       ["Aşar vergisinin kaldırılması","🌾",["Tarımsal üretim üzerinden alınan en ağır vergi kaldırıldı","Köylünün vergi yükü hafifletildi","Ürünün onda biri oranında alınan vergiye son verildi"]]],
 ev: [[1925.1226,"26 Aralık 1925","Uluslararası saat ve takvim kanunları"],[1926.0701,"1 Temmuz 1926","Kabotaj Kanunu yürürlüğe girdi"],[1931,"1931","Ölçüler Kanunu (metre sistemi)"],[1935,"1935","Hafta tatilinin pazar gününe alınması"]]
},
ilkeler: {
 sub: [["Terakkiperver Cumhuriyet Fırkası","🗳️",["1924'te kuruldu","Kâzım Karabekir ve arkadaşları tarafından kuruldu","Şeyh Said İsyanı'ndan sonra kapatıldı","Türkiye'nin ilk muhalefet partisidir"]],
       ["Serbest Cumhuriyet Fırkası","🕊️",["1930'da kuruldu","Ali Fethi Okyar tarafından kuruldu","Kısa süre sonra kendini feshetti","Kapanmasından sonra Menemen Olayı yaşandı"]]],
 ev: [[1923.0909,"9 Eylül 1923","Cumhuriyet Halk Fırkası kuruldu"]]
},
dis: {
 ev: [[1925,"1925","Türk-Sovyet Dostluk ve Tarafsızlık Antlaşması"],[1929,"1929","Briand-Kellogg Paktı'na katılım"]]
},
cagdas: {
 sub: [["Marshall Planı","💶",["1948'de uygulanmaya başladı","Avrupa'nın ekonomik kalkınmasını amaçladı","ABD Dışişleri Bakanı George Marshall'ın adını taşır"]],
       ["Varşova Paktı","🔴",["1955'te kuruldu","SSCB öncülüğünde kuruldu","NATO'ya karşı oluşturulan askerî ittifaktır"]]],
 ev: [[1960,"1960","27 Mayıs Askerî Müdahalesi"],[1963,"1963","Türkiye-AET Ankara Antlaşması"],[1987,"1987","AT'ye tam üyelik başvurusu"],[1999,"1999","AB adaylığının kabulü (Helsinki)"]]
}
};

/* ---------- ⭐ İLKE TANIMLARI (ilke sorularının açıklamalarında kullanılır) ---------- */
const ILKE_TANIM = {
 "Cumhuriyetçilik": "milli egemenliği ve yöneticilerin seçimle belirlenmesini esas alır",
 "Milliyetçilik": "milli birlik ve beraberliği, milli kültürü ve tam bağımsızlığı esas alır",
 "Halkçılık": "sınıf ayrıcalığını reddeder, kanun önünde eşitliği esas alır",
 "Devletçilik": "devletin ekonomide düzenleyici ve girişimci olmasını öngörür",
 "Laiklik": "din ve devlet işlerinin ayrılmasını, akıl ve bilimin esas alınmasını öngörür",
 "İnkılapçılık": "yapılan inkılapların korunmasını ve geliştirilmesini amaçlar"
};

/* ---------- 🚫 BİRBİRİNE KARIŞTIRILMAYACAK KONULAR ----------
   Bu çiftlerin özellikleri birbirine çeldirici veya yanlış eşleştirme olarak kullanılmaz
   (anlamca iç içe oldukları için soru tartışmalı olabilir). */
const NOMIX = [
 ["Mimar Sinan","Devşirme sistemi"],["Mimar Sinan","Yeniçeri Ocağı"],["Yeniçeri Ocağı","Devşirme sistemi"],
 ["Kütahya-Eskişehir Savaşları","Tekâlif-i Milliye Emirleri"],["II. Viyana Kuşatması","Karlofça Antlaşması"],
 ["Sened-i İttifak","II. Mahmut"],["Nizamülmülk","Büyük Selçuklu Devleti"]
];

/* ---------- 🧠 KODLAMALAR: kodlaması olmayan her konu için hafıza kancası ----------
   Konuya ait tüm üretilmiş sorularda (ilgilidir, değildir, öncüllü, hangi konuya ait) gösterilir. */
const KODLAR = {
 "Hazarlar": "HAZAR = Hoşgörü + Arap'a set; Musevi tek Türk devleti 🌊",
 "Gazneliler": "GAZNE → GAZa + Sultan: 17 Hindistan seferi, ilk 'Sultan' 👑",
 "Büyük Selçuklu Devleti": "Dandanakan'da doğdu 🥁, Malazgirt'le kapıyı açtı 🚪, Katvan'da sarsıldı",
 "Memlükler": "MEMLÜK = Moğol'u Ayn Calut'ta durduran Mısır kalkanı 🐫",
 "Harzemşahlar": "HARZEM → Moğol'la ilk HARbe giren 🗡️",
 "Tolunoğulları": "Mısır sırası T-İ-M: Tolun → İhşit → Memlük 🏜️",
 "Nizamülmülk": "NİZAM = düzen → Medrese + Siyasetname 🎓",
 "Anadolu Selçuklu Devleti": "İznik → Konya; Miryokefalon kilit 🔒, Kösedağ çöküş 🌪️",
 "Çaka Beyliği": "ÇAKA → İzmir'de ilk Türk donanması ⛵",
 "Artuklular": "ARTUK → Mardin-Diyarbakır: Malabadi + Cezeri (robotların atası) 🤖",
 "Mengücekliler": "MENGÜCEK → Divriği: taşta dantel 🕌",
 "Danişmentliler": "DANİŞMENT → Danişmentname + Bohemond'u esir alan beylik ⚔️",
 "Saltuklular": "SALTUK → Erzurum: Malazgirt sonrası ilk beylik 🏯",
 "I. Murat": "I. MURAT → Sırpsındığı (ilk Haçlı), Kosova, Yeniçeri, Edirne ✝️",
 "Yıldırım Bayezid": "YILDIRIM → Niğbolu'da çaktı ⚡, Ankara'da söndü",
 "II. Murat": "II. MURAT → Varna + II. Kosova = Balkan kilidi 🗡️",
 "Fatih Sultan Mehmet": "FATİH → İstanbul + Otlukbeli + Kanunname + Trabzon 🏛️",
 "Kanuni Sultan Süleyman": "KANUNİ → Belgrad-Rodos, Mohaç, Viyana, Preveze ⚓",
 "Osman Bey": "OSMAN → Koyunhisar: devletin ilk kuzu adımı 🐑",
 "Çelebi Mehmet": "ÇELEBİ → Fetret'i bitiren 'ikinci kurucu' 🧩",
 "Tımar sistemi": "TIMAR = Toprak + Asker 🌾⚔️",
 "Divan-ı Hümayun": "DİVAN → Sadrazam başkan; Defterdar-Kazasker-Nişancı 🏛️",
 "Enderun": "ENDERUN = 'içeride' okuyan saray okulu 🎓",
 "Millet sistemi": "MİLLET = Osmanlı'da 'din topluluğu' 🕍",
 "Lonca teşkilatı": "LONCA → Ahilikten gelen usta-kalfa-çırak düzeni 🧵",
 "Yeniçeri Ocağı": "YENİÇERİ = yeni asker → I. Murat kurdu, II. Mahmut kaldırdı 🛡",
 "Mimar Sinan": "Çırak: Şehzade → Kalfa: Süleymaniye → Usta: Selimiye 📐",
 "III. Selim": "III. SELİM = Nizam-ı Cedit (Yeni Düzen) + daimî elçi 🎖️",
 "Küçük Kaynarca Antlaşması": "KÜÇÜK Kaynarca = BÜYÜK kayıplar 💸",
 "Karlofça Antlaşması": "KARLOFÇA → ilk büyük toprak kaybı ✂️",
 "Zitvatorok Antlaşması": "ZİTVA → Zirve eşitliği ⚖️",
 "IV. Murat": "IV. MURAT → Bağdat + Kasr-ı Şirin + yasaklar 🗡️",
 "Prut Antlaşması": "PRUT → Petro kuşatıldı, Azak geri geldi 🗺️",
 "Köprülüler dönemi": "KÖPRÜLÜ → geniş yetkili sadrazamlar dönemi 🏛️",
 "II. Viyana Kuşatması": "1683 Viyana → 1699 Karlofça: kayıplar zinciri 🏰",
 "Tanzimat Fermanı": "TANZİM et → can, mal, namus; kanun üstünlüğü 📜",
 "Islahat Fermanı": "ISLAHAT → Islah et, gayrimüslime hak ver ⛪",
 "I. Meşrutiyet": "1876 → ilk anayasa; 93 Harbi ile meclis kapandı 🗳️",
 "II. Mahmut": "II. MAHMUT → Vaka-i Hayriye + Sened-i İttifak + ilk nüfus sayımı",
 "II. Meşrutiyet": "1908 → İttihat ve Terakki baskısı, ardından 31 Mart 🏛️",
 "Kırım Savaşı": "KIRIM → ilk dış borç + Paris Antlaşması ⚓",
 "Çanakkale Cephesi": "ÇANAKKALE GEÇİLMEZ → 18 Mart 1915 🌊",
 "93 Harbi": "93 = Rumi 1293 (1877) → Plevne + Kars-Ardahan-Batum ⚔️",
 "Balta Limanı Antlaşması": "BALTA Limanı → yerli sanayiye balta 🚢",
 "Sened-i İttifak": "SENED-i İTTİFAK = padişahla ayanın ittifak senedi 🤝",
 "Misak-ı Milli": "MİSAK = SÖZ 🤞 (TBMM'den önce verildi)",
 "Mondros Ateşkes Antlaşması": "7. madde = her kapıyı açan anahtar 🗝️",
 "Havza Genelgesi": "HAVZA = Halkı Ayağa Kaldır 📢 (miting)",
 "TBMM'nin açılışı": "23 Nisan 🎈 → egemenlik milletin",
 "Sevr Antlaşması": "SEVR → ölü doğan antlaşma 📄",
 "Kuva-yi Milliye": "KUVA-Yİ MİLLİYE = milletin kuvvetleri: önce halk, sonra düzenli ordu 🔥",
 "İstanbul'un resmen işgali": "Misak-ı Milli (28 Ocak) → İşgal (16 Mart) → TBMM (23 Nisan) 🏙️",
 "I. İnönü Savaşı": "İNÖNÜ I → Anayasa + Londra 📘",
 "Sakarya Meydan Muharebesi": "SAKARYA = Son savunma → Gazi + Mareşal 🎖️",
 "Büyük Taarruz": "26 Ağustos başla → 30 Ağustos zafer → 9 Eylül İzmir 🌊",
 "Ankara Antlaşması (1921)": "ANKARA 1921 → Fransa: TBMM'yi tanıyan ilk İtilaf devleti 🤝",
 "Moskova Antlaşması": "MOSKOVA → Batum gitti, Misak-ı Milli tanındı ❄️",
 "Kars Antlaşması": "Gümrü → Moskova → KARS: doğu sınırı kesin 🏔️",
 "Tekâlif-i Milliye Emirleri": "TEKÂLİF 'teklif' değil EMİR! %40 orduya 🎒",
 "II. İnönü Savaşı": "İNÖNÜ II → 'makûs talih' yenildi 🛡",
 "Kütahya-Eskişehir Savaşları": "Yenilgi → Sakarya'ya çekil → Başkomutanlık 🎯",
 "Tevhid-i Tedrisat Kanunu": "TEVHİD = birleştirme → okullar tek çatıda 📚",
 "Harf İnkılabı": "1 Kasım 1928 → yeni harfler, Başöğretmen 🔤",
 "Saltanatın kaldırılması": "1 Kasım 1922 → taç düştü 👑 (Lozan'a tek davet)",
 "Halifeliğin kaldırılması": "3 Mart 1924 → hilafet bitti 🕌",
 "İzmir İktisat Kongresi": "İZMİR → Misak-ı İktisadi = ekonomik söz 📕",
 "Soyadı Kanunu": "24 Kasım = Öğretmenler Günü → 'Atatürk' soyadı 🏷️",
 "Cumhuriyetin ilanı": "29 Ekim 1923 🏛️ → rejim sorunu çözüldü",
 "Şapka Kanunu": "Kastamonu → KASım'da Kanun 🎩",
 "Kabotaj Kanunu": "1 Temmuz = Denizcilik ve Kabotaj Bayramı ⚓",
 "Takrir-i Sükun Kanunu": "TAKRİR-i SÜKUN = 'sükûnu sağla' 🔇",
 "Aşar vergisinin kaldırılması": "AŞAR = onda bir → 1925'te köylü rahatladı 🌾",
 "Cumhuriyetçilik": "CUMHUR = halk topluluğu → seçim 🗳️",
 "Milliyetçilik": "MİLLİ → Tarih + Dil + Kabotaj 📖",
 "Devletçilik": "1929 kriz → DEVLET girişimci 🏭",
 "Laiklik": "LAİK = akıl + bilim, din-devlet ayrı ⚖️",
 "İnkılapçılık": "İNKILAPÇILIK = bekçi ilke 🔄",
 "Terakkiperver Cumhuriyet Fırkası": "TCF 1924 → Şeyh Said'den sonra kapandı 🗳️",
 "Serbest Cumhuriyet Fırkası": "SCF 1930 → Fethi Okyar, ardından Menemen 🕊️",
 "Hatay sorunu": "HATAY = 'şahsi meselem' → 1938 devlet, 1939 anavatan 🗺️",
 "Musul sorunu": "Musul gitti, %10 petrol kaldı ⛽",
 "Balkan Antantı": "T-Y-R-Y → Tüm Yarımada Rahat Yaşasın 🤝",
 "Sadabat Paktı": "T-İ-I-A → doğu komşuları, Tahran'da imza 🕌",
 "1930 Türk-Yunan Antlaşması": "ETABLİ → 1930'da 'tabii ki dostuz' 🏠",
 "Milletler Cemiyeti üyeliği": "1932 → Yurtta sulh, cihanda sulh 🌐",
 "Truman Doktrini": "TRUMAN = Türkiye + Yunanistan'a yardım 💵",
 "NATO": "Kore (1950) → NATO (1952) 🛡",
 "Küba Füze Krizi": "KÜBA ↔ Jüpiter takası 🚀",
 "Kore Savaşı": "KORE → Kunuri kahramanlığı, NATO kapısı 🛡",
 "Kıbrıs Barış Harekâtı": "74 harekât → 83 KKTC 🕊️",
 "Soğuk Savaş'ın sona ermesi": "Duvar 89 → Almanya 90 → Pakt ve SSCB 91 🧱",
 "Çok partili hayata geçiş": "46 açık oy 🙈 → 50 DP iktidar 🗳️",
 "Marshall Planı": "MARSHALL = Avrupa'nın ekonomisi 💶",
 "Varşova Paktı": "VARŞOVA = Doğu bloğunun NATO'su 🔴"
};
