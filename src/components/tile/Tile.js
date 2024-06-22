import React from "react";

export const Tile = ({ name, description }) => {
  // const descriptionArr = Object.values(description);

  return (
    <div className="tile-container">
      <p className='tile-title'>{name}</p>
      {
        Object.values(description).map((item, index) => {
          return (
            <p className='tile' key={`tile-${item[index]}`}>{item}</p>
          )
        })
      }
    </div>
  );
};
