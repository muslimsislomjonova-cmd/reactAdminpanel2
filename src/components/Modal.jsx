import React, { useState } from "react";

const Modal = ({ onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input onChange={e => setName(e.target.value)} placeholder="Name" />
      <input onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={() => onSubmit({ name, email })}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default React.memo(Modal);