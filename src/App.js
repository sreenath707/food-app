import Navbar from "./Navbar";
import Body from "./Body";
import { useState, useEffect } from "react";
import Login from "./components/Molecules/Login";
import Signup from "./components/Molecules/Signup";
import { Modal } from "@mui/material";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Molecules/Profile";
import useUser from "./hooks/useUser";
import { AxiosPrivate, AxiosReq } from "./utils/Axios";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const { setUser, setLoading } = useUser();
  const [foodList, setFoodList] = useState({ data: [], loading: true });
  function applyUser() {
    setLoading(true);
    AxiosPrivate.post("/user")
      .then((data) => {
        setUser(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  function AttachInterceptors() {
    AxiosPrivate.interceptors.request.use((request) => {
      request.headers = {
        token: `bearer ${localStorage.getItem("token")}`,
      };
      return request;
    });

    AxiosPrivate.interceptors.request.use(
      (response) => {
        console.log("this is response", response);
        return response;
      },
      (err) => {
        console.log("request error", err);
      }
    );
  }
  useEffect(() => {
    setFoodList((prev) => ({ ...prev, loading: true }));
    AttachInterceptors();
    applyUser();
    client
      .query({
        query: gql`
          {
            food {
              name
              image
              cost
              rating
              description
            }
          }
        `,
      })
      .then((data) => setFoodList({ data: data.data.food, loading: false }))
      .catch((err) => {
        setFoodList({ data: [], loading: false });
        console.log(err);
      });
  }, []);

  function logout() {
    localStorage.setItem("token", "");
    localStorage.setItem("refreshToken", "");
    setUser(null);
  }

  const [LoginModal, setLoginModal] = useState(false);
  const [isModal, setIsModal] = useState(false);
  return (
    <BrowserRouter>
      <Navbar setIsModal={setIsModal} logout={logout} />
      <Routes>
        <Route path="/" element={<Body foodList={foodList} />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Modal
        open={isModal}
        onClose={() => {
          setIsModal(false);
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
    </BrowserRouter>
  );
}

export default App;
