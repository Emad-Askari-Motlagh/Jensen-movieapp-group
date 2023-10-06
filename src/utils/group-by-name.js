const groupedByGenre = (array, name) => {
  const genres = [];
  array.map((res) => {
    genres.push(res.genre);
  });
  return array.reduce((acc, movie) => {
    // Split genre by comma and trim each genre to remove whitespace

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
};
export { groupedByGenre };
