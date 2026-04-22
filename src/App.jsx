import { useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { useState } from "react";

import "./styles.scss";

function App() {
  const { token, logout, user } = useAuth();
  const [page, setPage] = useState("dashboard");

  if (!token) return <LoginPage />;

  return (
    <div className="app">
      
    
      <Sidebar
        navItems={[
          { label: "Dashboard", key: "dashboard" },
          { label: "Users", key: "users" },
        ]}
        onNavigate={setPage}
      />

    
      <div className="main">
        
     
        <Topbar userName={user?.name} onLogout={logout} />

      
        <div className="content">
          {page === "dashboard" && <DashboardPage />}
          {page === "users" && <UsersPage />}
        </div>

      </div>
    </div>
  );
}

export default App; 