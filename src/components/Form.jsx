import React, { useState } from "react";
import { deleteIcon, headTitle } from "../constants/constant";
import useFormSubmit from "../hooks/useFormSubmit";

const Form = ({ togglePopUp, updateTodoList }) => {
  
  const { setInputData, handleSubmit, inputData } = useFormSubmit(
    togglePopUp,
    updateTodoList
  );

  return (
    <div className="w-full md:w-1/2 bg-white h-[200px] p-5 shadow-2xl absolute z-30 top-32 md:left-[25%] border-blue-200 border-2 ">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-center m-2 font-semibold text-xl text-blue-500">
          {headTitle}
        </h3>
        <button onClick={togglePopUp}>{deleteIcon}</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-gray-100 w-full p-2 shadow-md rounded"
          type="text"
          value={inputData}
          placeholder="Enter a Task!"
          onChange={(e) => setInputData(e.target.value)}
        ></input>
        <button className="bg-blue-500 text-white font-bold p-1 rounded w-full mt-5">
          {headTitle}
        </button>
      </form>
    </div>
  );
};

export default Form;
