// pages/index.js
import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import NewsCard from "../components/NewsCard";
import { getAllArticles } from "../data/news";
import AdBanner from "../components/AdBanner";
import AdBox from "../components/AdBox";

const CATEGORIES = ["all", "Delhi-NCR", "Sports", "Business"];

export default function Home({ articles, apiHeadlines }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const [mainArticle, ...otherArticles] = articles;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "LiveHindustan Clone",
    url: "http://localhost:3000",
    language: "hi-IN",
  };

  // Filter by search + category
  const filteredArticles = useMemo(() => {
    return otherArticles.filter((article) => {
      const matchesCategory =
        category === "all" ? true : article.category === category;
      const lower = query.toLowerCase();
      const matchesQuery =
        article.title.toLowerCase().includes(lower) ||
        article.summary.toLowerCase().includes(lower);
      return matchesCategory && matchesQuery;
    });
  }, [otherArticles, category, query]);

  return (
    <Layout
      title="Hindi News, Latest Updates"
      description="LiveHindustan style Hindi news homepage built with Next.js using mock and API news data."
    >
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Top banner ad */}
      <AdBanner text="Top Banner Ad – 728x90" />

      {/* Search + category filters */}
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="खबर खोजें (Search news)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                category === cat
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat === "all" ? "सभी" : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left: main + filtered stories */}
        <div className="lg:col-span-2">
          <h1 className="text-xl md:text-2xl font-bold mb-3">
            टॉप खबरें (Top Stories)
          </h1>

          {mainArticle && (
            <div className="mb-4">
              <NewsCard article={mainArticle} />
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            {filteredArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
            {filteredArticles.length === 0 && (
              <p className="text-sm text-gray-500 col-span-full">
                इस खोज के लिए कोई खबर नहीं मिली।
              </p>
            )}
          </div>
        </div>

        {/* Right: sidebar */}
        <aside className="space-y-4">
          <div className="bg-white rounded-lg shadow p-4 h-fit">
            <h2 className="font-bold mb-3 text-lg">ट्रेंडिंग खबरें</h2>
            <ul className="space-y-2 text-sm">
              {articles.map((article) => (
                <li
                  key={article.id}
                  className="border-b pb-2 last:border-none"
                >
                  <a
                    href={`/news/${article.slug}`}
                    className="hover:text-red-700 font-medium"
                  >
                    {article.title}
                  </a>
                  <div className="text-xs text-gray-500">
                    {article.category} • {article.date}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar ad */}
          <AdBox text="Sidebar Ad – 300x250" />

          {/* API headlines block */}
          {apiHeadlines && apiHeadlines.length > 0 && (
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="font-bold mb-3 text-lg">
                Latest from API (NewsAPI)
              </h2>
              <ul className="space-y-3 text-sm">
                {apiHeadlines.map((item, idx) => (
                  <li key={idx} className="border-b pb-2 last:border-none">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-700 font-semibold"
                    >
                      {item.title}
                    </a>
                    <div className="text-xs text-gray-500">
                      {item.source?.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </Layout>
  );
}

/**
 * DATA FETCHING
 * We use getServerSideProps here because:
 * - We’re calling a live external API (NewsAPI) which changes very frequently.
 * - Server-side rendering ensures the homepage always shows fresh headlines
 *   on every request without a rebuild.
 */
export async function getServerSideProps() {
  const localArticles = getAllArticles();
  let apiHeadlines = [];

  try {
    const apiKey = process.env.NEWS_API_KEY;
    console.log("API KEY LOADED?", !!apiKey);

    if (apiKey) {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=${apiKey}`
      );
      const data = await res.json();

      console.log("NewsAPI status:", data.status);
      console.log("Total results:", data.totalResults);

      if (data.status === "ok") {
        apiHeadlines = data.articles || [];
      }
    } else {
      console.warn("NEWS_API_KEY is NOT set in .env.local");
    }
  } catch (err) {
    console.error("Error fetching NewsAPI:", err);
  }

  console.log("API HEADLINES LENGTH:", apiHeadlines.length);

  return {
    props: {
      articles: localArticles,
      apiHeadlines,
    },
  };
}



