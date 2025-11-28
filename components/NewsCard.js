// components/NewsCard.js
import Link from "next/link";
import Image from "next/image";

export default function NewsCard({ article }) {
  return (
    <Link href={`/news/${article.slug}`} className="block">
      <article className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden h-full flex flex-col">
        <div className="relative w-full h-44 md:h-52">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 flex flex-col gap-2 flex-1">
          <p className="text-xs font-semibold text-red-700 uppercase">
            {article.category}
          </p>
          <h2 className="font-bold text-base md:text-lg leading-snug">
            {article.title}
          </h2>
          <p className="text-sm text-gray-700">{article.summary}</p>
          <p className="mt-auto text-xs text-gray-500">
            {article.author} • {article.date}
          </p>
        </div>
      </article>
    </Link>
  );
}


