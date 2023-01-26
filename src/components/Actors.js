import React from "react";
import { actors } from "../data";

function Actors() {

  const actorItems = actors.map((items) => (
    <div key={items.name}>
      {items.name}
      <ul>
        <li>{items.movies}</li>
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Actors Page</h1>
      {actorItems}
    </div>
  );
}

export default Actors;