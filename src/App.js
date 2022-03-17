import "./styles.css";
import { useState } from "react";
import ReactDOM from "react-dom";

export default function MyForm() {
  const [a, setA] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = () => {
    setA(true);
  };
  if (a) {
    return <h1>my name is {name}</h1>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}
