import React from "react";

const WatchCard = ({ id, name, image, category }) => {
  return (
    <div
      data-testid={`watch-card-wrapper-${id}`}
      style={{
        border: "2px solid black",
        margin: "20px",
        height: "250px",
      }}>
      <div>
        <img
          data-testid="watch-card-image"
          alt="watch"
          src={image}
          style={{
            width: "100%",
            maxHeight: "200px",
          }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <div data-testid="watch-name" style={{ fontSize: "20px" }}>
          {name}
        </div>
        <div data-testid="watch-category">{category}</div>
      </div>
    </div>
  );
};

export default WatchCard;
