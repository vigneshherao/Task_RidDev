import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full border-s-2  border-blue-500 w-8 h-8"></div>
        <div className='ml-5'><h4 className='font-semibold text-blue-800'>Fetching...</h4></div>
    </div>
  );
};

export default Shimmer;
