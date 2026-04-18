'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Leaf, Heart, ShoppingBag, CheckCircle2, Star, Wind, Droplets, Sun, Moon, Brain, Zap, Shield, Award, Package, TrendingUp } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Leaf,
      title: 'Doğal Lavanta Esansı',
      description: 'Provence bölgesinden ithal edilen saf lavanta yağı kullanılır. Sentetik katkı maddeleri içermez.'
    },
    {
      icon: Package,
      title: 'Bambu Çubuklar',
      description: 'Sürdürülebilir bambu çubuklar kokuyu eşit şekilde dağıtır. Çevre dostu üretim süreciyle hazırlanır.'
    },
    {
      icon: Clock,
      title: '3-4 Ay Kullanım',
      description: 'Özel formülasyon sayesinde uzun süre dayanır. Ekonomik ve pratik çözüm sunar.'
    },
    {
      icon: Heart,
      title: 'Terapötik Etki',
      description: 'Aromaterapi prensiplerine uygun üretilir. Ruh halini olumlu yönde etkiler.'
    },
    {
      icon: Shield,
      title: 'Güvenli Formül',
      description: 'Alkol, paraben ve ftalat içermez. Dermatolojik testlerden başarıyla geçmiştir.'
    },
    {
      icon: Award,
      title: 'Premium Kalite',
      description: 'Cam şişe ve kaliteli malzemeler kullanılır. Lüks ambalaj tasarımı mevcuttur.'
    }
  ];

  const benefits = [
    {
      icon: Moon,
      title: 'Uyku Kalitesini Artırır',
      description: 'Lavanta, melatonin salgılanmasını destekler. Uykuya dalma süresini kısaltır. Derin uyku fazlarını uzatır. Gece boyunca kesintisiz dinlenme sağlar. Sabah dinç uyanmanıza yardımcı olur.'
    },
    {
      icon: Brain,
      title: 'Zihinsel Berraklık',
      description: 'Konsantrasyon seviyesini yükseltir. Hafıza fonksiyonlarını güçlendirir. Zihinsel yorgunluğu azaltır. Öğrenme kapasitesini artırır. Karar verme süreçlerini hızlandırır.'
    },
    {
      icon: Wind,
      title: 'Hava Kalitesi',
      description: 'Ortamdaki kötü kokuları nötralize eder. Bakterilere karşı doğal koruma sağlar. Nem dengesini düzenler. Taze hava hissi verir. Alerjenleri minimize eder.'
    },
    {
      icon: Heart,
      title: 'Stres Azaltma',
      description: 'Kortizol hormonunu dengeler. Kas gerginliğini çözer. Kalp atış hızını normale getirir. Kan basıncını düşürür. Genel rahatlama hissi yaratır.'
    },
    {
      icon: Zap,
      title: 'Enerji Dengesi',
      description: 'Yorgunluk hissini giderir. Motivasyonu artırır. Fiziksel performansı destekler. Günlük aktivitelerde canlılık sağlar. Pozitif enerji yayar.'
    },
    {
      icon: Sparkles,
      title: 'Baş Ağrısı Rahatlaması',
      description: 'Migren şiddetini azaltır. Sinüs baskısını hafifletir. Gerginlik baş ağrılarını önler. Doğal ağrı kesici etki gösterir. İlaç kullanımını azaltabilir.'
    }
  ];

  const bambuInfo = [
    {
      title: 'Neden Bambu Çubuk?',
      content: 'Bambu, gözenekli yapısı sayesinde sıvıyı mükemmel şekilde emer. Plastik veya metal çubuklara göre çok daha etkilidir. Doğal lifler kokuyu eşit dağıtır. Çevre dostu olması ek avantaj sağlar. Sürdürülebilir kaynaklardan temin edilir.'
    },
    {
      title: 'Çubuk Sayısı ve Koku Yoğunluğu',
      content: 'Ürünümüz 8 adet bambu çubuk içerir. Tüm çubukları kullanarak güçlü koku elde edersiniz. 4-5 çubuk orta yoğunlukta koku verir. 2-3 çubuk hafif esinti sağlar. İhtiyacınıza göre ayarlama yapabilirsiniz.'
    },
    {
      title: 'Çubukların Bakımı',
      content: 'Haftada bir kez çubukları ters çevirin. Bu işlem koku yayılımını canlandırır. Tozlanmayı önlemek için düzenli kontrol edin. Gerekirse nemli bezle silin. Çubuklar yıprandığında yenileyin.'
    },
    {
      title: 'Çubuk Yerleştirme Tekniği',
      content: 'Çubukları şişeye dik açıyla yerleştirin. Eşit aralıklarla dizilmesine dikkat edin. İlk yerleştirmeden sonra 2-3 saat bekleyin. Çubuklar sıvıyı emerken sabırlı olun. Sonrasında koku yavaşça yayılmaya başlar.'
    }
  ];

  const usageGuide = [
    {
      step: '1',
      title: 'Ürünü Açın',
      description: 'Ambalajı dikkatlice çıkarın. Şişenin kapağını saat yönünün tersine çevirerek açın. İçindeki koruyucu tıpayı çıkarın. Şişeyi düz bir yüzeye yerleştirin. Çevrede hava akımı olduğundan emin olun.'
    },
    {
      step: '2',
      title: 'Çubukları Yerleştirin',
      description: 'Tüm bambu çubukları şişeye takın. Çubukların yarısı sıvıya batmalıdır. Eşit aralıklarla dizilmesine özen gösterin. Çubuklar dik durmalıdır. İlk 2-3 saat bekleme süresi gerekir.'
    },
    {
      step: '3',
      title: 'Kokuyu Ayarlayın',
      description: 'Güçlü koku için 8 çubuğun tamamını kullanın. Orta yoğunluk için 5-6 çubuk yeterlidir. Hafif koku tercih ediyorsanız 3-4 çubuk bırakın. Fazla çubukları saklayın. İstediğiniz zaman ekleyebilirsiniz.'
    },
    {
      step: '4',
      title: 'Düzenli Bakım',
      description: 'Haftada bir çubukları ters çevirin. Bu işlem koku yoğunluğunu artırır. Şişe seviyesini kontrol edin. Çubukları temiz tutun. Gerekirse yeni çubuk ekleyin.'
    },
    {
      step: '5',
      title: 'Doğru Konumlandırma',
      description: 'Şişeyi göz hizasının altına yerleştirin. Hava akımının olduğu noktalarda daha etkilidir. Pencere kenarı ideal konumdur. Kapı girişleri de uygundur. Direkt güneş ışığından uzak tutun.'
    },
    {
      step: '6',
      title: 'Güvenlik Önlemleri',
      description: 'Çocukların erişemeyeceği yerlere koyun. Evcil hayvanlardan uzak tutun. Devrilmeye karşı sabit yüzeylere yerleştirin. Yanıcı maddelerden uzakta bulundurun. Oda sıcaklığında saklayın.'
    }
  ];

  const roomTypes = [
    {
      room: 'Yatak Odası',
      size: '12-16 m²',
      sticks: '4-5 Çubuk',
      benefit: 'Derin uyku için ideal ortam yaratır. Rahatlatıcı atmosfer sağlar.',
      tips: 'Yatmadan 30 dakika önce çubukları çevirin. Komodinin üzerine yerleştirin.'
    },
    {
      room: 'Oturma Salonu',
      size: '20-30 m²',
      sticks: '6-8 Çubuk',
      benefit: 'Konuk ağırlama zarafeti katar. Ferah ortam oluşturur.',
      tips: 'Sehpanın üzerine koyun. Havalandırma yakınında konumlandırın.'
    },
    {
      room: 'Çalışma Odası',
      size: '10-15 m²',
      sticks: '3-4 Çubuk',
      benefit: 'Odaklanma desteği verir. Verimlilik artışı sağlar.',
      tips: 'Masanın köşesine yerleştirin. Hafif koku yoğunluğu tercih edin.'
    },
    {
      room: 'Banyo',
      size: '5-8 m²',
      sticks: '2-3 Çubuk',
      benefit: 'Spa atmosferi yaratır. Nem dengesini düzenler.',
      tips: 'Lavabo kenarına koyun. Nemli ortamda daha etkilidir.'
    },
    {
      room: 'Ofis',
      size: '15-25 m²',
      sticks: '5-6 Çubuk',
      benefit: 'Profesyonel ortam oluşturur. Stres seviyesini düşürür.',
      tips: 'Resepsiyon masasına yerleştirin. İlk izlenimi güçlendirir.'
    },
    {
      room: 'Yoga/Meditasyon Alanı',
      size: '10-20 m²',
      sticks: '4-6 Çubuk',
      benefit: 'Meditasyon derinliği sağlar. Zihinsel sakinlik verir.',
      tips: 'Pratik alanının köşesine koyun. Sessiz ortamda etkisi artar.'
    }
  ];

  const lavenderFacts = [
    {
      title: 'Lavanta Tarihçesi',
      text: 'Lavanta, 2500 yıldır kullanılmaktadır. Eski Mısırlılar mumyalama sürecinde lavanta yağı kullanırdı. Romalılar hamamlarına lavanta eklerdi. Orta Çağ\'da manastırlarda yetiştirilirdi. Kraliyet saraylarında parfüm olarak tercih edilirdi. Günümüzde aromaterapi\'nin vazgeçilmezidir.'
    },
    {
      title: 'Bilimsel Araştırmalar',
      text: 'Yapılan çalışmalar lavantanın etkisini kanıtlamıştır. Uyku kalitesini %20 artırdığı gözlemlenmiştir. Anksiyete seviyesini %15 düşürdüğü tespit edilmiştir. Baş ağrısı şiddetini %30 azalttığı belirlenmiştir. Konsantrasyon süresini %25 uzattığı ölçülmüştür. Bilimsel dergilerde yayınlanmış makaleler mevcuttur.'
    },
    {
      title: 'Lavanta Çeşitleri',
      text: 'Dünyada 45\'ten fazla lavanta türü bulunur. Lavandula Angustifolia en kaliteli olanıdır. Provence lavantası dünya çapında ünlüdür. Yüksek rakımlarda yetişen lavanta daha etkilidir. Organik tarım yöntemleriyle üretilmesi önemlidir. Ürünümüzde premium kalite lavanta kullanılır.'
    },
    {
      title: 'Lavanta ve Sağlık',
      text: 'Lavanta antiseptik özelliklere sahiptir. Antibakteriyel etki gösterir. Antifungal koruma sağlar. İltihap önleyici özelliği vardır. Ağrı kesici etki yaratır. Doğal bir sakinleştirici olarak çalışır.'
    }
  ];

  const seasonalUse = [
    {
      season: 'İlkbahar',
      icon: Sun,
      description: 'Bahar alerjilerine karşı koruma sağlar. Polen etkisini azaltır. Ferah ortam yaratır. Enerji seviyesini yükseltir. Pozitif ruh hali oluşturur.'
    },
    {
      season: 'Yaz',
      icon: Sun,
      description: 'Sıcak havalarda serinletici etki verir. Böcekleri uzak tutar. Nem dengesini sağlar. Taze hava hissi yaratır. Dinlendirici atmosfer oluşturur.'
    },
    {
      season: 'Sonbahar',
      icon: Leaf,
      description: 'Mevsim geçişinde uyum sağlar. Bağışıklık sistemini destekler. Kapalı mekanlarda hava kalitesini artırır. Melankoliyi azaltır. Sıcak atmosfer yaratır.'
    },
    {
      season: 'Kış',
      icon: Moon,
      description: 'Kapalı ortamlarda ferahlık sağlar. Kuru havayı nemlendirir. Soğuk algınlığına karşı korur. Sinüs rahatsızlıklarını hafifletir. Kış depresyonunu önler.'
    }
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-6"
              >
                <Star className="w-4 h-4 text-purple-600 fill-purple-600" />
                <span className="text-sm font-medium text-purple-700">100ml Premium Şişe</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block">Lavanta</span>
                <span className="block text-gradient">Çubuklu Oda Kokusu</span>
              </h1>

              <div className="space-y-4 mb-8">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  <strong>Provence lavanta tarlaları</strong>nın <em>büyülü kokusu</em> artık evinizde. 
                  Doğal <u>bambu çubuklar</u> ile hazırlanan ürünümüz, yaşam alanlarınızı huzur dolu bir cennete dönüştürür.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Saf lavanta esansı ve <strong>sürdürülebilir bambu</strong> çubukların mükemmel uyumu. 
                  <em>Üç ila dört ay</em> boyunca kesintisiz koku deneyimi sunar. 
                  Elektrik veya <u>ısı gerektirmez</u>, tamamen doğal yayılım sağlar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="https://www.karakarhome.com.tr/lavanta-oda-kokusu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <ShoppingBag className="w-5 h-5" />
                    <span>Hemen Sipariş Ver</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Link>

                <Link
                  href="/urun-detay"
                  className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-full border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all shadow-md"
                >
                  Detaylı İncele
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Ücretsiz Kargo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Hızlı Teslimat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Doğal İçerik</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 lg:p-12 shadow-2xl">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-2xl"></div>
                
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <Image
                    src="/urun.webp"
                    alt="Lavanta Çubuklu Oda Kokusu 100ml"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ürün <span className="text-gradient">Özellikleri</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <strong>Lavanta Çubuklu Oda Kokusu</strong>, <em>doğal bileşenler</em> ve <em>sürdürülebilir malzemeler</em> kullanılarak üretilir. 
              Her detay <u>mükemmellik</u> için tasarlanmıştır.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Lavanta <span className="text-gradient">Faydaları</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <strong>Binlerce yıldır</strong> kullanılan lavanta, <em>bilimsel araştırmalarla</em> kanıtlanmış faydalar sunar. 
              Yaşam kalitenizi <u>doğal yollarla</u> artırır.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bambu Section */}
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
              Bambu <span className="text-gradient">Çubuklar</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <strong>Sürdürülebilir bambu</strong> çubuklar, <em>doğal gözenekli yapısı</em> sayesinde kokuyu mükemmel şekilde dağıtır. 
              Çevre dostu ve <u>uzun ömürlü</u> kullanım sağlar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {bambuInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <p className="text-gray-700 leading-relaxed">{info.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guide */}
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
              Nasıl <span className="text-gradient">Kullanılır?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <strong>Adım adım</strong> kullanım rehberi ile <em>maksimum verim</em> alın. 
              Doğru kullanım <u>koku deneyimini</u> iki katına çıkarır.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usageGuide.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl font-bold text-purple-200 mb-3">{guide.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{guide.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types */}
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
              Kullanım <span className="text-gradient">Alanları</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Her <strong>mekan</strong> için <em>özel öneriler</em>. 
              Oda büyüklüğüne göre <u>çubuk sayısını</u> ayarlayın.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Mekan</th>
                  <th className="px-6 py-4 text-left font-bold">Alan</th>
                  <th className="px-6 py-4 text-left font-bold">Çubuk Sayısı</th>
                  <th className="px-6 py-4 text-left font-bold">Fayda</th>
                  <th className="px-6 py-4 text-left font-bold">İpucu</th>
                </tr>
              </thead>
              <tbody>
                {roomTypes.map((room, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-purple-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">{room.room}</td>
                    <td className="px-6 py-4 text-gray-600">{room.size}</td>
                    <td className="px-6 py-4 text-purple-600 font-bold">{room.sticks}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{room.benefit}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm italic">{room.tips}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Lavender Facts */}
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
              Lavanta <span className="text-gradient">Hakkında</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {lavenderFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{fact.title}</h3>
                <p className="text-gray-700 leading-relaxed">{fact.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Use */}
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
              Mevsimsel <span className="text-gradient">Kullanım</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <strong>Dört mevsim</strong> boyunca <em>farklı faydalar</em> sunar. 
              Her mevsime <u>özel etkiler</u> yaratır.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seasonalUse.map((season, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <season.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{season.season}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{season.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Evinize Huzur Getirin
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              <strong>Lavanta Çubuklu Oda Kokusu</strong> ile yaşam alanlarınızı <em>sakin bir cennete</em> dönüştürün. 
              <u>Şimdi sipariş verin</u>, farkı hissedin.
            </p>
            <Link
              href="https://www.karakarhome.com.tr/lavanta-oda-kokusu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-purple-700 font-bold rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all text-lg"
            >
              <ShoppingBag className="w-6 h-6" />
              <span>Sipariş Ver</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
