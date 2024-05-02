import React, { useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";

const Todo = ({ data }) => {

 



  const handleDelete = () => {
    // Add your delete functionality here
    console.log('Delete button clicked');
  };

  return (
    <div className="mt-5">
      <div className={`${data.completed ? 'bg-white' : 'bg-gray-200'} w-full h-20 shadow-sm rounded-sm p-5 overflow-hidden mx-auto mt-5 flex items-center justify-between`} key={data.id}>
        <div>
          <h4 className={`text-gray-800 font-bold ${data.completed ? null : 'line-through text-gray-400'}`}>{data.title}</h4>
        </div>
        <div>
          {
            data.completed ? <button className='bg-green-100 py-1 px-2 font-bold rounded mr-3'>✅</button> : null
          }
          <button className='bg-red-100 py-1 px-2 font-bold rounded mr-3' onClick={handleDelete}>❌</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
