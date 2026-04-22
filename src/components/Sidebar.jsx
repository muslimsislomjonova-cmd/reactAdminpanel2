import React from "react";

const Sidebar = ({ navItems, onNavigate, currentPage }) => {
  return (
    <div className="sidebar">
      {navItems.map(i => (
        <div 
          key={i.key} 
          className={currentPage === i.key ? "active" : ""}
          onClick={() => onNavigate(i.key)}
        >
          {i.label}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Sidebar);