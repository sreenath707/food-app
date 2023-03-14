import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'

function Signup({ setLoginModal }) {
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div
      style={{ transform: 'translate(-50%, -50%)' }}
      className='p-[20px] absolute top-[50%] left-[50%] bg-gray-100 w-[500px]'
    >
      <div className='text-[30px]'>Sign Up</div>
      <div>
        <div className='mt-[10px]'>
          <TextField
            onChange={(e) => setUserName(e.target.value)}
            className='w-[300px]'
            label='User name'
            variant='standard'
          />
        </div>
        <div className='mt-[10px]'>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            className='w-[300px]'
            label='Email'
            variant='standard'
          />
        </div>
        <div className='mt-[10px] mb-[10px]'>
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            className='w-[300px]'
            type='password'
            label='Password'
            variant='standard'
          />
        </div>
        <div
          className='cursor-pointer text-[14px] text-blue-800 mb-[10px]'
          onClick={() => {
            setLoginModal(true)
          }}
        >
          Already have an account? Login.
        </div>
        <Button onClick={() => {
          axios.post("http://localhost:8080/signup",{username:userName,email: email,password: password})
            .then(data=>console.log(data.data))
            .catch(err=>console.error(err))
        }} variant='outlined'>
          Sign up
        </Button>
      </div>
    </div>
  )
}

export default Signup
