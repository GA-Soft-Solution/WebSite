import { Sidebar } from "./Sidebar";
import { useNewsData } from "../hooks/useNewsData";
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // <-- import useParams
import ArticleContent from "./ArticleContent";

const ArticleDetail = () => {
  const { id } = useParams(); // <-- get ID from URL
  const { newsItems = [] } = useNewsData();

  const [currentArticleId, setCurrentArticleId] = useState(id);
  const article = newsItems.find((item) => item.id === currentArticleId);

  const excerptRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Scroll progress for excerpt
  useEffect(() => {
    const handleScroll = () => {
      if (!excerptRef.current) return;
      const rect = excerptRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const distance = windowHeight - rect.top;
      const scrolled = Math.min(Math.max(distance, 0), totalHeight);
      setProgress((scrolled / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="mx-auto px-4 py-8 text-center text-red-600 font-semibold">
        Article not found
      </div>
    );
  }

  return (
    <div className="flex flex-col mx-6 lg:flex-row gap-28 lg:mt-4 lg:mx-8">
      {/* Main Content */}
      <div className="flex-1 lg:pr-0">
        <ArticleContent
          article={article}
          excerptRef={excerptRef}
          progress={progress}
        />
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-1/3">
        <Sidebar
          article={article}
          allPosts={newsItems}
          onArticleClick={(id) => setCurrentArticleId(id)}
        />
      </aside>
    </div>
  );
};

export default ArticleDetail;
