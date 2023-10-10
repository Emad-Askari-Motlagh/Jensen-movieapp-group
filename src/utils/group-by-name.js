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

export { groupedByGenre };
