import { createContext } from "react";
import { useState } from "react";

export const userContext = createContext();
export const userSetContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={user}>
      <userSetContext.Provider value={setUser}>
        {children}
      </userSetContext.Provider>
    </userContext.Provider>
  );
}

export default UserProvider;
