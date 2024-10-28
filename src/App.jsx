
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks]=useState([]);
  const [readingTime, setReadingTime]=useState(0)

  const handleAddToBookmark= blog=>{
    const newBookmarks=[...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead=(id, time)=>{
    setReadingTime(readingTime+time);
    //remove the road blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex mx-auto w-10/12">
        <Blogs handleAddToBookmark={handleAddToBookmark} 
        handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks}
        readingTime={readingTime}
        ></Bookmarks>
      </div>
    </>
  );
}

export default App;
