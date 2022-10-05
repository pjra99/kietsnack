import React from "react";

function Canteens(props) {
  return (
    <img
      src={props.img}
      style={{
        width: "350px",
        height: "250px",
        margin: "1rem",
        borderRadius: "10px",
        boxShadow: "8px 12px 12px grey",
        // marginBottom: '-20px'
      }}
      alt="some canteen img"
    />
  );
}
export default Canteens;
