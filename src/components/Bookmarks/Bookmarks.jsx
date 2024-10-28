import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md: w-1/3 bg-slate-200 ml-4 mt-2 p-4">
     <div>
          <h3 className="text-4xl text-center">Reading Time: {readingTime} min</h3>
     </div>
      <h2 className="text-3xl text-center">
          Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
};

export default Bookmarks;