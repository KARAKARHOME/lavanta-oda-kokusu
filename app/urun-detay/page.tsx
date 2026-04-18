'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Package, Droplet, Wind, Clock, Shield, Award, CheckCircle2, AlertCircle, Info, ShoppingBag, Beaker, Thermometer, Ruler, Weight, Leaf, Sparkles, Star } from 'lucide-react';

export default function ProductDetail() {
  const technicalSpecs = [
    { icon: Droplet, label: 'Hacim', value: '100ml', detail: 'Cam şişe içinde' },
    { icon: Package, label: 'Çubuk Sayısı', value: '8 Adet', detail: 'Premium bambu' },
    { icon: Clock, label: 'Kullanım Süresi', value: '90-120 Gün', detail: 'Ortalama 3-4 ay' },
    { icon: Wind, label: 'Koku Ailesi', value: 'Çiçeksi-Otsu', detail: 'Lavanta dominant' },
    { icon: Ruler, label: 'Çubuk Uzunluğu', value: '25 cm', detail: 'Standart boy' },
    { icon: Weight, label: 'Ağırlık', value: '180g', detail: 'Ambalaj dahil' },
    { icon: Thermometer, label: 'Saklama', value: '15-25°C', detail: 'Oda sıcaklığı' },
    { icon: Beaker, label: 'pH Değeri', value: '6.5-7.0', detail: 'Nötr formül' }
  ];

  const ingredients = [
    { 
      name: 'Lavandula Angustifolia Oil', 
      percentage: '%15', 
      cas: 'CAS 8000-28-0',
      description: 'Provence bölgesinden ithal edilen saf lavanta esansı. Buhar distilasyon yöntemiyle elde edilir.',
      properties: 'Antiseptik, antibakteriyel, rahatlatıcı özelliklere sahiptir.'
    },
    { 
      name: 'Dipropylene Glycol', 
      percentage: '%75', 
      cas: 'CAS 25265-71-8',
      description: 'Taşıyıcı sıvı olarak kullanılır. Kokuyu eşit şekilde dağıtır.',
      properties: 'Düşük toksisiteli, cilt dostu, buharlaşma hızını kontrol eder.'
    },
    { 
      name: 'Parfüm Bileşenleri', 
      percentage: '%8', 
      cas: 'Karışım',
      description: 'Doğal koku bileşenleri ve fiksatifler. Koku kalıcılığını artırır.',
      properties: 'IFRA standartlarına uygun, alerjen testlerinden geçmiştir.'
    },
    { 
      name: 'Stabilizatörler', 
      percentage: '%2', 
      cas: 'Karışım',
      description: 'Ürün stabilitesini sağlar. Renk ve koku değişimini önler.',
      properties: 'Gıda sınıfı katkı maddeleri, güvenli formül.'
    }
  ];

  const certifications = [
    { name: 'ISO 9001', description: 'Kalite Yönetim Sistemi' },
    { name: 'ISO 14001', description: 'Çevre Yönetim Sistemi' },
    { name: 'IFRA Uyumlu', description: 'Uluslararası Parfüm Standartları' },
    { name: 'Dermatolojik Test', description: 'Cilt uyumluluk testleri' },
    { name: 'Vegan Sertifika', description: 'Hayvansal içerik yok' },
    { name: 'Cruelty-Free', description: 'Hayvan testi yapılmamıştır' }
  ];

  const usageInstructions = [
    {
      step: '1',
      title: 'Ambalajı Açın',
      details: 'Ürünü dış ambalajından çıkarın. Şişenin üzerindeki koruyucu folyoyu soyun. Kapağı saat yönünün tersine çevirerek açın. İçerideki güvenlik tıpasını çıkarın. Şişeyi düz ve stabil bir yüzeye yerleştirin.',
      warning: 'Açarken şişeyi devirmemeye dikkat edin. Sıvı dökülmesi halinde hemen temizleyin.'
    },
    {
      step: '2',
      title: 'Bambu Çubukları Yerleştirin',
      details: 'Tüm 8 bambu çubuğu şişeye takın. Çubukların yarısı sıvıya batmalıdır. Eşit aralıklarla dizilmesine özen gösterin. Çubuklar dik durmalı, eğik olmamalıdır. İlk yerleştirmeden sonra 2-3 saat bekleyin.',
      warning: 'Çubukları çok hızlı hareket ettirmeyin. Sıvı sıçraması olabilir.'
    },
    {
      step: '3',
      title: 'Koku Yoğunluğunu Ayarlayın',
      details: 'Güçlü koku için 8 çubuğun tamamını kullanın (15-20m² alan için). Orta yoğunluk için 5-6 çubuk yeterlidir (10-15m² alan için). Hafif koku tercih ediyorsanız 3-4 çubuk bırakın (5-10m² alan için). Fazla çubukları temiz bir kapta saklayın.',
      warning: 'Küçük odalarda az çubuk kullanın. Aşırı yoğunluk baş ağrısına neden olabilir.'
    },
    {
      step: '4',
      title: 'Düzenli Bakım Yapın',
      details: 'Haftada bir kez çubukları ters çevirin. Bu işlem koku yayılımını canlandırır. Şişe seviyesini kontrol edin. Çubukları tozdan temiz tutun. Gerekirse nemli bezle silin. Ayda bir çubukları yenileyin.',
      warning: 'Çubukları çevirirken eldiven kullanın. Sıvı elle temas etmemelidir.'
    },
    {
      step: '5',
      title: 'Doğru Konumlandırma',
      details: 'Şişeyi göz hizasının altına yerleştirin. Hava akımının olduğu noktalarda daha etkilidir. Pencere kenarı veya kapı girişi ideal konumdur. Klima veya vantilatör yakınına koymayın. Direkt güneş ışığından uzak tutun.',
      warning: 'Sıcak yüzeylere koymayın. Radyatör, fırın gibi ısı kaynaklarından uzak tutun.'
    },
    {
      step: '6',
      title: 'Güvenlik Önlemleri',
      details: 'Çocukların erişemeyeceği yerlere koyun. Evcil hayvanlardan uzak tutun. Devrilmeye karşı sabit yüzeylere yerleştirin. Yanıcı maddelerden uzakta bulundurun. Oda sıcaklığında saklayın (15-25°C). Dondurmayın veya ısıtmayın.',
      warning: 'Yutmayın. Göz ile temasından kaçının. Yangın tehlikesi vardır.'
    }
  ];

  const roomRecommendations = [
    {
      room: 'Yatak Odası',
      area: '12-16 m²',
      sticks: '4-5 Çubuk',
      placement: 'Komodin üzeri veya pencere kenarı',
      benefit: 'Derin uyku için ideal ortam yaratır. Rahatlatıcı atmosfer sağlar. Uyku kalitesini %20 artırır.',
      timing: 'Yatmadan 30 dakika önce çubukları çevirin. Sabah havalandırın.',
      notes: 'Gece lambası yakınına koymayın. Isı koku yayılımını hızlandırır.'
    },
    {
      room: 'Oturma Salonu',
      area: '20-30 m²',
      sticks: '6-8 Çubuk',
      placement: 'Sehpa üzeri veya konsol',
      benefit: 'Konuk ağırlama zarafeti katar. Ferah ortam oluşturur. Pozitif enerji yayar.',
      timing: 'Misafir gelmeden 1 saat önce hazırlayın. Düzenli çubuk çevirme yapın.',
      notes: 'Yüksek tavanlı salonlarda ek çubuk kullanın. Havalandırma önemlidir.'
    },
    {
      room: 'Çalışma Odası',
      area: '10-15 m²',
      sticks: '3-4 Çubuk',
      placement: 'Masa köşesi veya raf',
      benefit: 'Odaklanma desteği verir. Verimlilik artışı sağlar. Konsantrasyonu %15 güçlendirir.',
      timing: 'Çalışma başlamadan 15 dakika önce hazırlayın. Mola aralarında çevirin.',
      notes: 'Bilgisayar yakınına koymayın. Elektronik cihazlardan 50cm uzakta tutun.'
    },
    {
      room: 'Banyo',
      area: '5-8 m²',
      sticks: '2-3 Çubuk',
      placement: 'Lavabo kenarı veya raf',
      benefit: 'Spa atmosferi yaratır. Nem dengesini düzenler. Kötü kokuları nötralize eder.',
      timing: 'Duş sonrası en etkilidir. Nemli ortamda koku yayılımı artar.',
      notes: 'Su sıçramasına karşı koruyun. Cam kapaklı dolaplarda saklamayın.'
    },
    {
      room: 'Ofis/İşyeri',
      area: '15-25 m²',
      sticks: '5-6 Çubuk',
      placement: 'Resepsiyon masası veya bekleme alanı',
      benefit: 'Profesyonel ortam oluşturur. Stres seviyesini düşürür. Müşteri memnuniyetini artırır.',
      timing: 'İş günü başlamadan hazırlayın. Öğle arası yenileyin.',
      notes: 'Klimalı ortamlarda daha sık çubuk çevirin. Havalandırma sistemine dikkat edin.'
    },
    {
      room: 'Yoga/Meditasyon Alanı',
      area: '10-20 m²',
      sticks: '4-6 Çubuk',
      placement: 'Pratik alanının köşesi',
      benefit: 'Meditasyon derinliği sağlar. Zihinsel sakinlik verir. Nefes egzersizlerini destekler.',
      timing: 'Pratik 20 dakika önce hazırlayın. Sessiz ortamda etkisi artar.',
      notes: 'Mum veya tütsü ile birlikte kullanmayın. Tek koku kaynağı olmalıdır.'
    }
  ];

  const warnings = [
    {
      icon: AlertCircle,
      title: 'Yutma Tehlikesi',
      text: 'Ürünü yutmayın. Yutulması halinde hemen doktora başvurun. Kusturmaya çalışmayın. Bol su için. Zehir danışma merkezini arayın: 114.'
    },
    {
      icon: AlertCircle,
      title: 'Göz Teması',
      text: 'Göz ile temasından kaçının. Temas halinde 15 dakika bol su ile yıkayın. Lens kullanıyorsanız çıkarın. Göz doktoruna başvurun.'
    },
    {
      icon: AlertCircle,
      title: 'Cilt Teması',
      text: 'Cilde temas etmemelidir. Temas halinde sabunlu su ile yıkayın. Kızarıklık olursa soğuk kompres uygulayın. Tahriş devam ederse doktora gidin.'
    },
    {
      icon: AlertCircle,
      title: 'Yanıcı Madde',
      text: 'Yanıcı sıvıdır. Ateş kaynaklarından uzak tutun. Sigara içilen ortamlarda kullanmayın. Isı kaynaklarına yaklaştırmayın. Yangın söndürücü bulundurun.'
    },
    {
      icon: AlertCircle,
      title: 'Çocuk Güvenliği',
      text: 'Çocukların erişemeyeceği yerlerde saklayın. 3 yaş altı bebekler için pediatrist görüşü alın. Çocuk kilidi olan dolaplarda muhafaza edin.'
    },
    {
      icon: AlertCircle,
      title: 'Evcil Hayvanlar',
      text: 'Kedi ve köpeklerden uzak tutun. Kuşlar için toksik olabilir. Akvaryum yakınına koymayın. Veteriner tavsiyesi alın.'
    },
    {
      icon: AlertCircle,
      title: 'Hamilelik',
      text: 'Hamilelik döneminde doktorunuza danışın. İlk trimesterde dikkatli olun. Aşırı maruziyetten kaçının. Havalandırma yapın.'
    },
    {
      icon: AlertCircle,
      title: 'Alerjik Reaksiyon',
      text: 'Lavantaya karşı bilinen alerjiniz varsa kullanmayın. İlk kullanımda küçük alanda test edin. Nefes darlığı hissederseniz kullanmayı bırakın.'
    }
  ];

  const faqs = [
    {
      question: 'Lavanta kokusu alerjiye neden olur mu?',
      answer: 'Ürünümüz dermatolojik testlerden geçmiştir ve IFRA standartlarına uygundur. Ancak lavantaya karşı bilinen alerjiniz varsa kullanmayın. İlk kullanımda küçük bir alanda test edin. Nefes darlığı, baş ağrısı veya cilt tahrişi gibi belirtiler görürseniz kullanmayı durdurun. Alerji testleri yaptırmanızı öneririz.'
    },
    {
      question: 'Hamilelik döneminde kullanılabilir mi?',
      answer: 'Lavanta genellikle güvenli kabul edilir ancak hamilelik döneminde doktorunuza danışmanızı şiddetle öneririz. Özellikle ilk trimesterde dikkatli olun. Aşırı maruziyetten kaçının. Günde 2-3 saat kullanım yeterlidir. Oda düzenli havalandırılmalıdır. Herhangi bir rahatsızlık hissederseniz kullanmayı bırakın.'
    },
    {
      question: 'Çocuk odalarında kullanılabilir mi?',
      answer: 'Evet, 3 yaş üzeri çocuklar için kullanılabilir. Ancak şişeyi çocukların kesinlikle erişemeyeceği yüksek bir yere yerleştirin. 3 yaş altı bebekler için pediatrist görüşü alın. Çocuk odasında 2-3 çubuk yeterlidir. Gece uyku saatlerinde çubuk sayısını azaltın. Düzenli havalandırma yapın.'
    },
    {
      question: 'Koku ne kadar süre kalır?',
      answer: 'Normal kullanımda 90-120 gün (3-4 ay) dayanır. Kullanım süresi şu faktörlere bağlıdır: Oda büyüklüğü (büyük odalar daha hızlı tüketir), çubuk sayısı (fazla çubuk hızlı tüketim), havalandırma durumu (sık havalandırma tüketimi artırır), oda sıcaklığı (sıcak ortam buharlaşmayı hızlandırır). Şişe seviyesini düzenli kontrol edin.'
    },
    {
      question: 'Şişe bitince ne yapmalıyım?',
      answer: 'Cam şişeyi geri dönüşüm kutusuna atın. Bambu çubukları kompost yapabilir veya çöpe atabilirsiniz. Kapağı plastik geri dönüşüme verin. Yeni ürün satın alarak aynı şişeyi yeniden kullanabilirsiniz (şişeyi iyice yıkayıp kurutun). Çevre dostu bertaraf yöntemlerini tercih edin.'
    },
    {
      question: 'Diğer kokularla karıştırılabilir mi?',
      answer: 'Aynı anda farklı kokular kullanmak önerilmez. Kokular birbirini baskılayabilir ve istenmeyen karışımlar oluşturabilir. Tek koku kullanımı daha etkilidir. Koku değiştirmek istiyorsanız önce odayı 24 saat havalandırın. Eski koku tamamen kaybolmalıdır. Sonra yeni kokuyu kullanmaya başlayın.'
    },
    {
      question: 'Sıvı biterse çubukları tekrar kullanabilir miyim?',
      answer: 'Hayır, bambu çubuklar tek kullanımlıktır. Sıvı bittiğinde çubuklar kurumuş ve gözenekleri tıkanmış olur. Yeni ürün aldığınızda yeni çubuklar gelir. Eski çubukları atmayı unutmayın. Yeni çubuklar daha etkili koku yayılımı sağlar.'
    },
    {
      question: 'Ürün donabilir mi?',
      answer: 'Hayır, ürünü dondurmayın. 0°C altında formül bozulabilir. Kristalleşme olabilir. Koku özellikleri kaybolur. Şişe çatlayabilir. Oda sıcaklığında (15-25°C) saklayın. Buzdolabına koymayın. Kışın soğuk odalarda kullanmayın.'
    },
    {
      question: 'Ürünün son kullanma tarihi var mı?',
      answer: 'Açılmamış ürünler 24 ay dayanır. Üretim tarihi şişe üzerinde belirtilmiştir. Açıldıktan sonra 3-4 ay içinde tüketin. Eski ürünlerde koku yoğunluğu azalır. Renk değişimi olabilir. Bulanıklık görürseniz kullanmayın. Taze ürün kullanımı önerilir.'
    },
    {
      question: 'Toplu alımda indirim var mı?',
      answer: 'Evet, 3 adet ve üzeri alımlarda %10 indirim uygulanır. 5 adet ve üzeri alımlarda %15 indirim. 10 adet ve üzeri kurumsal alımlarda %20 indirim. Özel fiyat teklifi için iletişime geçin. Toplu siparişlerde ücretsiz kargo.'
    }
  ];

  const maintenanceTips = [
    {
      title: 'Haftalık Bakım',
      tasks: ['Çubukları ters çevirin', 'Şişe seviyesini kontrol edin', 'Çubukları tozdan temizleyin', 'Yerleşim yerini kontrol edin']
    },
    {
      title: 'Aylık Bakım',
      tasks: ['Çubukları yenileyin', 'Şişeyi silin', 'Konumu değiştirin', 'Koku yoğunluğunu değerlendirin']
    },
    {
      title: 'Mevsimsel Bakım',
      tasks: ['Çubuk sayısını ayarlayın', 'Oda sıcaklığını kontrol edin', 'Havalandırma sıklığını değiştirin', 'Yeni ürün planlayın']
    }
  ];

  return (
    <div className="pt-20 lg:pt-24">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="sticky top-24"
            >
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 lg:p-12 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <Image
                    src="/urun.webp"
                    alt="Lavanta Çubuklu Oda Kokusu 100ml"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain mb-6"
                    priority
                  />
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Lavanta Çubuklu Oda Kokusu</h2>
                    <p className="text-gray-600 mb-4">100ml Premium Şişe - 8 Bambu Çubuk</p>
                    <div className="flex items-center justify-center space-x-2 mb-6">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(4.9/5 - 127 değerlendirme)</span>
                    </div>
                    <Link
                      href="https://www.karakarhome.com.tr/lavanta-oda-kokusu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all w-full justify-center"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      <span>Hemen Sipariş Ver</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Teknik Özellikler ve Detaylar
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Lavanta Çubuklu Oda Kokusu</strong>, <em>bilimsel formülasyon</em> ve <em>premium malzemeler</em> kullanılarak üretilir. 
                  Her detay <u>mükemmellik</u> için tasarlanmıştır.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Teknik Spesifikasyonlar</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {technicalSpecs.map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-purple-50 rounded-xl"
                    >
                      <spec.icon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-sm text-gray-600">{spec.label}</div>
                        <div className="font-bold text-gray-900">{spec.value}</div>
                        <div className="text-xs text-gray-500">{spec.detail}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">İçerik Analizi</h3>
                <div className="space-y-4">
                  {ingredients.map((ingredient, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-4 border-purple-500 pl-4 py-2"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900">{ingredient.name}</h4>
                        <span className="text-purple-600 font-bold">{ingredient.percentage}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-1">{ingredient.cas}</p>
                      <p className="text-sm text-gray-700 mb-1">{ingredient.description}</p>
                      <p className="text-sm text-gray-600 italic">{ingredient.properties}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Sertifikalar ve Standartlar</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm"
                    >
                      <Award className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-sm text-gray-900">{cert.name}</div>
                        <div className="text-xs text-gray-600">{cert.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Detaylı <span className="text-gradient">Kullanım Talimatları</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <strong>Adım adım</strong> kullanım rehberi ile <em>maksimum verim</em> alın.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usageInstructions.map((instruction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-lg"
              >
                <div className="text-5xl font-bold text-purple-200 mb-3">{instruction.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{instruction.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-4">{instruction.details}</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-yellow-800">{instruction.warning}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oda Tiplerine Göre <span className="text-gradient">Kullanım Önerileri</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {roomRecommendations.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-purple-700 mb-2">{room.room}</h3>
                    <p className="text-sm text-gray-600">Alan: {room.area}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Çubuk Sayısı</p>
                    <p className="font-bold text-gray-900">{room.sticks}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600 mb-1">Yerleştirme</p>
                    <p className="font-semibold text-gray-800">{room.placement}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{room.benefit}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-xs font-semibold text-purple-700 mb-1">Zamanlama</p>
                    <p className="text-sm text-gray-700">{room.timing}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs font-semibold text-blue-700 mb-1">Notlar</p>
                    <p className="text-sm text-gray-700">{room.notes}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Uyarılar ve <span className="text-gradient">Güvenlik Önlemleri</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {warnings.map((warning, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-red-50 border-l-4 border-red-400 rounded-xl p-4"
                >
                  <div className="flex items-start space-x-3">
                    <warning.icon className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-red-900 mb-2">{warning.title}</h3>
                      <p className="text-sm text-red-800 leading-relaxed">{warning.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                  <span className="text-purple-600 mr-2">S:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-6">
                  <span className="text-purple-600 font-bold mr-2">C:</span>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bakım <span className="text-gradient">Takvimi</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {maintenanceTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tip.title}</h3>
                <ul className="space-y-2">
                  {tip.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Hemen Sipariş Verin
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              <strong>Premium kalite</strong> lavanta çubuklu oda kokusu ile <em>yaşam alanlarınızı</em> dönüştürün. 
              <u>Ücretsiz kargo</u> ve <u>hızlı teslimat</u> garantisi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://www.karakarhome.com.tr/lavanta-oda-kokusu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-purple-700 font-bold rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all text-lg"
              >
                <ShoppingBag className="w-6 h-6" />
                <span>Sipariş Ver</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center space-x-2 px-10 py-5 bg-purple-700 text-white font-bold rounded-full border-2 border-white hover:bg-purple-800 transition-all text-lg"
              >
                <span>Ana Sayfaya Dön</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
