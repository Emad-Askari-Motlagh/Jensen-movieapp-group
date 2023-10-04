import Loading from "components/Loading";
import React from "react";

export default function MovieCollection({
  movies,
  allMoviesLoading,
  collectionName,
}) {
  return (
    <div>
      <ul>
        <div>
          <span>Genre:</span>
          <span> {collectionName}</span>
        </div>

        {allMoviesLoading && <Loading></Loading>}
        {movies?.length > 0 &&
          movies.map((res, i) => {
            return <li key={i}>{res?.title}</li>;
          })}
      </ul>
    </div>
  );
}
