import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({tiles}) => {
  return (
    <div>
      {tiles.map((tile, index) => {
    let { name, ...description } = tile
    return (
      <Tile key={index} name={name} description={description} />
    )
  })}
    </div>
  );
};
