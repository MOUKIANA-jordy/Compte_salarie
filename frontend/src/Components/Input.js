import React from "react";

export default function Input({
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <input
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
    />
  );
}

const styles = {
  input: {
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "12px",
    marginTop: "10px",
  },
};
