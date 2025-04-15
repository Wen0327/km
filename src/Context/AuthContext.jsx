// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const tokenExists = document.cookie.includes("api_key=");
    setIsAuthenticated(tokenExists);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    // 清除 cookie（實際 HttpOnly cookie 應由後端控制失效）
    document.cookie = "api_key=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
