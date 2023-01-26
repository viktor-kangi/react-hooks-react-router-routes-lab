import React from "react";
import { directors } from "../data";

function Directors() {

  const directosItems = directors.map((items) => (
    <div key={items.name}>
      {items.name}
      <ul>
        <li>{items.movies}</li>
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Directors Page</h1>
      {directosItems}
    </div>
  );
}

export default Directors;