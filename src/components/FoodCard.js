import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useRef, useState } from "react";

function FoodCard({ food }) {
  const [limit, setLimit] = useState(true);
  let desRef = useRef();
  let desOuterRef = useRef();
  const [desHeight, setDesHeight] = useState(0);
  const [desOuterHeight, setDesOuterHeight] = useState(0);
  const descriptionClass = !limit
    ? "text-[12px] text-gray-700"
    : "overflow-hidden leading-normal max-h-[calc(1em*1.5)] text-[12px] text-gray-700";

  function handleWindowResize() {
    setDesHeight(desRef?.current?.offsetHeight);
    setDesOuterHeight(desOuterRef?.current?.offsetHeight);
  }
  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
  }, []);
  if (food.name == "Egg Toast") console.log(desHeight, desOuterHeight);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
        }}
        className="max-w-[320px] rounded-[5px] overflow-hidden bg-gray-100"
      >
        <img className="w-full h-[200px]" alt="food-img" src={food.image} />
        <div className="px-[10px] py-[10px]">
          <div className="flex justify-between">
            <div>{food.name}</div>
            <div>${food.cost}</div>
          </div>
          <div className="text-[12px] min-h-[calc(1em*1.5*2)]">
            <div ref={desOuterRef} className={descriptionClass}>
              <div ref={desRef}>{food.description}</div>
            </div>
            {desHeight === desOuterHeight ? null : (
              <div
                className="leading-normal text-[12px] cursor-pointer"
                onClick={() => {
                  setLimit((prev) => !prev);
                }}
              >
                {limit ? "....more" : "....less"}
              </div>
            )}
          </div>
          <div className="w-full flex justify-end items-center">
            {/* <div className="bg-green-600 p-[5px] font-bold rounded-[5px] text-[12px] text-white flex items-center">
              <div className="pt-[3px]">{food.rating}</div>
              <StarIcon fontSize="small" />
            </div> */}
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default FoodCard;
