function FoodCard({ food }) {
  return (
    <div className="rounded-[5px] overflow-hidden w-[300px] bg-gray-200 m-[20px]">
      <img className="w-full h-150px" src={food.image} />
      <div className="px-[5px] py-[10px]">
        <div className="flex justify-between">
          <div>{food.title}</div>
          <div>${food.cost}</div>
        </div>
        <div className="text-[12px] text-gray-700">{food.description}</div>
        <div className="w-full flex justify-between items-center">
          <div className="flex mt-[5px] justify-between bg-red-400 px-[10px] w-[100px]">
            <div>-</div>
            <div>1</div>
            <div>+</div>
          </div>
          <div>{food.rating}</div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
