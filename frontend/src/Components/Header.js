import React from "react";

export default function Header({ title }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#2E86DE",
    padding: "20px",
    textAlign: "center",
  },

  title: {
    color: "#fff",
    margin: 0,
  },
};
