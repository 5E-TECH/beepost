import { Lang } from "./language";

export const dictionaries: Record<
  Lang,
  {
    nav: {
      about: string;
      values: string;
      services: string;
      faq: string;
      pricing: string;
      cta: string;
    };
    hero: {
      title1: string;
      titleHighlight: string;
      description: string;
      stats: { label: string; value: string }[];
      start: string;
      seeProcess: string;
    };
    partners: { title: string; subtitle: string };
    about: {
      titleLine1: string;
      titleLine2: string;
      trust: string;
      mission: string;
      reasons: string[];
      achievements: { value: string; label: string }[];
      expand: string;
      collapse: string;
      whyTitle: string;
      missionTitle: string;
      achievementsTitle: string;
    };
    values: {
      title: string;
      subtitle: string;
      cards: { icon: string; title: string; text: string }[];
    };
    process: {
      title: string;
      subtitle: string;
      steps: { title: string; body: string; badge?: string }[];
      cards: {
        step1: {
          heading: string;
          typeLabel: string;
          typeValue: string;
          addressLabel: string;
          addressValue: string;
          timeLabel: string;
          timeValue: string;
          payLabel: string;
          payValue: string;
        };
        step2: {
          card1Title: string;
          card1Desc: string;
          card2Title: string;
          card2Desc: string;
          card3Title: string;
          card3Desc: string;
        };
        step3: {
          trackingLabel: string;
          trackingValue: string;
          statusLabel: string;
          statusValue: string;
          recipientTitle: string;
          recipientDesc: string;
        };
      };
    };
    faq: { title: string; items: { q: string; a: string }[] };
    pricing: {
      heading: string;
      contactCta: string;
      footerLeftTitle: string;
      footerLeftContact: string;
      tariffLabel: string;
      cards: { title: string; price: string; info: string; note: string }[];
    };
    footer: {
      tagline: string;
      builtByPrefix: string;
      builtBySuffix: string;
    };
  }
