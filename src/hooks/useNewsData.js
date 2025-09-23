import { useState, useEffect } from "react";

export const useNewsData = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Load the news.js module dynamically
        const newsResponse = await import("../data/news.js");
        const items = newsResponse.default || [];

        setNewsItems(items);
        setError(null);
      } catch (err) {
        setError("Failed to load data");
        console.error("Error loading data:", err);
        setNewsItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // ✅ Derive categories safely
  const categories = (newsItems || []).reduce((acc, post) => {
    if (post.category) {
      acc[post.category] = (acc[post.category] || 0) + 1;
    }
    return acc;
  }, {});

  // ✅ Derive tags safely
  const tags = Array.from(
    new Set(
      (newsItems || []).flatMap((p) => p.elements?.map((el) => el.title) || [])
    )
  );

  // ✅ Popular posts = latest 5 articles
  const popularPosts = [...(newsItems || [])].slice(-5).reverse();

  const getNewsItemById = (id) =>
    (newsItems || []).find((item) => item.id === id);

  return {
    newsItems,
    categories,
    tags,
    popularPosts,
    error,
    loading,
    getNewsItemById,
  };
};
