import axios from "axios";

export default async function getALlMovies() {
  try {
    // Fixade lite i Axios baseURL: process.env.PUBLIC_URL så Axios hittar movies.json i public foldern varje gång.
    const res = await axios.get("/movies.json", {
      baseURL: process.env.PUBLIC_URL,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
