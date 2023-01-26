import React from "react";
import { movies } from "../data";

function Movies() {

  const movieItems = movies.map((items) => (
    <div key={items.title}>
      <h2>{items.title}</h2>
      <p>{items.time}</p>
      <ul>
        <li >{items.genres}</li>
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Movies Page</h1>
      {movieItems}
    </div>
  );
}

export default Movies;