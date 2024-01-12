import { useState } from "react";

function Square() {
  console.log("square box created!");
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
    console.log("square box clicked!");
  }

  return (
      <button className="square" onClick={handleClick}>
        {value}
      </button>
  );
}

export default function Board() {
  return (
      <>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </>
  );
}
