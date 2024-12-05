import React from "react";
import { useState, useEffect } from "react";

function Effect() {
  const [starWarsData, setStarWarsData] = React.useState({});

  React.useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => setStarWarsData(data))
      .catch((err) => console.log("error occured when fethcing data"));
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default Effect;
