'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 545 181 4040',
      link: 'tel:+905451814040',
      description: 'Hafta içi 09:00 - 18:00 arası arayın'
    },
    {
      icon: Mail,
      title: 'E-Posta',
      content: 'info@lavantaodakokusu.com.tr',
      link: 'mailto:info@lavantaodakokusu.com.tr',
      description: '24 saat içinde yanıt alın'
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Esenyalı Mah. Edebali Cad. No:13/A 34903 Pendik / İstanbul',
      link: 'https://maps.google.com/?q=Esenyalı+Mah.+Edebali+Cad.+No:13/A+34903+Pendik+İstanbul',
      description: 'Showroom ziyareti için randevu alın'
    }
  ];

  const workingHours = [
    { day: 'Pazartesi - Cuma', hours: '09:00 - 18:00' },
    { day: 'Cumartesi', hours: '10:00 - 16:00' },
    { day: 'Pazar', hours: 'Kapalı' }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Destek',
      description: 'Anında mesajlaşma ile sorularınızı yanıtlayalım',
      link: 'https://wa.me/905451814040?text=Merhaba',
      buttonText: 'WhatsApp\'tan Yaz',
      color: 'green'
    },
    {
      icon: MessageCircle,
      title: 'Canlı Destek',
      description: 'Web sitemizden anlık destek alın',
      link: 'https://tawk.to/karakar',
      buttonText: 'Canlı Desteğe Bağlan',
      color: 'purple'
    }
  ];

  const faqs = [
    {
      question: 'Sipariş ne kadar sürede teslim edilir?',
      answer: 'İstanbul içi siparişler 1-2 iş günü, Türkiye geneli 2-4 iş günü içinde kargoya verilir. Kargo teslimat süresi bölgeye göre değişir.'
    },
    {
      question: 'Kargo ücreti ne kadardır?',
      answer: 'Türkiye geneline ücretsiz kargo sunuyoruz. Minimum sipariş tutarı yoktur. Tüm siparişlerde kargo bedava.'
    },
    {
      question: 'İade ve değişim yapabilir miyim?',
      answer: 'Ürün hasarlı veya hatalı gelirse 14 gün içinde iade edebilirsiniz. Açılmamış ürünler için değişim yapılır. Detaylar için iletişime geçin.'
    },
    {
      question: 'Toplu sipariş indirimi var mı?',
      answer: 'Evet, 10 adet ve üzeri siparişlerde özel indirimler sunuyoruz. Kurumsal satış için bizimle iletişime geçin.'
    },
    {
      question: 'Ürün sertifikası var mı?',
      answer: 'Tüm ürünlerimiz dermatolojik testlerden geçmiştir. Sertifika bilgileri ürün ambalajında yer alır.'
    },
    {
      question: 'Yurt dışına gönderim yapıyor musunuz?',
      answer: 'Şu anda sadece Türkiye içine teslimat yapıyoruz. Uluslararası gönderim için özel talep oluşturabilirsiniz.'
    }
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
              İletişim
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              <strong>Sorularınız</strong> için <em>her zaman</em> yanınızdayız. 
              <u>Müşteri memnuniyeti</u> önceliğimizdir. Bize ulaşın.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-medium block mb-2 break-words"
                >
                  {info.content}
                </a>
                <p className="text-sm text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Çalışma Saatleri
              </h2>
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Müşteri Hizmetleri</h3>
                </div>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                      <span className="font-semibold text-gray-800">{schedule.day}</span>
                      <span className="text-purple-600 font-bold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-purple-100 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Not:</strong> Resmi tatil günlerinde kapalıyız. 
                    Acil durumlar için <em>e-posta</em> gönderebilirsiniz.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Destek Kanalları
              </h2>
              <div className="space-y-6">
                {supportChannels.map((channel, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-purple-200 transition-all"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-${channel.color}-500 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <channel.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                        <p className="text-gray-600 mb-4">{channel.description}</p>
                        <a
                          href={channel.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center space-x-2 px-6 py-3 bg-${channel.color}-500 hover:bg-${channel.color}-600 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg`}
                        >
                          <Send className="w-4 h-4" />
                          <span>{channel.buttonText}</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              <strong>Merak ettikleriniz</strong> burada. <em>Hızlı yanıtlar</em> için listeyi inceleyin.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Konum
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-xl">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.8765432109876!2d29.234567!3d40.876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUyJzM1LjYiTiAyOcKwMTQnMDQuNCJF!5e0!3m2!1str!2str!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KARAKAR HOME Konum"
                ></iframe>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">KARAKAR HOME</h3>
                <p className="text-gray-600 mb-4">Esenyalı Mah. Edebali Cad. No:13/A 34903 Pendik / İstanbul</p>
                <a
                  href="https://maps.google.com/?q=Esenyalı+Mah.+Edebali+Cad.+No:13/A+34903+Pendik+İstanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Yol Tarifi Al</span>
                </a>
              </div>
            </div>
          </motion.div>
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
              Hemen İletişime Geçin
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              <strong>Müşteri hizmetleri ekibimiz</strong> size <em>yardımcı olmak</em> için hazır. 
              <u>Sorularınızı</u> yanıtlamaktan mutluluk duyarız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905451814040?text=Merhaba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+905451814040"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-700 font-bold rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all"
              >
                <Phone className="w-6 h-6" />
                <span>Hemen Ara</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Diğer ürünlerimizi keşfetmek için <Link href="https://www.karakarhome.com.tr/oda-kokulari/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-semibold underline">Oda Kokusu</Link> koleksiyonumuzu ziyaret edin.
            </p>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold"
            >
              <span>Ana Sayfaya Dön</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
