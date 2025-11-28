// components/Layout.js
import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, title, description }) {
  const pageTitle = title
    ? `${title} | LiveHindustan Clone`
    : "LiveHindustan Clone | Hindi News Portal";

  const pageDescription =
    description ||
    "Hindi news portal clone built with Next.js using mock news data.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-4 lg:py-6">{children}</main>
      </div>
    </>
  );
}

