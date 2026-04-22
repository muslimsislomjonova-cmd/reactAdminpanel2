import { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import Table from "../components/Table";
import Modal from "../components/Modal";

export default function UsersPage() {
  const { users, fetchUsers, createUser, deleteUser } = useData();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Add</button>

      {open && (
        <Modal
          onClose={() => setOpen(false)}
          onSubmit={(data) => {
            createUser(data);
            setOpen(false);
          }}
        />
      )}

      <Table data={users} onDelete={deleteUser} />
    </div>
  );
}