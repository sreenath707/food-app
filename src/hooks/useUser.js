import { useContext } from "react";
import { userContext, userSetContext } from "../context/userContext";

function useUser() {
  const user = useContext(userContext);
  const setUser = useContext(userSetContext);

  return { user, setUser };
}

export default useUser;
