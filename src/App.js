import Navbar from './Navbar'
import Body from './Body'
import { useState, useEffect } from 'react'
import Login from './components/Molecules/Login'
import Signup from './components/Molecules/Signup'
import { Modal } from '@mui/material'
import axios from 'axios'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
})

function App() {
  const [user, setUser] = useState(null)
  const [foodList, setFoodList] = useState([])
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
    client.query({
      query: gql`
        {
        food{
          name,
          image,
          cost,
          rating,
          description,
        }}
      `,
    })
    .then(data=>setFoodList(data.data.food))
    .catch(err=>console.log(err));
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
      <Body foodList={foodList} />
      <Modal
        open={isModal}
        onClose={() => {
          setIsModal(false)
        }}
      >
        {LoginModal ? (
          <Login
            setIsModal={setIsModal}
            applyUser={applyUser}
            setLoginModal={setLoginModal}
          />
        ) : (
          <Signup
            setIsModal={setIsModal}
            applyUser={applyUser}
            setLoginModal={setLoginModal}
          />
        )}
      </Modal>
    </>
  )
}

export default App
