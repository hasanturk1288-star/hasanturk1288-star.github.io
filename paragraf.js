/* =========================================================
   KPSS TARİH NOTLARI — PARAGRAF (YORUM) SORULARI
   ÖSYM tarzı: kısa bir parça + "ulaşılamaz / söylenemez / söylenebilir" kökü.
   Biçim: soru metni = PARÇA + "\n\n" + SORU KÖKÜ (arayüz parçayı ayrı kutuda gösterir).
   P(id, ünite, seviye, simge, parça, kök, şıklar, doğruIndeks, açıklama)
   Kural: Doğru cevap dışındaki dört şık parçadan AÇIKÇA çıkarılabilmeli (ya da "söylenebilir"
   sorularında dört çeldirici parçayla çelişmeli / parçada hiç olmamalı).
   ========================================================= */
(function () {
const P = (id, u, l, sym, par, stem, o, a, exp) => QUESTIONS.push({id, u, l, sym, q: par + "\n\n" + stem, o, a, exp, kod: "", hot: false, par: true, noBolt: true});

/* 📜 TARİH BİLİMİ */
P(5001,"tarih_bilimi",3,"🔎","Tarihçi, bir olayı incelerken yalnızca tek bir kaynağa bağlı kalmaz; arşiv belgeleri, kitabeler, sikkeler ve hatıralar gibi farklı kaynakları karşılaştırır. Kaynağın kim tarafından, hangi amaçla ve ne zaman yazıldığını sorgular. Olayları kendi dönemlerinin şartları içinde değerlendirir ve bugünün değer yargılarıyla yargılamaktan kaçınır.",
 "Bu parçada tarih biliminin aşağıdaki özelliklerinden hangisine değinilmemiştir?",
 ["Farklı kaynaklardan yararlanma","Kaynakları eleştirel bir gözle değerlendirme","Olayları kendi dönemi içinde yorumlama","Kaynağın yazılış amacını sorgulama","Deney ve gözlem yoluyla kesin yasalara ulaşma"],4,
 "Parçada farklı kaynakları karşılaştırma, kaynağı kimin, ne zaman ve hangi amaçla yazdığını sorgulama ve olayları kendi dönemi içinde değerlendirme anlatılmıştır. Tarih geçmişte kaldığı için deney ve gözlem yapamaz; kesin yasalara ulaşma parçada yoktur.");
P(5002,"tarih_bilimi",3,"🐉","Eski Türkler, on iki hayvanın adını taşıyan yılları on ikişer yıllık devirler hâlinde sayardı. Bu takvim güneş yılını esas alıyordu ve hayvancılıkla geçinen toplulukların mevsim değişimlerini izlemesine kolaylık sağlıyordu. Uygurlar döneminde de kullanılan bu takvim, Türklerin İslamiyet'i kabulünden sonra da bir süre kullanılmaya devam etmiştir.",
 "Bu parçaya göre On İki Hayvanlı Türk Takvimi ile ilgili aşağıdakilerden hangisine ulaşılamaz?",
 ["Güneş yılını esas aldığına","Ekonomik hayatın ihtiyaçlarını gözettiğine","Farklı Türk toplulukları tarafından kullanıldığına","Döngüsel bir zaman anlayışına dayandığına","Ay yılını esas alan takvimlerden daha doğru sonuç verdiğine"],4,
 "Güneş yılı, hayvancılık (ekonomi), Uygurlar ve Eski Türkler (farklı topluluklar) ve on iki yıllık devirler (döngüsellik) parçada vardır. Ay takvimleriyle bir karşılaştırma yapılmamıştır.");

/* 🏺 İLK ÇAĞ */
P(5003,"ilk_cag",3,"🪙","Batı Anadolu'da yaşayan Lidyalılar, ticareti kolaylaştırmak amacıyla tarihte ilk kez madenî para kullanmışlardır. Başkentleri Sard, daha sonra Perslerin yaptırdığı Kral Yolu'nun batıdaki başlangıç noktası olmuştur. Paranın kullanılmasıyla takas usulünün önemi azalmış, ticaret hızlanmıştır.",
 "Bu parçadan aşağıdakilerden hangisine ulaşılamaz?",
 ["Lidyalıların ticarete önem verdiğine","Sard'ın ticaret yolları üzerinde önemli bir konumda bulunduğuna","Paranın ticari faaliyetleri hızlandırdığına","Bir bölgenin farklı uygarlıklar döneminde de önemini koruduğuna","Lidyalıların yazıyı ilk kullanan uygarlık olduğuna"],4,
 "Parça para, ticaret ve Kral Yolu'ndan söz eder; Sard hem Lidya hem Pers döneminde önemlidir. Yazının icadından hiç söz edilmez (yazıyı ilk kullananlar Sümerlerdir).");
P(5004,"ilk_cag",3,"⚔️","Hititler, Mısır ile yaptıkları Kadeş Savaşı'nın ardından tarihte bilinen ilk yazılı antlaşmayı imzalamışlardır. Hitit devletinde kralın yetkileri Pankuş adı verilen meclis tarafından denetlenirdi. Hititler, bin tanrılı halk olarak anılmış; fethettikleri toplulukların tanrılarını da kendi inanç sistemlerine katmışlardır.",
 "Bu parçaya göre Hititler ile ilgili aşağıdakilerden hangisi söylenemez?",
 ["Diplomasiye önem verdikleri","Kralın yetkilerinin sınırlandırıldığı","Farklı inançlara karşı hoşgörülü oldukları","Komşu uygarlıklarla ilişki içinde oldukları","Mutlak monarşiyle yönetildikleri"],4,
 "Antlaşma diplomasiyi, Pankuş kralın denetlendiğini, bin tanrılı yapı hoşgörüyü, Mısır ilişkisi komşularla teması gösterir. Kralın yetkisi meclisçe denetlendiği için mutlak monarşiden söz edilemez.");

/* 🏹 İSLAMİYET ÖNCESİ */
P(5005,"islam_oncesi",3,"🗿","Bilge Kağan adına dikilen yazıtta kağan, Türk milletine seslenerek Çin'in tatlı sözlerine ve yumuşak ipeklerine aldanan Türklerin büyük kayıplara uğradığını anlatır. Kağan, milletini aç ve yoksul bırakmamak için gece uyumayıp gündüz oturmadığını söyler. Yazıtta kağanların görevinin milleti doyurmak, giydirmek ve çoğaltmak olduğu vurgulanır.",
 "Bu parçadan Göktürklerle ilgili aşağıdakilerden hangisine ulaşılamaz?",
 ["Hükümdarın halkın refahından sorumlu tutulduğuna","Kültürel bağımsızlığın korunmasına önem verildiğine","Yöneticilerin halkına karşı görev bilinci taşıdığına","Geçmişteki olaylardan ders çıkarılmaya çalışıldığına","Kağanın yetkilerinin kurultay tarafından sınırlandırıldığına"],4,
 "Milleti doyurma ve giydirme refah sorumluluğunu ve görev bilincini; Çin'e aldanma uyarısı kültürel bağımsızlığı ve geçmişten ders almayı gösterir. Kurultaydan parçada söz edilmez.");
P(5006,"islam_oncesi",2,"📜","Uygurlar, Mani dinini kabul ettikten sonra yerleşik hayata geçmeye başlamışlardır. Bu dönemde şehirler kurmuş; tapınaklar, kütüphaneler ve saraylar inşa etmişlerdir. Matbaayı kullanan, kâğıt üretiminde ilerleyen Uygurlar, Soğd alfabesinden geliştirdikleri Uygur alfabesini yaygın biçimde kullanmışlardır.",
 "Bu parçaya göre aşağıdakilerden hangisi söylenebilir?",
 ["Din değişikliğinin yaşam tarzını etkilediği","Uygurların hayvancılığı tamamen bıraktığı","Uygur alfabesinin başka hiçbir alfabeden etkilenmediği","Uygurların ilk Müslüman Türk devleti olduğu","Uygurların Çin'e bağımlı yaşadığı"],0,
 "Mani dinini kabulden sonra yerleşik hayata geçilmesi, din değişikliğinin yaşam tarzını etkilediğini gösterir. Alfabe Soğd alfabesinden geliştirilmiştir; diğer şıklar parçada yoktur.");

/* ☪️ İSLAM TARİHİ */
P(5007,"islam",3,"🤝","Hz. Muhammed, Hicret'in ardından Medine'de yaşayan Müslümanlar, Yahudiler ve diğer topluluklarla bir sözleşme yapmıştır. Bu sözleşmeye göre şehir dışarıdan bir saldırıya uğradığında taraflar birlikte savunma yapacak, her topluluk kendi dinini serbestçe yaşayabilecekti. Anlaşmazlıklarda ise Hz. Muhammed'in hakemliğine başvurulacaktı.",
 "Bu parçaya göre Medine Sözleşmesi ile aşağıdakilerden hangisinin amaçlandığı söylenemez?",
 ["Şehirde ortak güvenliği sağlamak","Din ve vicdan özgürlüğünü korumak","Toplumsal barışı sağlamak","Anlaşmazlıkların çözümü için bir yol belirlemek","Medine'deki bütün toplulukları Müslüman yapmak"],4,
 "Ortak savunma, din serbestliği ve hakemlik; güvenliği, inanç özgürlüğünü, barışı ve uyuşmazlık çözümünü gösterir. Her topluluğun kendi dinini yaşaması, herkesi Müslüman yapma amacıyla çelişir.");
P(5008,"islam",3,"📚","Abbasiler döneminde Bağdat'ta kurulan Beytü'l-Hikme'de Yunanca, Farsça ve Hintçe eserler Arapçaya çevrilmiştir. Bu çeviri faaliyetleri sayesinde matematik, astronomi ve tıp alanında önemli gelişmeler yaşanmıştır. Harezmi'nin cebir alanındaki çalışmaları, daha sonra Avrupa'da da uzun süre ders kitabı olarak okutulmuştur.",
 "Bu parçadan aşağıdakilerden hangisi çıkarılamaz?",
 ["Abbasilerin bilimsel çalışmaları desteklediği","Farklı kültürlerin birikiminden yararlanıldığı","İslam dünyasındaki bilimsel gelişmelerin Avrupa'yı etkilediği","Bağdat'ın önemli bir bilim merkezi olduğu","Abbasilerin Arap milliyetçiliği politikası uyguladığı"],4,
 "Beytü'l-Hikme, çeviriler ve Harezmi'nin Avrupa'daki etkisi diğer şıkları destekler. Arap milliyetçiliği (mevali politikası) Emevilere aittir ve parçada geçmez.");

/* 🕌 TÜRK-İSLAM */
P(5009,"turk_islam",3,"🏇","1071'de Alparslan komutasındaki Selçuklu ordusu, Bizans ordusunu Malazgirt'te yenmiştir. Bu zaferden sonra Türkmen boyları Anadolu'ya akın akın gelmeye başlamış, kısa sürede Anadolu'nun büyük bölümünde Türk beylikleri kurulmuştur. Bizans ise kaybettiği toprakları geri alabilmek için Avrupa'dan yardım istemiştir.",
 "Bu parçaya göre Malazgirt Savaşı'nın sonuçları arasında aşağıdakilerden hangisi gösterilemez?",
 ["Anadolu'nun Türk yurdu hâline gelmeye başlaması","Anadolu'da Türk beyliklerinin kurulması","Anadolu'ya Türk göçlerinin hızlanması","Bizans'ın Avrupa'dan yardım istemesi","Anadolu'nun kesin Türk yurdu olduğunun kanıtlanması"],4,
 "Göçler, beylikler ve Bizans'ın yardım istemesi parçada vardır. Anadolu'nun kesin Türk yurdu olduğu 1176 Miryokefalon Savaşı ile kanıtlanmıştır.");
P(5010,"turk_islam",3,"📗","Yusuf Has Hacip, Kutadgu Bilig'de devleti dört kahraman üzerinden anlatır: Kün Togdı adaleti, Ay Toldı mutluluğu, Ögdülmüş aklı, Odgurmış ise kanaati temsil eder. Eserde hükümdarın adaletle yönetmesi, bilgili ve akıllı kişilere danışması gerektiği vurgulanır.",
 "Bu parçadan aşağıdakilerden hangisine ulaşılamaz?",
 ["Eserde soyut kavramların kişileştirilerek anlatıldığına","Adaletin yönetimde temel ilke kabul edildiğine","Hükümdarın danışarak karar alması gerektiğine","Eserin devlet yönetimine yol gösterme amacı taşıdığına","Eserin Arapça yazıldığına"],4,
 "Kahramanların adalet, akıl gibi kavramları temsil etmesi kişileştirmedir; adalet ve danışma vurgusu yönetim amacını gösterir. Eserin dili parçada belirtilmemiştir (Kutadgu Bilig Türkçe yazılmıştır).");

/* 🏰 TÜRKİYE TARİHİ (SELÇUKLU-BEYLİKLER) */
P(5011,"turkiye",3,"🧵","Anadolu'da esnaf ve sanatkârlar, Ahi Evran'ın öncülüğünde örgütlenmiştir. Bu teşkilatta bir meslekte usta olmak için çıraklık ve kalfalık aşamalarından geçmek gerekirdi. Ahiler, üretilen malın kalitesini denetler, hileli mal satan esnafı cezalandırır ve fiyatların belirlenmesine katkı sağlardı. Teşkilat üyelerine meslek bilgisinin yanında ahlak eğitimi de verilirdi.",
 "Bu parçaya göre Ahilik ile ilgili aşağıdakilerden hangisi söylenemez?",
 ["Mesleki eğitime önem verdiği","Tüketicinin korunmasını amaçladığı","Ekonomik hayatı düzenlediği","Ahlaki değerleri önemsediği","Devletin atadığı memurlar tarafından yönetildiği"],4,
 "Çıraklık-kalfalık mesleki eğitimi, kalite denetimi tüketiciyi korumayı, fiyat belirleme ekonomiyi düzenlemeyi, ahlak eğitimi ahlaki değerleri gösterir. Devlet memurlarınca yönetildiğine dair bilgi yoktur.");
P(5012,"turkiye",2,"🗣️","1277'de Karamanoğlu Mehmet Bey, divanda, dergâhta, bargâhta, mecliste ve meydanda Türkçeden başka dil kullanılmamasını emretmiştir. O dönemde Anadolu'da resmî yazışmalarda Farsça, bilim alanında ise Arapça yaygın biçimde kullanılmaktaydı.",
 "Bu parçaya göre Karamanoğlu Mehmet Bey'in fermanıyla ilgili aşağıdakilerden hangisi söylenebilir?",
 ["Türkçenin resmî dil olarak güçlenmesini amaçladığı","Arapça ve Farsçanın Anadolu'da hiç bilinmediği","Osmanlı Devleti döneminde çıkarıldığı","Bilim dilinin Farsça olduğunu kabul ettiği","Yalnızca ordu için geçerli olduğu"],0,
 "Divandan meydana kadar Türkçe kullanılması emri, Türkçeyi resmî dil olarak güçlendirme amacını gösterir. Parçaya göre Farsça ve Arapça yaygındı; bilim dili Arapçaydı; ferman Karamanoğulları dönemindedir.");

/* ⚔️ ORTA ÇAĞ */
P(5013,"orta_cag",3,"🏰","Batı Roma'nın yıkılmasından sonra Avrupa'da merkezi otorite zayıflamış, güvenliğini sağlayamayan halk güçlü toprak sahiplerinin korumasına girmiştir. Toprak sahibi senyörler, kendi bölgelerinde vergi toplamış, mahkeme kurmuş ve asker beslemiştir. Toprağa bağlı yaşayan serfler ise senyörün izni olmadan bulundukları yeri terk edememiştir.",
 "Bu parçaya göre feodalite ile ilgili aşağıdakilerden hangisine ulaşılamaz?",
 ["Otorite boşluğunun bu düzenin doğmasında etkili olduğuna","Senyörlerin geniş yetkilere sahip olduğuna","Toplumda sınıflı bir yapının bulunduğuna","Serflerin kişisel özgürlüklerinin kısıtlandığına","Kilisenin bu düzende en büyük toprak sahibi olduğuna"],4,
 "Merkezi otoritenin zayıflaması, senyörün vergi-mahkeme-asker yetkisi, senyör-serf ayrımı ve serfin yer değiştirememesi parçada vardır. Kiliseden hiç söz edilmez.");
P(5014,"orta_cag",3,"✝️","Haçlı Seferleri sonunda Avrupalılar Kudüs'ü kalıcı olarak elde tutamamıştır. Ancak bu seferler sırasında Doğu ile kurulan temaslar, Avrupa'da kâğıt, pusula ve barut gibi buluşların tanınmasını hızlandırmıştır. Seferlere katılan ve geri dönmeyen soyluların topraklarının el değiştirmesi feodal yapıyı zayıflatmış, kiliseye duyulan güven ise azalmıştır.",
 "Bu parçaya göre Haçlı Seferleri'nin sonuçları arasında aşağıdakilerden hangisi yoktur?",
 ["Doğu ile Batı arasında kültürel etkileşimin artması","Feodal düzenin sarsılması","Kilisenin itibarının zedelenmesi","Hedeflenen dinî amaca kalıcı olarak ulaşılamaması","Bizans İmparatorluğu'nun güçlenmesi"],4,
 "Buluşların tanınması etkileşimi, toprakların el değiştirmesi feodalitenin sarsılmasını, güvenin azalması kilisenin zayıflamasını, Kudüs'ün tutulamaması amaca ulaşılamamasını gösterir. Bizans'tan söz edilmez.");

/* 👑 OSMANLI SİYASİ */
P(5015,"osm_siyasi",3,"🏛️","II. Mehmet, İstanbul'u kuşatmadan önce Boğaz'ın Avrupa yakasında Rumeli Hisarı'nı yaptırmış, Karadeniz'den Bizans'a gelebilecek yardımları engellemiştir. Kuşatmada büyük toplar kullanılmış, gemiler karadan yürütülerek Haliç'e indirilmiştir. Fetihle birlikte Osmanlı Devleti'nin Anadolu ve Rumeli toprakları arasındaki bütünlük sağlanmıştır.",
 "Bu parçaya göre İstanbul'un fethiyle ilgili aşağıdakilerden hangisi söylenemez?",
 ["Fetih için önceden hazırlık yapıldığı","Askerî teknolojiden yararlanıldığı","Bizans'ın dışarıdan yardım alması önlenmeye çalışıldığı","Osmanlı topraklarının birleştirilmesine katkı sağladığı","Fethin ardından Haçlı Seferleri'nin sona erdiği"],4,
 "Rumeli Hisarı hazırlığı ve yardımın engellenmesini, toplar teknolojiyi, Anadolu-Rumeli bütünlüğü birleşmeyi gösterir. Haçlı Seferleri'nden parçada söz edilmez.");
P(5016,"osm_siyasi",3,"⚓","1538'de Barbaros Hayreddin Paşa komutasındaki Osmanlı donanması, Haçlı donanmasını Preveze'de yenmiştir. Bu zaferden sonra Akdeniz'de Osmanlı deniz üstünlüğü kurulmuş, Kuzey Afrika'daki fetihler kolaylaşmıştır.",
 "Bu parçadan aşağıdakilerden hangisine ulaşılamaz?",
 ["Osmanlı'nın denizcilikte güçlendiğine","Preveze Savaşı'nın Haçlılara karşı kazanıldığına","Deniz üstünlüğünün kara fetihlerini kolaylaştırdığına","Akdeniz'in Osmanlı için önemli olduğuna","Osmanlı donanmasının Hint Okyanusu'nda Portekizlileri yendiğine"],4,
 "Deniz üstünlüğü, Haçlı donanmasının yenilmesi ve Kuzey Afrika fetihlerinin kolaylaşması parçada vardır. Hint Okyanusu ve Portekizlilerden söz edilmez.");

/* 🏛️ OSMANLI KÜLTÜR VE MEDENİYET */
P(5017,"osm_kultur",3,"🌾","Osmanlı Devleti'nde fethedilen toprakların vergi geliri, devlet adına hizmet eden askerlere ve görevlilere dirlik olarak verilirdi. Tımar sahibi sipahi, bu gelir karşılığında savaşa atlı asker yetiştirir ve bölgesinde güvenliği sağlardı. Toprağın mülkiyeti ise devlette kalır, köylü toprağı işlediği sürece kullanım hakkına sahip olurdu.",
 "Bu parçaya göre tımar sistemiyle aşağıdakilerden hangisinin sağlandığı söylenemez?",
 ["Asker yetiştirme masrafının vergi gelirlerinden karşılanması","Taşrada güvenliğin sağlanması","Toprak mülkiyetinin devlette kalması","Toprağın işlenmeye devam etmesi","Merkezi otoritenin zayıflaması"],4,
 "Vergi geliriyle asker yetiştirilmesi, güvenliğin sağlanması, mülkiyetin devlette kalması ve köylünün toprağı işlemesi parçada vardır. Sistem merkezi otoriteyi güçlendirir; zayıflattığı söylenemez.");
P(5018,"osm_kultur",2,"🕍","Osmanlı Devleti, farklı dinlere mensup toplulukları millet sistemi ile yönetmiştir. Bu sisteme göre her topluluk kendi dinî lideri aracılığıyla devlete bağlanmış; ibadet, eğitim ve aile hukuku gibi konularda kendi kurallarını uygulayabilmiştir. Gayrimüslimler, cizye vergisi ödedikleri sürece can ve mal güvenliğine sahip olmuşlardır.",
 "Bu parçaya göre millet sistemi ile ilgili aşağıdakilerden hangisi söylenebilir?",
 ["Farklı inançlara belirli alanlarda özerklik tanındığı","Toplumun etnik kökene göre gruplandırıldığı","Gayrimüslimlerin vergiden muaf tutulduğu","Bütün toplulukların aynı aile hukukuna bağlı olduğu","Dinî liderlerin Divan-ı Hümayun üyesi olduğu"],0,
 "Toplulukların ibadet, eğitim ve aile hukukunda kendi kurallarını uygulaması özerkliktir. Gruplandırma dine göredir, gayrimüslimler cizye öder; diğer şıklar parçayla çelişir ya da parçada yoktur.");

/* 🌍 AVRUPA (YENİ VE YAKIN ÇAĞ) */
P(5019,"avrupa",3,"🎨","15. yüzyılda İtalya'da başlayan Rönesans, insanı ve doğayı merkeze alan bir anlayışı yaygınlaştırmıştır. Ticaretle zenginleşen İtalyan şehirlerindeki varlıklı aileler sanatçıları desteklemiş, matbaanın yayılması ise yeni fikirlerin hızla tanınmasını sağlamıştır. Bu dönemde Antik Yunan ve Roma eserleri yeniden incelenmiştir.",
 "Bu parçaya göre Rönesans'ın gelişmesinde aşağıdakilerden hangisinin etkili olduğu söylenemez?",
 ["Ticaretten elde edilen zenginlik","Sanatçıların desteklenmesi","Matbaanın yaygınlaşması","Antik çağ eserlerinin incelenmesi","Sanayi İnkılabı ile fabrikaların kurulması"],4,
 "Zenginlik, sanatçıların desteklenmesi, matbaa ve Antik eserler parçada vardır. Sanayi İnkılabı 18. yüzyılda başlamıştır ve parçada geçmez.");
P(5020,"avrupa",2,"🇫🇷","1789 Fransız İhtilali ile milliyetçilik, eşitlik ve özgürlük gibi düşünceler kısa sürede bütün Avrupa'ya yayılmıştır. Bu düşünceler, farklı milletleri bir arada yöneten çok uluslu imparatorlukları derinden etkilemiştir. Osmanlı Devleti'nde de ilk isyanlar Balkanlardaki gayrimüslim topluluklar arasında başlamıştır.",
 "Bu parçadan aşağıdakilerden hangisi çıkarılabilir?",
 ["Fransız İhtilali'nin etkisinin Fransa sınırlarını aştığı","Osmanlı Devleti'nin ihtilalden hiç etkilenmediği","Balkanlardaki isyanların yalnızca ekonomik nedenlerle çıktığı","Avrupa'da mutlak monarşilerin güçlendiği","Milliyetçiliğin önce Müslüman topluluklar arasında yayıldığı"],0,
 "Fikirlerin bütün Avrupa'ya ve Osmanlı'ya yayılması, etkinin Fransa'yı aştığını gösterir. Osmanlı etkilenmiştir; ilk isyanlar gayrimüslimler arasında çıkmıştır; diğer şıklar parçada yoktur.");

/* 📉 OSMANLI 17-18. YÜZYIL */
P(5021,"osm_1718",3,"🌷","Pasarofça Antlaşması'ndan sonra başlayan Lale Devri'nde Osmanlı Devleti, Avrupa ile barışçı ilişkiler kurmaya yönelmiştir. Bu dönemde Avrupa'ya geçici elçiler gönderilmiş, İbrahim Müteferrika ilk Türk matbaasını kurmuş, İstanbul'da ilk itfaiye örgütü oluşturulmuştur. Saray çevresinde ise eğlence hayatı ve lüks harcamalar artmıştır.",
 "Bu parçaya göre Lale Devri ile ilgili aşağıdakilerden hangisi söylenemez?",
 ["Avrupa'nın yakından tanınmaya çalışıldığı","Kültürel alanda yenilikler yapıldığı","Şehir hayatına yönelik düzenlemeler yapıldığı","Dış politikada barış yanlısı bir tutum izlendiği","Askerî alanda köklü ıslahatlar yapıldığı"],4,
 "Elçiler Avrupa'yı tanımayı, matbaa kültürel yeniliği, itfaiye şehir hayatını, barışçı ilişkiler dış politikayı gösterir. Askerî ıslahattan parçada söz edilmez.");
P(5022,"osm_1718",3,"📉","17. yüzyılda yapılan ıslahatlar genellikle sorunların kaynağına inmek yerine, bozulan kurumları eski hâline getirmeye yönelikti. Islahatlar kişilere bağlı kaldığından, onları yapan devlet adamının ölümü ya da görevden alınmasıyla etkisini yitiriyordu. Bu dönemde Avrupa'nın üstünlüğü henüz kabul edilmediği için Batı örnek alınmamıştır.",
 "Bu parçaya göre 17. yüzyıl ıslahatlarının özellikleri arasında aşağıdakilerden hangisi yoktur?",
 ["Kalıcı olmama","Kişilere bağlı kalma","Geleneksel kurumları düzeltmeye yönelik olma","Batı'yı örnek almama","Halkın isteğiyle yapılma"],4,
 "Etkisini yitirme kalıcı olmamayı, devlet adamına bağlılık kişiselliği, kurumları eski hâline getirme gelenekselliği, Batı'nın örnek alınmaması dördüncü şıkkı gösterir. Halkın isteğinden söz edilmez.");

/* 📜 OSMANLI 19-20. YÜZYIL */
P(5023,"osm_1920",3,"📜","1839'da ilan edilen Tanzimat Fermanı ile padişah, kendi yetkilerini sınırlandırarak kanunların üstünlüğünü kabul etmiştir. Fermanda Müslüman ve gayrimüslim bütün halkın can, mal ve namus güvenliğinin sağlanacağı, vergilerin herkesin gelirine göre alınacağı, kimsenin yargılanmadan cezalandırılmayacağı belirtilmiştir.",
 "Bu parçaya göre Tanzimat Fermanı ile ilgili aşağıdakilerden hangisine ulaşılamaz?",
 ["Hukukun üstünlüğü ilkesinin benimsendiğine","Vergide adaletin amaçlandığına","Yargı güvencesinin getirildiğine","Halkın bütün kesimlerinin güvence altına alındığına","Halkın yönetime katılma hakkı elde ettiğine"],4,
 "Kanun üstünlüğü, gelire göre vergi, yargısız ceza verilmemesi ve Müslüman-gayrimüslim herkesin güvenliği parçada vardır. Halkın yönetime katılması (meclis) I. Meşrutiyet ile gelmiştir; parçada yoktur.");
P(5024,"osm_1920",3,"💸","Osmanlı Devleti, 1854'te Kırım Savaşı'nın giderlerini karşılamak için ilk kez dış borç almıştır. Sonraki yıllarda borçların faizini ödeyebilmek için yeni borçlar alınmış, 1875'te borçların ödenemeyeceği açıklanmıştır. 1881'de kurulan Düyun-u Umumiye, Osmanlı'nın bazı gelirlerine doğrudan el koymuştur.",
 "Bu parçadan aşağıdakilerden hangisi çıkarılamaz?",
 ["Savaşların ekonomiyi olumsuz etkilediği","Borçların zamanla ödenemez hâle geldiği","Dış borçların ekonomik bağımsızlığı zedelediği","Borç sorununun uzun bir süreçte geliştiği","Alınan borçların sanayi yatırımlarında kullanıldığı"],4,
 "Savaş için borç alınması, ödenememe ilanı, gelirlere yabancı bir kurumun el koyması ve 1854-1881 arasındaki süreç parçada vardır. Borçların sanayiye harcandığı bilgisi yoktur.");

/* 🔥 KURTULUŞ SAVAŞI HAZIRLIK */
P(5025,"kh",3,"📢","Amasya Genelgesi'nde \"Vatanın bütünlüğü ve milletin bağımsızlığı tehlikededir. İstanbul Hükûmeti üzerine aldığı sorumluluğun gereğini yerine getirememektedir. Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.\" denilmiştir.",
 "Bu ifadelere göre Amasya Genelgesi ile ilgili aşağıdakilerden hangisi söylenemez?",
 ["Kurtuluş Savaşı'nın gerekçesinin belirtildiği","İstanbul Hükûmeti'nin yetersiz görüldüğü","Milli egemenlik düşüncesine vurgu yapıldığı","Kurtuluşun yönteminin belirtildiği","Manda ve himayenin kabul edildiği"],4,
 "'Vatan tehlikede' gerekçeyi, 'İstanbul Hükûmeti yerine getirememektedir' yetersizliği, 'milletin azim ve kararı' milli egemenliği ve yöntemi gösterir. Milletin kendi kararıyla kurtulması manda düşüncesiyle çelişir.");
P(5026,"kh",2,"🏛️","Erzurum Kongresi bölgesel olarak toplanmasına rağmen aldığı kararlar bütün yurdu ilgilendirmiştir. Kongrede \"Milli sınırlar içinde vatan bir bütündür, parçalanamaz.\" kararı alınmış, manda ve himaye reddedilmiş, Temsil Heyeti seçilmiştir.",
 "Bu parçaya göre Erzurum Kongresi ile ilgili aşağıdakilerden hangisine ulaşılabilir?",
 ["Aldığı kararlarla milli bir nitelik taşıdığına","Bütün yurttan delegelerin katıldığına","TBMM'nin açılmasına karar verdiğine","İstanbul Hükûmeti ile iş birliği yaptığına","Mustafa Kemal'i Başkomutan seçtiğine"],0,
 "Bölgesel toplanıp bütün yurdu ilgilendiren kararlar alması milli niteliğini gösterir. Kongre bölgeseldir; diğer şıklar parçada yoktur.");

/* 🗺️ KURTULUŞ SAVAŞI CEPHELER */
P(5027,"kc",3,"🎖️","Sakarya Meydan Muharebesi'nde Mustafa Kemal \"Hattı müdafaa yoktur, sathı müdafaa vardır. O satıh bütün vatandır.\" emrini vermiştir. 22 gün 22 gece süren savaşın sonunda Yunan ordusu geri çekilmek zorunda kalmıştır. Bu zaferden sonra TBMM, Mustafa Kemal'e Mareşal rütbesi ve Gazi unvanı vermiştir.",
 "Bu parçaya göre aşağıdakilerden hangisi söylenemez?",
 ["Savunma anlayışında değişikliğe gidildiği","Savaşın uzun ve zorlu geçtiği","TBMM'nin Mustafa Kemal'i ödüllendirdiği","Yunan ordusunun ilerleyişinin durdurulduğu","Bu zaferle Mudanya Ateşkes Antlaşması'nın imzalandığı"],4,
 "Sathı müdafaa yeni savunma anlayışını, 22 gün süren savaş zorluğu, Mareşal-Gazi ödülü, Yunan ordusunun çekilmesi ilerleyişin durdurulmasını gösterir. Mudanya, Büyük Taarruz'dan sonra imzalanmıştır.");
P(5028,"kc",2,"🎒","Sakarya Savaşı öncesinde Mustafa Kemal, Başkomutanlık yetkisine dayanarak Tekâlif-i Milliye Emirleri'ni yayımlamıştır. Bu emirlerle halkın elindeki erzak, giyecek ve taşıtların bir kısmına ordu için el konulmuş; her aileden bir kat çamaşır istenmiş; silah ve cephanenin teslim edilmesi istenmiştir.",
 "Bu parçaya göre Tekâlif-i Milliye Emirleri ile aşağıdakilerden hangisinin amaçlandığı söylenebilir?",
 ["Ordunun ihtiyaçlarını halkın desteğiyle karşılamak","Dış borç alarak orduyu güçlendirmek","Saltanatı kaldırmak","İtilaf Devletleri ile barış yapmak","Düzenli orduyu dağıtmak"],0,
 "Erzak, giyecek, taşıt ve silahın orduya verilmesi, ordunun ihtiyaçlarının halkın katkısıyla karşılanmak istendiğini gösterir. Diğer şıklar parçada yoktur.");

/* ⚖️ ATATÜRK İNKILAPLARI */
P(5029,"inkilap",3,"⚖️","1926'da kabul edilen Türk Medeni Kanunu ile resmî nikâh zorunlu hâle getirilmiş, tek eşlilik esası kabul edilmiştir. Kadınlara miras, boşanma ve mahkemede tanıklık gibi konularda erkeklerle eşit haklar tanınmıştır. Bu kanunla aile ve toplum hayatı çağdaş hukuk ilkelerine göre düzenlenmiştir.",
 "Bu parçaya göre Türk Medeni Kanunu ile ilgili aşağıdakilerden hangisine ulaşılamaz?",
 ["Kadın-erkek eşitliğinin hukuken güçlendirildiğine","Aile yapısının düzenlendiğine","Hukuk alanında çağdaşlaşmanın amaçlandığına","Evliliğin devlet güvencesine alındığına","Kadınlara seçme ve seçilme hakkı tanındığına"],4,
 "Miras, boşanma ve tanıklıkta eşitlik, tek eşlilik, çağdaş hukuk ve resmî nikâh parçada vardır. Siyasi haklar (1930, 1933, 1934) Medeni Kanun'la gelmemiştir ve parçada yoktur.");
P(5030,"inkilap",3,"🔤","1 Kasım 1928'de kabul edilen kanunla Latin harflerine dayalı yeni Türk alfabesi kullanılmaya başlanmıştır. Yeni harflerin halka öğretilmesi için Millet Mektepleri açılmış, Mustafa Kemal'e Başöğretmen unvanı verilmiştir. Arap harflerinin Türkçenin seslerini tam karşılayamaması bu değişikliğin nedenlerinden biri olarak gösterilmiştir.",
 "Bu parçadan aşağıdakilerden hangisi çıkarılamaz?",
 ["Okuma yazma oranının artırılmasının amaçlandığı","Yeni alfabenin Türkçenin yapısına daha uygun görüldüğü","Halk eğitimine önem verildiği","Eğitim alanında yenilik yapıldığı","Yeni alfabenin kabulü için halk oylamasına başvurulduğu"],4,
 "Millet Mektepleri halk eğitimini ve okuryazarlığı, ses uyumu gerekçesi alfabenin Türkçeye uygunluğunu gösterir. Halk oylamasından söz edilmez.");

/* ⭐ ATATÜRK İLKELERİ */
P(5031,"ilkeler",3,"🏭","1929 Dünya Ekonomik Bunalımı'nın ardından Türkiye'de özel sektörün yatırımlar için yeterli sermayeye sahip olmadığı görülmüştür. Bunun üzerine devlet, ekonomide düzenleyici ve girişimci bir rol üstlenmiş; Sümerbank ve Etibank kurulmuş, I. Beş Yıllık Sanayi Planı hazırlanmıştır. Bununla birlikte özel girişim tamamen yasaklanmamıştır.",
 "Bu parçaya göre aşağıdakilerden hangisi söylenemez?",
 ["Ekonomik bunalımın devletçiliğe geçişte etkili olduğu","Sermaye birikiminin yetersiz olduğu","Planlı ekonomiye geçildiği","Devletin sanayileşmeye öncülük ettiği","Özel mülkiyetin tamamen kaldırıldığı"],4,
 "Bunalım, sermaye yetersizliği, beş yıllık plan ve devletin girişimciliği parçada vardır. 'Özel girişim tamamen yasaklanmamıştır' ifadesi özel mülkiyetin kaldırılmadığını gösterir.");
P(5032,"ilkeler",2,"⚖️","Atatürk, devletin dinî kurallara göre değil, akıl ve bilime dayalı kurallarla yönetilmesi gerektiğini savunmuştur. Bu doğrultuda halifelik kaldırılmış, eğitim birleştirilmiş, Medeni Kanun kabul edilmiştir. 1937'de laiklik ilkesi anayasaya girmiştir. Laiklik aynı zamanda din ve vicdan özgürlüğünün güvencesi olarak görülmüştür.",
 "Bu parçaya göre laiklik ile ilgili aşağıdakilerden hangisi söylenebilir?",
 ["Hukuk ve eğitim alanındaki düzenlemelerle desteklendiği","Din eğitimini yasakladığı","1924 Anayasası ile kabul edildiği","Yalnızca eğitim alanını kapsadığı","Din ve vicdan özgürlüğünü kısıtladığı"],0,
 "Eğitimin birleştirilmesi ve Medeni Kanun, laikliğin hukuk ve eğitimdeki düzenlemelerle desteklendiğini gösterir. Laiklik 1937'de anayasaya girmiş ve özgürlüğün güvencesi sayılmıştır.");

/* 🌐 ATATÜRK DÖNEMİ DIŞ POLİTİKA */
P(5033,"dis",3,"⚓","1936'da imzalanan Montrö Boğazlar Sözleşmesi ile Lozan'da kurulan uluslararası Boğazlar Komisyonu kaldırılmış, yetkileri Türkiye'ye devredilmiştir. Türkiye, Boğazlar bölgesine asker yerleştirme hakkı kazanmıştır. Türkiye'nin savaşta olması ya da kendini savaş tehlikesi altında görmesi durumunda geçişleri düzenleme yetkisi de Türkiye'ye bırakılmıştır.",
 "Bu parçaya göre Montrö Boğazlar Sözleşmesi ile aşağıdakilerden hangisi gerçekleşmemiştir?",
 ["Boğazlar üzerinde Türk egemenliği güçlenmiştir","Lozan'ın Boğazlarla ilgili bazı hükümleri değiştirilmiştir","Türkiye'nin ulusal güvenliği güçlenmiştir","Boğazlarda askerî önlem alma hakkı elde edilmiştir","Boğazlar bütün gemilerin geçişine kapatılmıştır"],4,
 "Komisyonun kaldırılması egemenliği ve Lozan'ın değişmesini, asker yerleştirme güvenliği ve askerî önlemi gösterir. Geçiş tamamen kapatılmamış, düzenleme yetkisi Türkiye'ye verilmiştir.");
P(5034,"dis",3,"🗺️","Atatürk, Hatay meselesini \"şahsi meselem\" olarak nitelendirmiştir. Sorun Milletler Cemiyeti'ne götürülmüş, 1938'de Hatay Devleti kurulmuştur. Hatay Meclisi 1939'da Türkiye'ye katılma kararı almıştır. Sorun savaşa başvurulmadan, diplomasi yoluyla çözülmüştür.",
 "Bu parçaya göre Hatay sorununun çözümü ile ilgili aşağıdakilerden hangisine ulaşılamaz?",
 ["Atatürk'ün soruna büyük önem verdiğine","Uluslararası kuruluşlara başvurulduğuna","Barışçı yöntemlerin kullanıldığına","Sorunun aşamalı olarak çözüldüğüne","Sorunun Lozan Barış Antlaşması'nda çözüldüğüne"],4,
 "'Şahsi meselem' önemi, Milletler Cemiyeti uluslararası başvuruyu, diplomasi barışçı yöntemi, 1938 devlet-1939 katılım aşamalı çözümü gösterir. Sorun Lozan'da çözülememiştir.");

/* 💣 DÜNYA SAVAŞLARI ARASI VE II. DÜNYA SAVAŞI */
P(5035,"dunya_savas",3,"📉","1929'da ABD'de başlayan ekonomik bunalım kısa sürede bütün dünyayı etkilemiştir. İşsizliğin ve yoksulluğun arttığı Almanya'da Hitler, Versay Antlaşması'nın ağır şartlarını ve ekonomik sıkıntıları kullanarak halkın desteğini kazanmış ve 1933'te iktidara gelmiştir.",
 "Bu parçadan aşağıdakilerden hangisine ulaşılamaz?",
 ["Ekonomik sorunların siyasi gelişmeleri etkilediğine","Bunalımın küresel bir nitelik taşıdığına","Versay Antlaşması'nın Almanya'da tepki gördüğüne","Ekonomik bunalımın Almanya'yı da etkilediğine","Hitler'in iktidara askerî darbeyle geldiğine"],4,
 "Bunalımın dünyayı etkilemesi, Almanya'daki işsizlik ve Hitler'in halk desteğini Versay'a tepkiyle kazanması diğer şıkları destekler. Halk desteğiyle iktidara gelmek darbeyle çelişir.");
P(5036,"dunya_savas",3,"🍞","II. Dünya Savaşı sırasında Türkiye savaşa girmemek için büyük çaba göstermiştir. Ancak savaşa girme ihtimaline karşı ordu sürekli hazır tutulmuş, bu da ekonomiye ağır bir yük getirmiştir. Karaborsacılığın ve fiyat artışlarının önüne geçmek için Milli Korunma Kanunu çıkarılmış, ekmek karneye bağlanmıştır.",
 "Bu parçaya göre II. Dünya Savaşı yıllarında Türkiye ile ilgili aşağıdakilerden hangisi söylenemez?",
 ["Savaşın dışında kalmaya çalışıldığı","Ekonomik sıkıntılar yaşandığı","Devletin ekonomiye müdahale ettiği","Savunma giderlerinin yüksek olduğu","Savaşın başından itibaren Müttefiklerin yanında çatıştığı"],4,
 "Savaşa girmeme çabası, ekonomiye yük, Milli Korunma Kanunu ve ordunun hazır tutulması parçada vardır. Türkiye savaşa fiilen girmemiştir; şık parçayla çelişir.");

/* 🌐 ÇAĞDAŞ TÜRK VE DÜNYA TARİHİ */
P(5037,"cagdas",2,"🛡","II. Dünya Savaşı'ndan sonra Sovyetler Birliği'nin Boğazlar ve Doğu Anadolu üzerindeki talepleri Türkiye'yi Batı'ya yakınlaştırmıştır. Türkiye, Truman Doktrini ve Marshall Planı'ndan yararlanmış, Kore Savaşı'na asker göndermiş ve 1952'de NATO'ya üye olmuştur.",
 "Bu parçaya göre aşağıdakilerden hangisi söylenebilir?",
 ["Türkiye'nin dış politikasında güvenlik kaygısının etkili olduğu","Türkiye'nin Sovyetlerle ittifak kurduğu","Türkiye'nin Varşova Paktı'na katıldığı","Kore Savaşı'nın Türkiye topraklarında yapıldığı","Türkiye'nin savaş sonrasında tarafsız kaldığı"],0,
 "Sovyet talepleri karşısında Batı'ya yakınlaşma ve NATO üyeliği, güvenlik kaygısını gösterir. Diğer şıklar parçayla çelişir.");
P(5038,"cagdas",3,"🧱","1989'da Berlin Duvarı'nın yıkılmasından sonra Doğu Avrupa'daki komünist yönetimler birer birer çökmüştür. 1990'da Almanya birleşmiş, 1991'de Varşova Paktı dağılmış ve Sovyetler Birliği sona ermiştir. Bu gelişmelerle iki kutuplu dünya düzeni değişmiştir.",
 "Bu parçaya göre aşağıdakilerden hangisine ulaşılamaz?",
 ["Doğu Bloku'nun dağıldığına","Uluslararası dengelerin değiştiğine","Bölünmüş bir devletin yeniden birleştiğine","Soğuk Savaş'ın iki kutuplu düzeninin sona erdiğine","NATO'nun da Varşova Paktı ile birlikte dağıldığına"],4,
 "Komünist yönetimlerin çökmesi, Almanya'nın birleşmesi ve iki kutuplu düzenin değişmesi parçada vardır. NATO'nun dağıldığı bilgisi yoktur; NATO hâlâ vardır.");
})();
