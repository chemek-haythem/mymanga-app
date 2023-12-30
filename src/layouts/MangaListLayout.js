import { Outlet } from "react-router-dom";

const MangaListLayout = () => {
  return (
    <div className="mangalist-layout">
      <h2>Our Manga List</h2>
      <p>Welcome to our extensive collection of manga! Dive into a captivating world where imagination knows no bounds. Our curated selection spans various genres, from action-packed adventures to heartwarming romances and mind-bending mysteries. Each manga tells a unique story, transporting readers to vibrant worlds filled with rich characters and compelling narratives. Whether you're a seasoned manga enthusiast or a newcomer eager to explore, our diverse catalog offers something for everyone. Explore our list and embark on an unforgettable journey through the pages of these beautifully illustrated tales</p>
      
      <Outlet />
    </div>
  );
}

export default MangaListLayout;

