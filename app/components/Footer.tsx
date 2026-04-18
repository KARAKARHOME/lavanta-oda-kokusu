'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { 
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      href: 'https://www.facebook.com/KARAKARHOME/', 
      label: 'Facebook' 
    },
    { 
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ), 
      href: 'https://www.instagram.com/karakarhome', 
      label: 'Instagram' 
    },
    { 
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      href: 'https://x.com/karakarhome', 
      label: 'Twitter' 
    },
    { 
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ), 
      href: 'https://www.youtube.com/@KARAKARHOME', 
      label: 'YouTube' 
    },
  ];

  const quickLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/urun-detay', label: 'Ürün Detayı' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <Image
                src="/logo.webp"
                alt="Lavanta Çubuklu Oda Kokusu"
                width={150}
                height={60}
                className="h-12 w-auto object-contain mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Lavanta Çubuklu Oda Kokusu</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Bambu çubuklar ile doğal lavanta esansının buluştuğu 100ml premium oda kokusu. Yaşam alanlarınıza huzur ve ferahlık katar.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="w-10 h-10 bg-white hover:bg-purple-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center shadow-md transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-purple-600 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="https://www.karakarhome.com.tr/oda-kokulari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 transition-colors text-sm flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-purple-600 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Oda Kokusu Koleksiyonu
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-6">İletişim Bilgileri</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+905451814040"
                  className="flex items-start space-x-3 text-gray-600 hover:text-purple-600 transition-colors group"
                >
                  <Phone size={18} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+90 545 181 4040</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@lavantaodakokusu.com.tr"
                  className="flex items-start space-x-3 text-gray-600 hover:text-purple-600 transition-colors group"
                >
                  <Mail size={18} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm break-all">info@lavantaodakokusu.com.tr</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-gray-600">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Esenyalı Mah. Edebali Cad. No:13/A 34903 Pendik / İstanbul</span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-6">Destek</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/905451814040?text=Merhaba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors shadow-md hover:shadow-lg group"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">WhatsApp Destek</span>
              </a>
              <a
                href="https://tawk.to/karakar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors shadow-md hover:shadow-lg group"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Canlı Destek</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-600 text-center">
              © 2025 Lavanta Çubuklu Oda Kokusu. Tüm hakları saklıdır.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
