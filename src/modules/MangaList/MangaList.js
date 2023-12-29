import React from "react";
import { Link, useLoaderData } from "react-router-dom"
import MangaCard from "../../components/MangaCard/MangaCard";


const MangaList = () => {
    const mangaListData = useLoaderData();
    return (
        <div className="mangalist">
        {mangaListData.map(manga => (
          <Link to={manga.id.toString()} key={manga.id}>
            <MangaCard
                title={manga.title}
                description={manga.description}
                image={manga.image}
            />
          </Link>
        ))}
      </div>
    );
};

export default MangaList;