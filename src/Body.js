import { useState } from "react";
import FoodCard from "./components/FoodCard";
import foodList from "./utils/Food-data";

function Body() {
  return (
    <div className="flex flex-wrap p-[20px]">
      {foodList.map((food) => (
        <FoodCard food={food} />
      ))}
    </div>
  );
}

export default Body;
