import React, { useState } from "react";
import "boxicons";

function App() {
  const [fontSize, setFontSize] = useState(20); // Corrected useState usage
  const [fontFamily, setFontFamily] = useState("Arial");
  const [color, setColor] = useState("#000000");
  const [text, setText] = useState("Example");

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
          className="bg-slate-200 rounded-lg col-span-3"
          style={{ height: "35rem" }}
        >
          <div
            style={{
              fontSize: fontSize,
              fontFamily: fontFamily,
              color: color,
            }}
          >
            {text}
          </div>
        </div>
        <div className="space-y-4 m-0">
          <div className=" text-xl font-bold">Properties</div>

          <div className="flex items-center space-x-4">
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
          </div>

          <div className="flex items-center space-x-4">
            <div>Select Color</div>
            <input
              type="color"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
            <div>{color}</div>
          </div>

          <div className="space-x-4 flex items-center">
            <div>Font Size</div>
            <input
              type="number"
              value={fontSize}
              className="border-2 rounded-md w-20"
              onChange={(e) => {
                setFontSize(parseInt(e.target.value));
              }}
            />
            <button
              className="btn btn-sm btn-square"
              onClick={() => {
                setFontSize(fontSize + 1);
              }}
            >
              <box-icon name="plus"></box-icon>
            </button>
            <button
              className="btn btn-sm btn-square"
              onClick={() => {
                setFontSize(fontSize - 1);
              }}
            >
              <box-icon name="minus"></box-icon>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div>Set Text</div>
            <input
              type="text"
              value={text}
              className="border-2 rounded-md"
              onChange={(e) => {
                setText(e.target.value);
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
