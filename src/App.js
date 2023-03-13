import Navbar from './Navbar'
import Body from './Body'
import { useState } from 'react'
import Login from './components/Molecules/Login'
import Signup from './components/Molecules/Signup'
import { Modal } from '@mui/material'

function App() {
  const [LoginModal, setLoginModal] = useState(false)
  const [isModal, setIsModal] = useState(false)
  return (
    <>
      <Navbar setIsModal={setIsModal} />
      <Body />
      <Modal
        open={isModal}
        onClose={() => {
          setIsModal(false)
        }}
      >
        {LoginModal ? (
          <Login setLoginModal={setLoginModal} />
        ) : (
          <Signup setLoginModal={setLoginModal} />
        )}
      </Modal>
    </>
  )
}

export default App
