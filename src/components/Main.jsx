import React from "react";
import Todo from "./Todo";

const Main = () => {
  return (
    <div className="w-full flex  px-5 md:px-10 mt-1 justify-between">
      <div className="w-1/2 m-1">
        <Todo />
      </div>
      <div className="w-1/2 m-1">
        <Todo />
      </div>
    </div>
  );
};

export default Main;
