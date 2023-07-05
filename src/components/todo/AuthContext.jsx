import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, SetAuthenticated] = useState(false);

  const login = (username, password) => {
    if (username === "qwe" && password === "asd") {
      SetAuthenticated(true);
      return true;
    } else {
      SetAuthenticated(false);
      return false;
    }
  };

  const logout = () => {
    SetAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
