const groupedByGenre = (array, name) => {
  const result = array.reduce((acc, movie) => {
    // Split genre by comma and trim each genre to remove whitespace
    const genres = movie[name].split(",").map((genre) => genre.trim());

    genres.forEach((genre) => {
      // If the genre is not yet a key in the accumulator, create it with an empty array
      if (!acc[genre]) {
        acc[genre] = [];
      }

      // Push the movie to the respective genre
      acc[genre].push(movie);
    });

    return acc;
  }, {});
  return result;
};
export { groupedByGenre };
