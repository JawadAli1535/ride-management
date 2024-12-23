// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const login = (token, userData) => {
//     localStorage.setItem("token", token);
//     localStorage.setItem("user", JSON.stringify(userData));
//     setUser(userData);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     // setUser(null);
//   };

//   const value = { user, login, logout };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

import { createContext, useContext, useState } from "react";

// Create context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (token, user) => {
    setToken(token);
    setUser(user);
    localStorage.setItem("token", token); // Save token to localStorage
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token"); // Clear token from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use Auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
