import React, { useState, useRef, useEffect } from "react";
import "boxicons";

function App() {
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
        ></div>
        <div>
          <div className="text-xl font-bold">Properties</div>
          <div>
            <div className="label">
              <span className="label-text">Select Font</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <div className="label">
              <span className="label-text">Select Size</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <div className="label">
              <span className="label-text">Select Color</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="mt-4">
            <button className="btn btn-md">Add</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
