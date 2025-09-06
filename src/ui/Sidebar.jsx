import PropTypes from "prop-types";
import { useState } from "react";
import { SearchBox } from "./SearchBox";
import { RecentPosts } from "./RecentPosts";
import { Categories } from "./Categories";
import { Tags } from "./Tags";

export const Sidebar = ({ article, allPosts, onArticleClick }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8 relative">
      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        allPosts={allPosts}
        onArticleClick={onArticleClick}
      />

      <RecentPosts allPosts={allPosts} onArticleClick={onArticleClick} />

      <Categories allPosts={allPosts} />

      <Tags article={article} />
    </div>
  );
};

Sidebar.propTypes = {
  article: PropTypes.object.isRequired,
  allPosts: PropTypes.array.isRequired,
  onArticleClick: PropTypes.func.isRequired,
};
