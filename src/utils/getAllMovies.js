import axios from "axios";

export default async function getALlMovies() {
  try {
    const res = await axios.get("/movies.json");
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
