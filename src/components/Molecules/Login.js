import { useState } from 'react'
import axios from 'axios'
import { Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'

function Login({ setLoginModal, applyUser, setIsModal }) {
  const [errorMessage, setErrorMessage] = useState(null)

  function onFinish(obj) {
    const { email, password } = obj
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
          applyUser()
          setIsModal(false)
        } else {
          setErrorMessage(obj.msg)
        }
      })
      .catch((err) => console.error(err))
  }

  return (
    <div
      style={{ transform: 'translate(-50%, -50%)' }}
      className='p-[20px] absolute top-[50%] left-[50%] bg-gray-100 w-[500px]'
    >
      <div className='text-[30px] mb-[20px]'>Login</div>
      <Form
        name='normal_login'
        className='login-form w-[350px]'
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name='email'
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input
            prefix={<MailOutlined className='site-form-item-icon' />}
            placeholder='Email'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item className='mb-[10px]'>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <span className='cursor-pointer login-form-forgot text-[#1677ff]'>Forgot password</span>
        </Form.Item>
        {errorMessage && <div>{errorMessage}</div>}
        <Form.Item>
          <Button type='primary' htmlType='submit' className='bg-[#1677ff]'>
            Log in
          </Button>
          <div className='mt-[10px]'>
            <div
              onClick={(e) => {
                e.preventDefault()
                setLoginModal(false)
              }}
              className='cursor-pointer login-form-forgot text-[#1677ff]'
            >
              Don't have an account? register now
            </div>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
