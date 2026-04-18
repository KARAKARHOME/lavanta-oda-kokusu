'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Leaf, Heart, Shield, Zap, TrendingUp, Users, Target } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: 'Doğallık',
      description: 'Yüzde yüz doğal lavanta esansı kullanırız. Sentetik katkı maddelerine hayır deriz. Organik tarım ürünlerini tercih ederiz. Çevre dostu üretim süreçleri benimseriz.'
    },
    {
      icon: Heart,
      title: 'Kalite',
      description: 'Premium malzemeler seçeriz. Her ürün titiz testlerden geçer. Standartlarımız sektör normlarının üzerindedir. Mükemmellik hedefimizdir.'
    },
    {
      icon: Shield,
      title: 'Güvenilirlik',
      description: 'Şeffaf üretim anlayışı benimseriz. Sertifikalı ürünler sunarz. Müşteri memnuniyeti önceliğimizdir. Güven inşa ederiz.'
    },
    {
      icon: Zap,
      title: 'İnovasyon',
      description: 'Sürekli araştırma yaparız. Yeni formüller geliştiririz. Teknolojik gelişmeleri takip ederiz. İlerlemeyi hedefleriz.'
    }
  ];

  const story = [
    {
      title: 'Lavanta Tutkusu',
      text: 'Lavanta ile yolculuğumuz, Provence bölgesine yapılan bir gezide başladı. Mor çiçek tarlaları büyüledi. O eşsiz koku hafızalara kazındı. Türkiye\'ye dönüşte bir karar verildi: Bu kokuyu evlere taşımak. Araştırmalar başladı. Formülasyonlar denendi. Yıllar süren çalışma sonucu mükemmel karışım bulundu.'
    },
    {
      title: 'Bambu Keşfi',
      text: 'Koku yayma yöntemleri araştırıldı. Elektrikli cihazlar değerlendirildi. Mumlar test edildi. Sonunda bambu çubuklar keşfedildi. Doğal gözenekli yapısı ideal çözümdü. Sürdürülebilir kaynaklardan temin ediliyordu. Çevre dostu özelliği ek avantajdı. Bambu ile lavanta mükemmel uyum sağladı.'
    },
    {
      title: 'Ürün Geliştirme',
      text: 'İlk prototip üretildi. Test kullanıcılarla paylaşıldı. Geri bildirimler toplandı. Formül iyileştirildi. Şişe tasarımı geliştirildi. Ambalaj optimize edildi. Yüzlerce deneme yapıldı. Nihayet mükemmel ürün ortaya çıktı. Piyasaya sürülmeye hazırdı.'
    },
    {
      title: 'Bugün',
      text: 'Binlerce eve ulaştık. Müşteri memnuniyeti %98 seviyesinde. Olumlu yorumlar alıyoruz. Sürekli gelişmeye devam ediyoruz. Yeni ürünler planlıyoruz. Vizyonumuz büyüyor. Lavanta tutkumuz artıyor. Hedefimiz her eve huzur taşımak.'
    }
  ];

  const production = [
    {
      step: '1',
      title: 'Lavanta Seçimi',
      description: 'Provence bölgesinden organik lavanta temin edilir. Yüksek rakımlarda yetişen çeşitler tercih edilir. Hasat zamanı kritik önem taşır. Çiçekler sabah erken saatlerde toplanır. Saflık oranı %99.5\'i aşar. Laboratuvar testleri yapılır. Kalite kontrol süreklidir.'
    },
    {
      step: '2',
      title: 'Esans Çıkarımı',
      description: 'Buhar distilasyon yöntemi kullanılır. Düşük sıcaklıkta işlem yapılır. Aromalar korunur. Terapötik özellikler kaybolmaz. Saf lavanta yağı elde edilir. Hiçbir kimyasal madde eklenmez. Doğallık garantilenir.'
    },
    {
      step: '3',
      title: 'Formülasyon',
      description: 'Uzman kimyagerler karışım hazırlar. Koku yoğunluğu ayarlanır. Buharlaşma hızı optimize edilir. Taşıyıcı sıvı seçilir. Dengeli formül oluşturulur. Test aşamaları başlar. Üç ay süreyle denenir.'
    },
    {
      step: '4',
      title: 'Bambu Hazırlığı',
      description: 'Sürdürülebilir bambu ormanlarından temin edilir. Doğal kurutma işlemi uygulanır. Kimyasal işlem yapılmaz. Standart uzunlukta kesilir. Kalite kontrolden geçirilir. Steril ortamda paketlenir.'
    },
    {
      step: '5',
      title: 'Şişeleme',
      description: 'Cam şişeler özel olarak üretilir. Steril ortamda dolum yapılır. Otomatik sistemler kullanılır. Hassas ölçüm sağlanır. Her şişe 100ml içerir. Hava sızdırmaz kapaklar takılır. Sızdırmazlık test edilir.'
    },
    {
      step: '6',
      title: 'Paketleme',
      description: 'Geri dönüştürülebilir malzemeler kullanılır. Zarif kutular tasarlanır. Ürün bilgileri eklenir. Kullanım talimatları yazılır. Güvenlik uyarıları belirtilir. Barkod sistemi uygulanır. Kalite mührü vurulur.'
    }
  ];

  const stats = [
    { number: '100%', label: 'Doğal İçerik' },
    { number: '3-4', label: 'Ay Kullanım' },
    { number: '8', label: 'Bambu Çubuk' },
    { number: '100ml', label: 'Premium Şişe' }
  ];

  return (
    <div className="pt-20 lg:pt-24">
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-purple-600 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              <strong>Lavanta Çubuklu Oda Kokusu</strong>, <em>doğal güzelliği</em> evlere taşıma misyonuyla doğdu. 
              Provence lavanta tarlalarının <u>büyüsünü</u> yaşam alanlarınıza getiriyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hikayemiz
              </h2>
              <div className="space-y-6">
                {story.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-md"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 lg:p-12 shadow-2xl">
                <Image
                  src="/urun.webp"
                  alt="Lavanta Çubuklu Oda Kokusu"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </motion.div>
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
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              <strong>Temel prensiplerimiz</strong> işimizin her aşamasında rehberimizdir. 
              <em>Etik</em> ve <em>şeffaflık</em> önceliğimizdir.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
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
              Üretim <span className="text-gradient">Sürecimiz</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <strong>Altı aşamalı</strong> üretim sürecimiz, <em>kalite</em> ve <em>doğallık</em> garantisi verir. 
              Her adım <u>titizlikle</u> uygulanır.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {production.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-lg"
              >
                <div className="text-5xl font-bold text-purple-200 mb-3">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-purple-200 text-lg">{stat.label}</div>
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
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              <strong>Sorularınız</strong> için <Link href="/iletisim" className="text-purple-600 hover:text-purple-700 underline">iletişim sayfamızı</Link> ziyaret edin. 
              Size <em>yardımcı olmaktan</em> mutluluk duyarız.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <span>İletişime Geç</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
