import FoodCard from "./components/FoodCard";
import Grid from "@mui/material/Grid";
import { spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function Body({ foodList }) {
  return (
    <>
      {foodList.loading ? (
        <LoadingOutlined
          className="text-blue-700 text-[50px] w-full h-full m-auto mt-[200px]"
          spin
        />
      ) : (
        <Grid spacing={4} container className="p-[20px]">
          {foodList.data.map((food) => (
            <FoodCard food={food} />
          ))}
        </Grid>
      )}
    </>
  );
}

export default Body;
