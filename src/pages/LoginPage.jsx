import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  

  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("1234");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      await login(email, password);
    } catch (err) {
      setError("Login yoki parol noto'g'ri!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Kirish</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <input 
        type="email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
      />
      
      <button type="submit">Kirish</button>
    </form>
  );
}