import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const darkValue = localStorage.getItem("isDark");
    return darkValue ? JSON.parse(darkValue) : false;
  });

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  const lightToDark = () => setIsDark(true);
  const darkToLight = () => setIsDark(false);

  return (
    <>
      <ThemeContext.Provider value={{ isDark, lightToDark, darkToLight }}>
        {children}
        {isDark && (
          <style>
            {`body{
          background-color:black;
          color:white;
        }`}
          </style>
        )}
      </ThemeContext.Provider>
    </>
  );
};
export default ThemeProvider;
