import { useContext } from "react";
import { userContext, userSetContext } from "../context/userContext";

function useUser() {
  const userObj = useContext(userContext);
  const setObj = useContext(userSetContext);

  return {
    user: userObj.user,
    setUser: setObj.setUser,
    loading: userObj.loading,
    setLoading: setObj.setLoading,
  };
}

export default useUser;
