import React from "react";

const Topbar = ({ userName, onLogout }) => {
  return (
    <div style={{ background: "#ddd", padding: 10 }}>
      {userName}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default React.memo(Topbar);