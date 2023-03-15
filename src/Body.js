import FoodCard from "./components/FoodCard";
import foodList from "./utils/Food-data";
import Grid from '@mui/material/Grid'

function Body() {
  return (
    <Grid spacing={4} container className="p-[20px]" >
      {foodList.map((food) => (
        <FoodCard food={food} />
      ))}
    </Grid>
  );
}

export default Body;
