import Navbar from './Navbar'
import Body from './Body'
import { useState, useEffect } from 'react'
import Login from './components/Molecules/Login'
import Signup from './components/Molecules/Signup'
import { Modal } from '@mui/material'
import axios from 'axios'

function App() {
  const [user, setUser] = useState(null)
  function applyUser() {
    axios
      .post('http://localhost:8080/user', {
        token: localStorage.getItem('token'),
      })
      .then((data) => {
        setUser(data.data)
      })
      .catch((err) => console.error(err))
  }
  useEffect(() => {
    applyUser()
  }, [])

  function logout() {
    localStorage.setItem('token', null)
    setUser(null)
  }

  const [LoginModal, setLoginModal] = useState(false)
  const [isModal, setIsModal] = useState(false)
  return (
    <>
      <Navbar user={user} setIsModal={setIsModal} logout={logout} />
      <Body />
      <Modal
        open={isModal}
        onClose={() => {
          setIsModal(false)
        }}
      >
        {LoginModal ? (
          <Login setIsModal={setIsModal} applyUser={applyUser} setLoginModal={setLoginModal} />
        ) : (
          <Signup setIsModal={setIsModal} applyUser={applyUser} setLoginModal={setLoginModal} />
        )}
      </Modal>
    </>
  )
}

export default App
