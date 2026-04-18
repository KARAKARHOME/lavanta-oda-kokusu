export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lavanta Çubuklu Oda Kokusu",
    "url": "https://lavantaodakokusu.com.tr",
    "logo": "https://lavantaodakokusu.com.tr/logo.webp",
    "description": "Doğal lavanta esansı ve bambu çubuklar ile hazırlanan premium oda kokusu",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Esenyalı Mah. Edebali Cad. No:13/A",
      "addressLocality": "Pendik",
      "addressRegion": "İstanbul",
      "postalCode": "34903",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-545-181-4040",
      "contactType": "customer service",
      "email": "info@lavantaodakokusu.com.tr",
      "availableLanguage": "Turkish"
    },
    "sameAs": [
      "https://www.facebook.com/KARAKARHOME/",
      "https://www.instagram.com/karakarhome",
      "https://x.com/karakarhome",
      "https://tr.pinterest.com/karakarhome/",
      "https://www.youtube.com/@KARAKARHOME"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Lavanta Çubuklu Oda Kokusu 100ml",
    "description": "Doğal lavanta esansı ve bambu çubuklar ile hazırlanan 100ml premium oda kokusu. 3-4 ay kullanım süresi, 8 adet bambu çubuk.",
    "brand": {
      "@type": "Brand",
      "name": "Lavanta Çubuklu Oda Kokusu"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.karakarhome.com.tr/lavanta-oda-kokusu/",
      "priceCurrency": "TRY",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Lavanta Çubuklu Oda Kokusu"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lavanta Çubuklu Oda Kokusu",
    "image": "https://lavantaodakokusu.com.tr/logo.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Esenyalı Mah. Edebali Cad. No:13/A",
      "addressLocality": "Pendik",
      "addressRegion": "İstanbul",
      "postalCode": "34903",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.876543",
      "longitude": "29.234567"
    },
    "telephone": "+90-545-181-4040",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://lavantaodakokusu.com.tr"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Hakkımızda",
        "item": "https://lavantaodakokusu.com.tr/hakkimizda"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ürün Detayı",
        "item": "https://lavantaodakokusu.com.tr/urun-detay"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "İletişim",
        "item": "https://lavantaodakokusu.com.tr/iletisim"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
