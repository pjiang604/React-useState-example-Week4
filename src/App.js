import "./styles.css";
import { useState } from "react";

function random(n) {
  return Math.floor(Math.random() * n);
}

function randomColor() {
  return `rgb(${random(255)},${random(255)},${random(255)})`;
}

export default function App() {
  const [name, setName] = useState("John Lennon");
  const [color, setColor] = useState(randomColor());
  const [hover, setHover] = useState(false);
  console.log(name);

  function handleClick(e) {
    const target = e.target;
    const input = target.previousSibling;
    setName(input.value);
    console.log(name);
  }

  function handleClick2(e) {
    setColor(randomColor());
  }

  function handleMouseOver(e) {
    setHover(true);
  }

  function handleMouseOut(e) {
    setHover(false);
  }

  return (
    <div className="App">
      <p>Hello, {name}</p>
      <input type="type" />
      <button onClick={handleClick}> Update name</button>

      <div
        className="tile"
        style={{
          backgroundColor: color,
          border: hover ? "3px solid black" : "3px dashed blue"
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <button onClick={handleClick2}>Change Background</button>
      </div>
    </div>
  );
}
