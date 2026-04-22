import { createContext, useContext, useState } from "react";
import { fakeApi } from "../api/fakeApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null 
  );
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const login = async (email, password) => {
    try {
    
      const res = await fakeApi.login(email, password);
    
      if (!res || !res.token) {
         throw new Error("Malumotlar notogri");
      }

      setUser(res.user);
      setToken(res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("token", res.token);
      
      return { success: true }; 
    } catch (error) {
      console.error("Login xatosi:", error);
      
      throw error; 
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);