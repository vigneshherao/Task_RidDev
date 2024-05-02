// Head.js
import React from 'react';

const Head = ({ togglePopUp }) => {
  return (
    <div className='w-full h-16 bg-white flex justify-between shadow-md px-10 lg:px-16 items-center'>
      <div>
        <h2 className='text-blue-600 font-bold text-xl'>TASK TRACKER</h2>
      </div>
      <div>
        {/* Call togglePopUp function when button is clicked */}
        <button className='bg-blue-600 px-2 py-1 rounded text-white font-semibold' onClick={togglePopUp}>Add New Task!</button>
      </div>
    </div>
  );
};

export default Head;
