import React from "react";

export const Button = ({ onClick, label, type }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: type == "danger" ? "red" : "blue",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};
