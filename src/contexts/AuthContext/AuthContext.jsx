import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    const isAuthValue = localStorage.getItem("isAuth");
    return isAuthValue ? JSON.parse(isAuthValue) : false;
  });

  useEffect(() => {
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
  }, [isAuth]);

  const loginHandler = () => setIsAuth(true);
  const logoutHandler = () => setIsAuth(false);

  return (
    <AuthContext.Provider value={{ isAuth, loginHandler, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
