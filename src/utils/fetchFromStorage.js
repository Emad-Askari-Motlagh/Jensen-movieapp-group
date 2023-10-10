export default function FetchFromStorage(item) {
  console.log(item);
  try {
    if (!item) {
      throw new Error("Invalid key");
    }
    const res = localStorage.getItem(item);
    const movies = JSON.parse(res);
    return movies;
  } catch (error) {
    throw error;
  }
}
