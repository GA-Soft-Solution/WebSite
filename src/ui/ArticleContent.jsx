import PropTypes from "prop-types";
import { Clock, User } from "lucide-react";
import right from "/Blog_Image/right.png";

const ArticleContent = ({ article, excerptRef, progress }) => {
  return (
    <article className="text-gray-500 overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="md:h-[38rem] lg:h-[30rem] xl:h-[38rem] 2xl:h-[48rem]"
      />

      {/* Header info */}
      <div className="flex items-center justify-between mt-8 text-xs mb-4">
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1 text-blue-500" />
          <span className="mr-4">{article.date}</span>
          <User className="w-4 h-4 mr-1 text-blue-500" />
          <span>{article.author}</span>
        </div>
        <div className="flex items-center">
          <span className="bg-gray-200 rounded-full px-3 font-semibold p-1 mr-2">{article.category}</span>
        </div>
      </div>

      <div className="p-2 md:p-8 text-gray-600 text-l leading-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-black my-1 leading-tight">{article.title}</h1>

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-8">{article.introParagraph}</div>

        {/* Excerpt Highlight */}
        {article.excerpt && (
          <div
            ref={excerptRef}
            className="relative text-xl font-bold bg-blue-50 p-6 rounded-lg italic mb-6"
          >
            <div
              className="absolute top-0 left-0 w-1 bg-blue-600 rounded-full transition-all"
              style={{ height: `${progress}%` }}
            ></div>
            <p className="text-lg text-black ml-3">{article.excerpt}</p>
          </div>
        )}

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">{article.content}</div>

        {/* Image Grid */}
        {article.gridImages?.length > 0 && (
          <div className="grid grid-cols-3 my-8 justify-center gap-4">
            {article.gridImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`small-${index + 1}`}
                className="object-cover rounded-lg"
              />
            ))}
          </div>
        )}

        {/* Elements */}
        {article.elements?.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-black mb-4">
              Four major elements that we offer:
            </h2>
            <ul className="grid grid-cols-2 gap-8">
              {article.elements.map((element, index) => (
                <li key={index} className="flex items-center">
                  <img src={right} alt="right" className="mr-2 mt-1 h-2 flex-shrink-0" />
                  <p className="flex-1">{element.title}</p>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Additional Content */}
        {article.additionalContent && (
          <div className="prose prose-lg max-w-none mb-8">{article.additionalContent}</div>
        )}
      </div>
    </article>
  );
};

ArticleContent.propTypes = {
  article: PropTypes.object.isRequired,
  excerptRef: PropTypes.object.isRequired,
  progress: PropTypes.number.isRequired,
};

export default ArticleContent;