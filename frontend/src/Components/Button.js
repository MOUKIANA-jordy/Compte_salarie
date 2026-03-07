import React from "react";

export default function Button({ title, onClick }) {
  return (
    <button style={styles.button} onClick={onClick}>
      {title}
    </button>
  );
}

const styles = {
  button: {
    backgroundColor: "#2E86DE",
    padding: "15px",
    borderRadius: "8px",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
};
