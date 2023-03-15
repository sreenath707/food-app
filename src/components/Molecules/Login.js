import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'

function Login({ setLoginModal, applyUser, setIsModal }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  return (
    <div
      style={{ transform: 'translate(-50%, -50%)' }}
      className='p-[20px] absolute top-[50%] left-[50%] bg-gray-100 w-[500px]'
    >
      <div className='text-[30px]'>Login</div>
      <div>
        <div className='mt-[10px]'>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            className='w-[300px]'
            label='Email'
            variant='standard'
          />
        </div>
        <div className='mt-[10px] mb-[20px]'>
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
            setLoginModal(false)
          }}
        >
          Already have an account? Login.
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <Button
          onClick={() => {
            axios
              .post('http://localhost:8080/login', {
                email: email,
                password: password,
              })
              .then((data) => {
                const obj = data.data
                console.log(obj)
                if (obj.loggedIn) {
                  localStorage.setItem('token', obj.token)
                  setErrorMessage(null)
                  applyUser();
                  setIsModal(false);
                } else {
                  setErrorMessage(obj.msg)
                }
              })
              .catch((err) => console.error(err))
          }}
          variant='outlined'
        >
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
