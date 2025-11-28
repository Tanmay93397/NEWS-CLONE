// data/news.js

export const articles = [
  {
    id: 1,
    slug: "delhi-pollution-levels-today",
    title: "दिल्ली में प्रदूषण का स्तर खतरनाक, स्कूलों में छुट्टी",
    category: "Delhi-NCR",
    imageUrl: "/images/delhi-pollution.jpg",
    summary:
      "दिल्ली में प्रदूषण खतरनाक स्तर पर पहुँच गया है। सरकार ने स्कूलों को बंद करने का निर्देश दिया है।",
    content: `
      दिल्ली में वायु गुणवत्ता सूचकांक (AQI) 450 के पार पहुँच गया है, जो 'गंभीर' श्रेणी में आता है।
      विशेषज्ञों ने लोगों को घर से कम बाहर निकलने की सलाह दी है। सरकार ने कई आपात कदम उठाए हैं।
    `,
    author: "Live Desk",
    date: "2025-11-27",
  },
  {
    id: 2,
    slug: "india-cricket-team-wins-series",
    title: "भारत ने रोमांचक मुकाबले में सीरीज़ अपने नाम की",
    category: "Sports",
    imageUrl: "/images/india-cricket.jpg",
    summary:
      "भारतीय टीम ने आख़िरी ओवर में जीत दर्ज कर सीरीज़ 2-1 से अपने नाम कर ली।",
    content: `
      अंतिम ओवर में भारत को 10 रनों की ज़रूरत थी। हार्दिक पांड्या और सूर्यकुमार यादव ने मिलकर
      टीम को जीत दिलाई। स्टेडियम में मौजूद दर्शकों ने ज़बरदस्त उत्साह दिखाया।
    `,
    author: "Sports Desk",
    date: "2025-11-26",
  },
  {
    id: 3,
    slug: "stock-market-rally-sensex-nifty-today",
    title: "शेयर बाजार में जबरदस्त तेजी, सेंसेक्स 1000 अंकों की छलांग",
    category: "Business",
    imageUrl: "/images/stock-market.jpg",
    summary:
      "वैश्विक संकेतों के बीच भारतीय शेयर बाजार में जोरदार खरीदारी देखने को मिली।",
    content: `
      बैंकिंग और आईटी शेयरों में सबसे ज़्यादा तेजी देखी गई। निवेशकों की संपत्ति में
      आज हज़ारों करोड़ की बढ़ोतरी हुई। विशेषज्ञों के अनुसार आने वाले दिनों में भी उतार-चढ़ाव रहेगा।
    `,
    author: "Business Desk",
    date: "2025-11-25",
  },
];

// ✅ These are plain functions – this is what we import in pages
export function getAllArticles() {
  return articles;
}

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

