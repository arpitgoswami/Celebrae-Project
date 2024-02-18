import React, { useState } from "react";
import "boxicons";

function App() {
  const [fontSize, setFontSize] = useState(20); // Corrected useState usage
  const [fontFamily, setFontFamily] = useState("Arial");
  const [color, setColor] = useState("#000000");

  const handleSelectChange = (event) => {
    setFontFamily(event.target.value);
  };

  return (
    <>
      <header>
        <div className="m-4 space-x-4 flex">
          <button className="btn btn-sm">
            <box-icon name="undo"></box-icon>
          </button>
          <button className="btn btn-sm">
            <box-icon name="redo"></box-icon>
          </button>
          <button className="btn btn-sm">
            <box-icon name="reset"></box-icon>
          </button>
          <button className="btn btn-sm">
            <box-icon name="save" type="solid"></box-icon>
          </button>
        </div>
      </header>
      <div className="m-4 grid grid-cols-5 gap-4">
        <div
          className="bg-slate-200 rounded-lg col-span-4"
          style={{ height: "35rem" }}
        >
          <div
            style={{
              fontSize: fontSize,
              fontFamily: fontFamily,
              background: color,
            }}
          >
            simple
          </div>
        </div>
        <div className="space-y-4 m-0">
          <div className=" text-xl font-bold">Properties</div>

          <div>
            <h2>Select Font</h2>
            <select
              value={fontFamily}
              onChange={handleSelectChange}
              className="border-2 rounded-md"
            >
              <option value="">Select an option</option>
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Other">Other</option>
            </select>
            <p>Selected Option: {fontFamily}</p>
          </div>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Select Color <box-icon name="chevron-down"></box-icon>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>

          <input
            type="color"
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
          <div>{color}</div>

          <div className="dropdown">
            <button
              className="btn btn-md"
              onClick={() => {
                setFontSize(fontSize + 1);
              }}
            >
              Increase Font
            </button>
            <button
              className="btn btn-md"
              onClick={() => {
                setFontSize(fontSize - 1);
              }}
            >
              {" "}
              Decrease Font
            </button>
            <input
              type="number"
              value={fontSize}
              onChange={(event) => {
                setFontSize(event.target.value);
              }}
            />
          </div>

          <div className="">
            <button className="btn btn-md" onClick={() => {}}>
              Add Text
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
