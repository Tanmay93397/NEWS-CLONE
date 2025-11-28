import { getAllArticles, getArticleBySlug } from "../../data/news";
import Layout from "../../components/Layout";
import Image from "next/image";

export default function NewsPage({ article }) {
  if (!article) return <div>Article not found</div>;

  return (
    <Layout title={article.title} description={article.summary}>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-2">{article.title}</h1>

        <div className="flex gap-3 text-sm text-gray-500 mb-4">
          <span>{article.category}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>

        <div className="relative w-full h-64 mb-4">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover rounded"
          />
        </div>

        <p className="leading-relaxed text-lg">{article.content}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const articles = getAllArticles();
  const paths = articles.map((a) => ({
    params: { slug: a.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug);

  return {
    props: { article },
  };
}
