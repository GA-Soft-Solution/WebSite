import { useParams, useNavigate } from 'react-router-dom';
import ArticleDetail from '../ui/ArticleDetail';

function ArticleDetailWrapper() {
  const { id } = useParams(); // get article ID from URL
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/blogs'); // go back to news grid
  };

  return <ArticleDetail articleId={id} onBackClick={handleBackClick} />;
}

export default ArticleDetailWrapper;
