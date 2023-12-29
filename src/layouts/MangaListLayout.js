import { Outlet } from "react-router-dom";

const MangaListLayout = () => {
  return (
    <div className="mangalist-layout">
      <h2>Mangalist</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
      
      <Outlet />
    </div>
  );
}

export default MangaListLayout;

