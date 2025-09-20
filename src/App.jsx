import { useState } from "react";

export default function App() {
  // State to hold input value
  const [name, setName] = useState("");

  // Handler for input change
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Form Input Example</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={{ padding: "0.5rem", marginRight: "1rem" }}
      />

      <p style={{ marginTop: "1rem" }}>
        {name ? `Hello, ${name}!` : "Please enter your name above"}
      </p>
    </div>
  );
}
