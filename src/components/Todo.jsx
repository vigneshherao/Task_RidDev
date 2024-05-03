import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { compltedIcon, deleteIcon } from "../constants/constant";

const Todo = ({ data ,toggleTaskCompletion ,deleteTask}) => {
  const { title, completed } = data;

  const handleDelete = (id) => {
    deleteTask(id);
  };


  const handleCompleted = (id)=>{
    toggleTaskCompletion(id)
  }

  return (
    <div className="mt-5">
      <div
        className={`${
          !completed ? "bg-white" : "bg-gray-200"
        } w-full h-20 shadow-sm rounded-sm p-5 overflow-hidden mx-auto mt-5 flex items-center justify-between`}
        key={data.id}
      >
        <div className="text-sm md:text-base font-bold">
          <h4
            className={`text-sm md:text-gray-800 font-bold  ${
              !completed ? null : "line-through text-blue-400"
            }`}
          >
            {title}
          </h4>
        </div>
        <div className="text-sm md:text-base font-bold">
          {!completed ? (
            <button className="bg-green-100 py-1 px-2 font-bold rounded mr-3" onClick={() => handleCompleted(data.id)}>
             {compltedIcon}
            </button>
          ) : null}
          <button
            className="bg-red-100 py-1 px-2 font-bold rounded mr-3"
            onClick={()=>handleDelete(data.id)}
          >
           {deleteIcon}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
