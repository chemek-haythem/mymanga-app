import MangaCard from "../../components/MangaCard/MangaCard";
import { useLoaderData, useParams } from 'react-router-dom'

export default function MangaDetails() {
  const { id } = useParams();
  const manga = useLoaderData()

  return (
    <div className="manga-details" key={id}>
      <h2>Details for {manga.title}</h2>
        <MangaCard
            title={manga.title}
            description={manga.description}
            image={manga.image}
        />
        <p>Price: {manga.price}</p>
      <div className="details">
        <p>description: {manga.description}</p>
      </div>
    </div>
  )
}