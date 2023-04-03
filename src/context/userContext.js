import { createContext } from "react";
import { useState } from "react";

export const userContext = createContext();
export const userSetContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  return (
    <userContext.Provider value={{ user: user, loading: loading }}>
      <userSetContext.Provider
        value={{ setUser: setUser, setLoading: setLoading }}
      >
        {children}
      </userSetContext.Provider>
    </userContext.Provider>
  );
}

export default UserProvider;