> = {
  uz: {
    nav: {
      about: "Biz haqimizda",
      values: "Afzalliklar",
      services: "Jarayon",
      faq: "Savollar",
      pricing: "Narxlar",
      cta: "Buyurtma berish",
    },
    hero: {
      title1: "Ishonchli va tezkor",
      titleHighlight: "yetkazib berish xizmati",
      description:
        "O‘zbekiston bo‘ylab posilkalarni xavfsiz va tez yetkazamiz. Real vaqt kuzatuv, qulay narxlar va 24/7 qo‘llab-quvvatlash.",
      stats: [
        { value: "50K+", label: "Yetkazilgan jo‘natmalar" },
        { value: "99.8%", label: "O‘z vaqtida yetkazish" },
        { value: "24/7", label: "Qo‘llab-quvvatlash" },
      ],
      start: "Hoziroq boshlash",
      seeProcess: "Jarayonni ko‘rish",
    },
    partners: {
      title: "Yetkazib berish bo‘yicha hamkorlarimiz",
      subtitle: "Dunyo bo‘ylab yetakchi kompaniyalar bilan ishlaymiz",
    },
    about: {
      titleLine1: "BEEPOST bilan tez va",
      titleLine2: "xavfsiz pochta xizmatlari",
      trust: "1000+ korxona va jismoniy shaxslar ishonchi",
      missionTitle: "Bizning missiyamiz",
      mission:
        "BEEPOST O‘zbekiston bo‘ylab pochta va kuryer xizmatlarini zamonaviy texnologiyalar asosida taklif qiladi. Har bir jo‘natma uchun aniq vaqt, kuzatuv va xavfsizlikni kafolatlab, biznesingiz hamda shaxsiy yetkazmalaringizni ishonchli qo‘llarga topshiramiz.",
      whyTitle: "Nima uchun BEEPOST?",
      reasons: [
        "24/7 operator va kuryer ko‘magidagi xizmatlar",
        "Real vaqt rejimida kuzatish va SMS/Telegram xabarnomalari",
        "O‘zbekiston bo‘ylab 200+ manzilga yetkazish tarmog‘i",
        "Yetkazma sug‘urtasi va korxonalar uchun moslashuvchan tariflar",
      ],
      achievementsTitle: "Bizning yutuqlarimiz",
      achievements: [
        { value: "50K+", label: "Yetkazilgan jo‘natmalar" },
        { value: "1000+", label: "Faol biznes mijozlari" },
        { value: "99.8%", label: "O‘z vaqtida yetkazish ko‘rsatkichi" },
      ],
      expand: "Biz haqimizda batafsil",
      collapse: "Yig‘ish",
    },
    values: {
      title: "Beepost sizga qanday yordam beradi?",
      subtitle:
        "Pochta va kuryerlik bo‘yicha barcha jarayonlarni yagona platformada boshqarishingiz mumkin: buyurtma, kuzatuv, hisob-kitob va qo‘llab-quvvatlash bir joyda.",
      cards: [
        {
          icon: "📦",
          title: "Xavfsiz tashish",
          text: "Muhim hujjat yoki posilkalar uchun sug‘urta va yopiq yetkazib berish zanjiri.",
        },
        {
          icon: "⏱️",
          title: "Tezkor marshrut",
          text: "Shahar ichida 24 soatgacha, viloyatlarga 24-72 soatda yetkazish.",
        },
        {
          icon: "🤝",
          title: "Shaxsiy xizmat",
          text: "Operatorlar eng yaqin filial yoki kuryerni tayinlab, har bir jo‘natma bo‘yicha javob beradi.",
        },
      ],
    },
    process: {
      title: "Jo‘natmangiz qadam-baqadam",
      subtitle:
        "Buyurtma berishdan qabul qiluvchiga yetib borguncha bo‘lgan jarayonni platformadan kuzatib boring. Har qadam bo‘yicha xabar va vaqtni ko‘rib turasiz.",
      steps: [
        {
          title: "Buyurtma yarating",
          body: "Qabul qiluvchi ma’lumotlari va jo‘natma turini kiriting. Tarif avtomatik hisoblanadi, SMS va e-mail orqali buyurtma raqami yuboriladi.",
        },
        {
          title: "Kuryer jo‘natmani qabul qiladi",
          body: "Shahar ichida eng yaqin kuryer yoki filial tayinlanadi. Kelishidan oldin taxminiy vaqt va qo‘ng‘iroq haqida xabar olasiz.",
        },
        {
          title: "Kuzatish va yetkazib berish",
          body: "Jo‘natma statuslari real vaqt rejimida yangilanadi. Qabul qiluvchi imzo qo‘ygach, dalolatnoma va elektron kvitansiya yuboriladi.",
        },
      ],
      cards: {
        step1: {
          heading: "Yangi buyurtma",
          typeLabel: "Jo‘natma turi",
          typeValue: "Hujjat + paket",
          addressLabel: "Manzil",
          addressValue: "Toshkent → Andijon",
          timeLabel: "Yetkazish vaqti",
          timeValue: "24-48 soat",
          payLabel: "To‘lov",
          payValue: "Naqd / UzCard",
        },
        step2: {
          card1Title: "Kuryer tayyorlandi",
          card1Desc: "Gulnora, tel: +998 90 123 45 67",
          card2Title: "Manzilga yo‘lda",
          card2Desc: "ETA: 25 daqiqa · GPS orqali kuzatish",
          card3Title: "Jo‘natma qabul qilindi",
          card3Desc: "Toshkent, Chilonzor filiali",
        },
        step3: {
          trackingLabel: "Tracking ID",
          trackingValue: "BP-2045",
          statusLabel: "Holat",
          statusValue: "Yetkazildi",
          recipientTitle: "Qabul qiluvchi",
          recipientDesc: "Azizbek Karimov · 14:25 da imzo olindi",
        },
      },
    },
    faq: {
      title: "Ko‘p so‘raladigan savollar",
      items: [
        {
          q: "BEEPOST nima va qayerlarda ishlaydi?",
          a: "BEEPOST O‘zbekistonda pochta va kuryerlik xizmatlarini taqdim etadi. Shahar ichida va viloyatlararo jo‘natmalarni qabul qilib, belgilangan muddatda yetkazib beramiz.",
        },
        {
          q: "Jo‘natmani qanday kuzataman?",
          a: "Har bir buyurtmaga Tracking ID beriladi. Uni sayt, SMS/Telegram xabarnomalari yoki shaxsiy kabinet orqali real vaqt rejimida kuzatishingiz mumkin.",
        },
        {
          q: "Yetkazish muddati qancha?",
          a: "Toshkent ichida — 24 soatgacha, viloyatlararo — odatda 24-72 soat. Zudlik bilan xizmat va kechki qabul opsiyalari ham mavjud.",
        },
        {
          q: "Jo‘natmalar xavfsizligi qanday ta’minlanadi?",
          a: "Har bir posilka yopiq zanjirda tashiladi, qabulda fotosurat va imzo olinadi. Qiymatli jo‘natmalar uchun qo‘shimcha sug‘urta va qayta yetkazish kafolatlari bor.",
        },
      ],
    },
    pricing: {
      heading: "Yetkazib berish narxlari va buyurtma",
      contactCta: "Operator bilan bog‘lanish",
      footerLeftTitle: "BEEPOST",
      footerLeftContact: "Bog‘lanish",
      tariffLabel: "Tarif",
      cards: [
        {
          title: "Shahar ichi (24 soatgacha)",
          price: "25 000 so‘mdan",
          info: "Ekspress kuryer, foto va imzo bilan topshirish, SMS/Telegram xabarnoma",
          note: "Og‘irlik va manzilga qarab aniq narxni operator aytadi",
        },
        {
          title: "Viloyatlararo (24-72 soat)",
          price: "35 000 so‘mdan",
          info: "Har kuni jo‘nalish, kuzatuv kodi, filiala topshirish yoki kuryer chaqirish",
          note: "Qishloq va olis hududlar uchun +1 kun bo‘lishi mumkin",
        },
        {
          title: "Zudlik bilan (2x tarif)",
          price: "Tezkor marshrut",
          info: "Ustuvor jo‘natish, maxsus kuryer, real vaqt monitoring",
          note: "Oldindan qo‘ng‘iroq orqali mavjud marshrut tekshiriladi",
        },
      ],
    },
    footer: {
      tagline: "Jo‘natmangizni ishonchli qo‘llarga topshiring.",
      builtByPrefix: "Sayt YE77I Tech tomonidan",
      builtBySuffix: "bilan yaratilgan",
    },
  },
  en: {
    nav: {
      about: "About",
      values: "Benefits",
      services: "Process",
      faq: "FAQ",
      pricing: "Pricing",
      cta: "Order now",
    },
    hero: {
      title1: "Reliable, fast",
      titleHighlight: "delivery service",
      description:
        "We ship parcels safely across Uzbekistan with live tracking, fair rates, and 24/7 support.",
      stats: [
        { value: "50K+", label: "Parcels delivered" },
        { value: "99.8%", label: "On-time delivery" },
        { value: "24/7", label: "Customer support" },
      ],
      start: "Get started",
      seeProcess: "See process",
    },
    partners: {
      title: "Our delivery partners",
      subtitle: "We work with leading companies worldwide",
    },
    about: {
      titleLine1: "Fast and secure",
      titleLine2: "postal services with Beepost",
      trust: "Trusted by 1,000+ businesses and individuals",
      missionTitle: "Our mission",
      mission:
        "Beepost delivers postal and courier services across Uzbekistan with modern tech. We guarantee clear timing, tracking, and security for every shipment—whether personal or business.",
      whyTitle: "Why Beepost?",
      reasons: [
        "24/7 operator and courier assistance",
        "Real-time tracking with SMS/Telegram updates",
        "Coverage to 200+ locations across Uzbekistan",
        "Insurance options and flexible business pricing",
      ],
      achievementsTitle: "Our results",
      achievements: [
        { value: "50K+", label: "Delivered shipments" },
        { value: "1000+", label: "Active business clients" },
        { value: "99.8%", label: "On-time rate" },
      ],
      expand: "Learn more about us",
      collapse: "Hide",
    },
    values: {
      title: "How Beepost helps you",
      subtitle:
        "Manage courier and postal workflows in one place: ordering, tracking, billing, and support together.",
      cards: [
        {
          icon: "📦",
          title: "Secure handling",
          text: "Insurance and closed chain-of-custody for documents and parcels.",
        },
        {
          icon: "⏱️",
          title: "Fast routes",
          text: "City deliveries within 24h; intercity in 24–72h with clear ETAs.",
        },
        {
          icon: "🤝",
          title: "Personal support",
          text: "Operators assign the nearest courier or branch and stay responsive for each shipment.",
        },
      ],
    },
    process: {
      title: "Your shipment, step by step",
      subtitle:
        "Track everything from order to delivery. See timestamps and notifications for each milestone.",
      steps: [
        {
          title: "Create an order",
          body: "Add recipient details and package type. Pricing is calculated instantly; you get an order ID via SMS and email.",
        },
        {
          title: "Courier picks it up",
          body: "We assign the nearest courier or branch. You receive ETA and call notice before arrival.",
        },
        {
          title: "Track and deliver",
          body: "Statuses update in real time. After signature, you receive proof of delivery and a digital receipt.",
        },
      ],
      cards: {
        step1: {
          heading: "New order",
          typeLabel: "Package type",
          typeValue: "Documents + parcel",
          addressLabel: "Route",
          addressValue: "Tashkent → Andijan",
          timeLabel: "Delivery time",
          timeValue: "24–48 hours",
          payLabel: "Payment",
          payValue: "Cash / Card",
        },
        step2: {
          card1Title: "Courier assigned",
          card1Desc: "Gulnora, +998 90 123 45 67",
          card2Title: "On the way",
          card2Desc: "ETA: 25 minutes · GPS tracking",
          card3Title: "Parcel accepted",
          card3Desc: "Tashkent, Chilonzor branch",
        },
        step3: {
          trackingLabel: "Tracking ID",
          trackingValue: "BP-2045",
          statusLabel: "Status",
          statusValue: "Delivered",
          recipientTitle: "Recipient",
          recipientDesc: "Azizbek Karimov · Signed at 14:25",
        },
      },
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "What is Beepost and where does it operate?",
          a: "Beepost provides postal and courier services across Uzbekistan, handling city and intercity shipments with defined delivery windows.",
        },
        {
          q: "How do I track my shipment?",
          a: "Every order gets a Tracking ID. Track via the site, SMS/Telegram alerts, or your account in real time.",
        },
        {
          q: "How long does delivery take?",
          a: "Within Tashkent: up to 24h. Intercity: typically 24–72h. Urgent and late pickup options are available.",
        },
        {
          q: "How is shipment security ensured?",
          a: "Parcels move in a closed chain; we capture photo and signature on delivery. Insurance and re-delivery guarantees are available for valuable items.",
        },
      ],
    },
    pricing: {
      heading: "Delivery rates and ordering",
      contactCta: "Contact an operator",
      footerLeftTitle: "BEEPOST",
      footerLeftContact: "Contact",
      tariffLabel: "Tariff",
      cards: [
        {
          title: "Within city (up to 24h)",
          price: "from 25,000 UZS",
          info: "Express courier, photo and signature on delivery, SMS/Telegram alerts",
          note: "Exact price depends on weight and address",
        },
        {
          title: "Intercity (24–72h)",
          price: "from 35,000 UZS",
          info: "Daily departures, tracking code, drop-off at branch or courier pickup",
          note: "Remote areas may add +1 day",
        },
        {
          title: "Urgent (2x rate)",
          price: "Priority route",
          info: "Priority handling, dedicated courier, real-time monitoring",
          note: "Route availability is confirmed by phone",
        },
      ],
    },
    footer: {
      tagline: "Hand your shipment to trusted pros.",
      builtByPrefix: "Site by YE77I Tech,",
      builtBySuffix: "made with",
    },
  },
  ru: {
    nav: {
      about: "О нас",
      values: "Преимущества",
      services: "Процесс",
      faq: "FAQ",
      pricing: "Тарифы",
      cta: "Оформить",
    },
    hero: {
      title1: "Надёжная и быстрая",
      titleHighlight: "служба доставки",
      description:
        "Безопасно доставляем посылки по всему Узбекистану. Онлайн-трекинг, выгодные тарифы и поддержка 24/7.",
      stats: [
        { value: "50K+", label: "Доставленных отправлений" },
        { value: "99.8%", label: "Своевременная доставка" },
        { value: "24/7", label: "Поддержка" },
      ],
      start: "Начать",
      seeProcess: "Процесс",
    },
    partners: {
      title: "Наши партнёры по доставке",
      subtitle: "Работаем с ведущими компаниями мира",
    },
    about: {
      titleLine1: "Быстрые и безопасные",
      titleLine2: "почтовые услуги с Beepost",
      trust: "Нам доверяют более 1000 компаний и клиентов",
      missionTitle: "Наша миссия",
      mission:
        "Beepost предоставляет почтовые и курьерские услуги по всему Узбекистану на базе современных технологий. Мы гарантируем точные сроки, отслеживание и безопасность для каждого отправления — личного или бизнес.",
      whyTitle: "Почему Beepost?",
      reasons: [
        "Поддержка операторов и курьеров 24/7",
        "Отслеживание в реальном времени и SMS/Telegram уведомления",
        "Покрытие 200+ направлений по Узбекистану",
        "Страхование и гибкие тарифы для бизнеса",
      ],
      achievementsTitle: "Наши результаты",
      achievements: [
        { value: "50K+", label: "Доставленных отправлений" },
        { value: "1000+", label: "Активных бизнес-клиентов" },
        { value: "99.8%", label: "Доставка в срок" },
      ],
      expand: "Подробнее о нас",
      collapse: "Свернуть",
    },
    values: {
      title: "Как Beepost помогает",
      subtitle:
        "Управляйте почтовыми и курьерскими задачами в одном окне: заказ, трекинг, биллинг и поддержка.",
      cards: [
        {
          icon: "📦",
          title: "Безопасная доставка",
          text: "Страхование и контроль цепочки для документов и посылок.",
        },
        {
          icon: "⏱️",
          title: "Быстрые маршруты",
          text: "По городу до 24 часов, между городами 24–72 часа с чёткими ETA.",
        },
        {
          icon: "🤝",
          title: "Личное сопровождение",
          text: "Операторы назначают ближайшего курьера или филиал и остаются на связи по каждому отправлению.",
        },
      ],
    },
    process: {
      title: "Ваше отправление шаг за шагом",
      subtitle:
        "От создания заказа до вручения — весь процесс прозрачен. Видны время и уведомления по каждому этапу.",
      steps: [
        {
          title: "Создайте заказ",
          body: "Введите получателя и тип отправления. Тариф считается сразу, заказ подтверждается SMS и email.",
        },
        {
          title: "Курьер забирает посылку",
          body: "Назначаем ближайшего курьера или филиал. Приходит ETA и уведомление о звонке перед приездом.",
        },
        {
          title: "Отслеживайте и получайте",
          body: "Статусы обновляются в реальном времени. После подписи вы получаете подтверждение и электронный чек.",
        },
      ],
      cards: {
        step1: {
          heading: "Новый заказ",
          typeLabel: "Тип отправления",
          typeValue: "Документы + посылка",
          addressLabel: "Маршрут",
          addressValue: "Ташкент → Андижан",
          timeLabel: "Срок доставки",
          timeValue: "24–48 часов",
          payLabel: "Оплата",
          payValue: "Наличные / карта",
        },
        step2: {
          card1Title: "Курьер назначен",
          card1Desc: "Гульнора, +998 90 123 45 67",
          card2Title: "В пути",
          card2Desc: "ETA: 25 минут · GPS трекинг",
          card3Title: "Отправление принято",
          card3Desc: "Ташкент, филиал Чиланзар",
        },
        step3: {
          trackingLabel: "Tracking ID",
          trackingValue: "BP-2045",
          statusLabel: "Статус",
          statusValue: "Доставлено",
          recipientTitle: "Получатель",
          recipientDesc: "Азизбек Каримов · Подпись в 14:25",
        },
      },
    },
    faq: {
      title: "Частые вопросы",
      items: [
        {
          q: "Что такое Beepost и где он работает?",
          a: "Beepost оказывает почтовые и курьерские услуги по всему Узбекистану: по городу и между городами с заданными сроками.",
        },
        {
          q: "Как отследить отправление?",
          a: "Каждый заказ получает Tracking ID. Отслеживайте на сайте, по SMS/Telegram уведомлениям или в личном кабинете.",
        },
        {
          q: "Сколько занимает доставка?",
          a: "По Ташкенту — до 24 часов, межгород — обычно 24–72 часа. Есть срочная доставка и поздний приём.",
        },
        {
          q: "Как обеспечивается безопасность отправлений?",
          a: "Доставка идёт по закрытой цепочке, при вручении фиксируются фото и подпись. Для ценных отправлений есть страхование и гарантии повторной доставки.",
        },
      ],
    },
    pricing: {
      heading: "Тарифы и оформление заказа",
      contactCta: "Связаться с оператором",
      footerLeftTitle: "BEEPOST",
      footerLeftContact: "Контакты",
      tariffLabel: "Тариф",
      cards: [
        {
          title: "В пределах города (до 24ч)",
          price: "от 25 000 сум",
          info: "Экспресс-курьер, фото и подпись при вручении, SMS/Telegram уведомления",
          note: "Точная цена зависит от веса и адреса",
        },
        {
          title: "Между городами (24–72ч)",
          price: "от 35 000 сум",
          info: "Ежедневные рейсы, трекинг-код, сдача в филиал или выезд курьера",
          note: "Для отдалённых районов может понадобиться +1 день",
        },
        {
          title: "Срочно (2x тариф)",
          price: "Приоритетный маршрут",
          info: "Приоритетная обработка, выделенный курьер, мониторинг в реальном времени",
          note: "Доступность маршрута подтверждается по звонку",
        },
      ],
    },
    footer: {
      tagline: "Доверьте отправление надёжным специалистам.",
      builtByPrefix: "Сайт от YE77I Tech,",
      builtBySuffix: "создан с",
    },
  },
};
