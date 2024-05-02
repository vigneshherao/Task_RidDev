import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { compltedIcon, deleteIcon } from "../constants/constant";

const Todo = ({ data }) => {
  const { title, completed } = data;

  const handleDelete = () => {
    console.log("Delete button clicked");
  };

  return (
    <div className="mt-5">
      <div
        className={`${
          completed ? "bg-white" : "bg-gray-200"
        } w-full h-20 shadow-sm rounded-sm p-5 overflow-hidden mx-auto mt-5 flex items-center justify-between`}
        key={data.id}
      >
        <div>
          <h4
            className={`text-gray-800 font-bold ${
              completed ? null : "line-through text-gray-400"
            }`}
          >
            {title}
          </h4>
        </div>
        <div>
          {completed ? (
            <button className="bg-green-100 py-1 px-2 font-bold rounded mr-3">
             {compltedIcon}
            </button>
          ) : null}
          <button
            className="bg-red-100 py-1 px-2 font-bold rounded mr-3"
            onClick={handleDelete}
          >
           {deleteIcon}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
