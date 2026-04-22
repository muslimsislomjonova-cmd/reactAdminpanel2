import { createContext, useContext, useState, useCallback } from "react";
import { fakeApi } from "../api/fakeApi";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const data = await fakeApi.getUsers();
    setUsers(data);
  }, []);

  const createUser = async (user) => {
    await fakeApi.createUser(user);
    fetchUsers();
  };

  const updateUser = async (id, user) => {
    await fakeApi.updateUser(id, user);
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await fakeApi.deleteUser(id);
    fetchUsers();
  };

  return (
    <DataContext.Provider value={{
      users,
      fetchUsers,
      createUser,
      updateUser,
      deleteUser
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);