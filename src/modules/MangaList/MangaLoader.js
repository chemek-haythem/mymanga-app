import mangaData from "../../Mockup";

export const MangaListDataLoader = async () => {
    const resp = mangaData;
    return resp
}
export const MangaDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = mangaData[id - 1];
    return res
}