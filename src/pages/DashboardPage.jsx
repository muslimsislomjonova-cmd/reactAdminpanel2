import { useData } from "../context/DataContext";
import { useEffect } from "react";

export default function DashboardPage() {
  const { users, fetchUsers } = useData();

  useEffect(() => {
    fetchUsers();
  }, []);

  return <h2>Users soni: {users.length}</h2>;
}