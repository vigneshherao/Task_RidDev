import React from "react";
import { navHead, headTitle } from "../constants/constant";

const Head = ({ togglePopUp }) => {
  return (
    <div className="w-full h-16 bg-white flex justify-between shadow-md px-10 lg:px-16 items-center">
      <div>
        <h2 className="text-blue-600 font-bold text-xl">{navHead}</h2>
      </div>
      <div>
        <button
          className="bg-blue-600 px-2 py-1 rounded text-white font-semibold"
          onClick={togglePopUp}
        >
          {headTitle}
        </button>
      </div>
    </div>
  );
};

export default Head;
