import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { detectLangFromString, Lang } from "@/lib/language";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataByLang: Record<Lang, Metadata> = {
  uz: {
    metadataBase: new URL("https://beepost.uz"),
    title: {
      default:
        "Beepost | O‘zbekistonda kuryer va pochta yetkazib berish xizmati",
      template: "%s | Beepost",
    },
    description:
      "Beepost — O‘zbekistonda tezkor kuryer va pochta yetkazib berish. Shahar ichida 24 soatda, viloyatlararo 24-72 soatda, kuzatuv kodi, kuryer chaqirish, sug‘urta va 24/7 qo‘llab-quvvatlash.",
    keywords: [
      "Beepost",
      "kuryer",
      "pochta xizmati",
      "tezkor yetkazib berish",
      "Toshkent kuryer",
      "O‘zbekiston yetkazib berish",
      "viloyatlararo pochta",
      "jo‘natma kuzatuv",
      "kuryer chaqirish",
      "express delivery Uzbekistan",
    ],
    openGraph: {
      title: "Beepost | Tez va ishonchli kuryer xizmatlari",
      description:
        "Shahar ichida 24 soatgacha, viloyatlararo 24-72 soat. Tracking, kuryer chaqirish, sug‘urta va 24/7 qo‘llab-quvvatlash Beepostda.",
      url: "https://beepost.uz",
      siteName: "Beepost",
      locale: "uz_UZ",
      alternateLocale: ["en_US", "ru_RU"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Beepost | Tezkor kuryer va pochta xizmati",
      description:
        "Tracking bilan yetkazib berish, kuryer chaqirish va hamyonbop tariflar. O‘zbekiston bo‘ylab ishonchli pochta xizmati.",
    },
    alternates: {
      canonical: "https://beepost.uz",
      languages: {
        uz: "https://beepost.uz",
        en: "https://beepost.uz/en",
        ru: "https://beepost.uz/ru",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  },
  en: {
    metadataBase: new URL("https://beepost.uz"),
    title: {
      default: "Beepost | Courier and postal delivery in Uzbekistan",
      template: "%s | Beepost",
    },
    description:
      "Beepost delivers parcels across Uzbekistan with live tracking, 24/7 support, and fair rates. City deliveries within 24h, intercity 24–72h.",
    keywords: [
      "Beepost",
      "courier Uzbekistan",
      "postal service",
      "express delivery",
      "Tashkent courier",
      "parcel tracking",
      "urgent delivery",
      "intercity delivery",
      "courier pickup",
      "delivery Uzbekistan",
    ],
    openGraph: {
      title: "Beepost | Fast and reliable delivery",
      description:
        "City: up to 24h. Intercity: 24–72h. Tracking, courier pickup, insurance, and 24/7 support.",
      url: "https://beepost.uz/en",
      siteName: "Beepost",
      locale: "en_US",
      alternateLocale: ["uz_UZ", "ru_RU"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Beepost | Courier and postal delivery in Uzbekistan",
      description:
        "Live tracking, courier pickup, and business-friendly pricing. Reliable delivery across Uzbekistan.",
    },
    alternates: {
      canonical: "https://beepost.uz/en",
      languages: {
        uz: "https://beepost.uz",
        en: "https://beepost.uz/en",
        ru: "https://beepost.uz/ru",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  },
  ru: {
    metadataBase: new URL("https://beepost.uz"),
    title: {
      default: "Beepost | Курьерская и почтовая доставка по Узбекистану",
      template: "%s | Beepost",
    },
    description:
      "Beepost — быстрая курьерская и почтовая доставка по Узбекистану. По городу до 24 часов, между городами 24–72 часа. Трекинг, курьер, страхование и поддержка 24/7.",
    keywords: [
      "Beepost",
      "курьер Узбекистан",
      "почтовая служба",
      "экспресс доставка",
      "курьер Ташкент",
      "отслеживание посылок",
      "междугородняя доставка",
      "срочная доставка",
      "вызов курьера",
      "доставка Узбекистан",
    ],
    openGraph: {
      title: "Beepost | Быстрая и надежная доставка",
      description:
        "По городу до 24ч, межгород 24–72ч. Трекинг, вызов курьера, страхование и поддержка 24/7.",
      url: "https://beepost.uz/ru",
      siteName: "Beepost",
      locale: "ru_RU",
      alternateLocale: ["uz_UZ", "en_US"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Beepost | Курьерская доставка по Узбекистану",
      description:
        "Онлайн-трекинг, вызов курьера и гибкие тарифы. Надежная доставка по всей стране.",
    },
    alternates: {
      canonical: "https://beepost.uz/ru",
      languages: {
        uz: "https://beepost.uz",
        en: "https://beepost.uz/en",
        ru: "https://beepost.uz/ru",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const hdrs = await headers();
  const accept = hdrs.get("accept-language");
  const lang = detectLangFromString(accept);
  return metadataByLang[lang] ?? metadataByLang.uz;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
