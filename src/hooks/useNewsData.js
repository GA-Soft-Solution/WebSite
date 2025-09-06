import { useState, useEffect } from "react";

export const useNewsData = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Load only news.json
        const newsResponse = await import("../data/news.json");
        const items = newsResponse.default;

        setNewsItems(items);
        setError(null);
      } catch (err) {
        setError("Failed to load data");
        console.error("Error loading data:", err);
      }
    };

    loadData();
  }, []);

  // ✅ Derive categories from articles
  const categories = newsItems.reduce((acc, post) => {
    if (post.category) {
      acc[post.category] = (acc[post.category] || 0) + 1;
    }
    return acc;
  }, {});

  // ✅ Derive tags from elements inside each article
  const tags = Array.from(
    new Set(newsItems.flatMap((p) => p.elements?.map((el) => el.title) || []))
  );

  // ✅ Popular posts = latest 5 articles
  const popularPosts = [...newsItems].slice(0, 5);

  const getNewsItemById = (id) => newsItems.find((item) => item.id === id);

  return {
    newsItems,
    categories,
    tags,
    popularPosts,
    error,
    getNewsItemById,
  };
};
