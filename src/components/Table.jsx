import React from "react";

const Table = ({ data, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Ism</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map(u => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>
              <button onClick={() => onDelete(u.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(Table);