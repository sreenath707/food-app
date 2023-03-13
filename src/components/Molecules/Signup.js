import { TextField } from '@mui/material'
import { Button } from '@mui/material'

function Signup({setLoginModal}) {
  return (
    <div
      style={{ transform: 'translate(-50%, -50%)' }}
      className='p-[20px] absolute top-[50%] left-[50%] bg-gray-100 w-[500px]'
    >
      <div className='text-[30px]'>Sign Up</div>
      <div>
        <div className='mt-[10px]'>
          <TextField
            className='w-[300px]'
            label='User name'
            variant='standard'
          />
        </div>
        <div className='mt-[10px]'>
          <TextField className='w-[300px]' label='Email' variant='standard' />
        </div>
        <div className='mt-[10px] mb-[10px]'>
          <TextField
            className='w-[300px]'
            type='password'
            label='Password'
            variant='standard'
          />
        </div>
        <div
          className='cursor-pointer text-[14px] text-blue-800 mb-[10px]'
          onClick={() => {
            setLoginModal(true);
          }}
        >
          Already have an account? Login.
        </div>
        <Button variant='outlined'>Sign up</Button>
      </div>
    </div>
  )
}

export default Signup
