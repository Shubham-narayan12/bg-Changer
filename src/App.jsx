import { useState } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("olive");

  let changeColor = () => {};
  return (
    <div
      className=" w-full h-screen duration-200"
      style={{ background: color }}
    >
      <div classname="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 ">
        <div className="  row mt-2">
          <div className="  col-8 offset-3 bg-white px-3 py-2 rounded-full text-white ">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-5 py-1 rounded-full"
              style={{ background: "red" }}
            >
              red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-5 py-1 rounded-full"
              style={{ background: "green" }}
            >
              green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-5 py-1 rounded-full"
              style={{ background: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-5 py-1 rounded-full"
              style={{ background: "black" }}
            >
              black
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
