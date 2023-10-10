const groupedByGenre1 = function (movies, genreType) {
  return movies.reduce((acc, movie) => {
    // Split genre by comma and trim each genre to remove whitespace
    const genres = movie.genre.split(",").map((genre) => genre.trim());

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

const groupedByGenre = (array) => {
  const groupedMovies = {
    trending: [],
  };

  array.forEach((movie) => {
    if (movie.isTrending) {
      groupedMovies.trending.push(movie);
    } else {
      movie.genre.split(",").forEach((genre) => {
        const trimmedGenre = genre.trim();
        if (!groupedMovies[trimmedGenre]) {
          groupedMovies[trimmedGenre] = [];
        }
        groupedMovies[trimmedGenre].push(movie);
      });
    }
  });

  return groupedMovies;
};

export { groupedByGenre, groupedByGenre1 };
