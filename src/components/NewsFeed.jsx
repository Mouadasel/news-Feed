import NewsArticle from "./NewsArticle";
import PropTypes from "prop-types";
function NewsFeed(props) {
  const { articles } = props;
  return (
    <div>
      {articles.map((article) => (
        <NewsArticle key={JSON.stringify(article)} {...article} />
      ))}
    </div>
  );

}
NewsFeed.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired, // Ensures articles is an array of objects and required
};
export default NewsFeed;
