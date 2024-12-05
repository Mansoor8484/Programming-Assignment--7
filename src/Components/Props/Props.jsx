import React from "react";

function Props(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.propExample}</h1>
    </div>
  );
}

export default Props;
