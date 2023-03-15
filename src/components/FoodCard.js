import Grid from '@mui/material/Grid'
import StarIcon from '@mui/icons-material/Star'

function FoodCard({ food }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <div
        style={{
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
        }}
        className='rounded-[5px] overflow-hidden bg-gray-100'
      >
        <img className='w-full h-150px' alt='food-img' src={food.image} />
        <div className='px-[10px] py-[10px]'>
          <div className='flex justify-between'>
            <div>{food.title}</div>
            <div>${food.cost}</div>
          </div>
          <div className='text-[12px] text-gray-700'>{food.description}</div>
          <div className='w-full flex justify-end items-center'>
            <div className='bg-green-600 p-[5px] rounded-[5px] text-[14px] text-white flex items-center'>
              <StarIcon fontSize="small" />
              <div>{food.rating}</div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default FoodCard
