import React from "react";

const ConfirmDialog = ({ onConfirm, onClose }) => {
  return (
    <div>
      <p>Rostdan ochirasizmi?</p>
      <button onClick={onConfirm}>Ha</button>
      <button onClick={onClose}>Yoq</button>
    </div>
  );
};

export default React.memo(ConfirmDialog);