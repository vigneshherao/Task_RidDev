import React from "react";
import Todo from "./Todo";
import useFetchList from "../hooks/useFetchList";
import Form from "./Form";
import { pending, complted } from "../constants/constant";
import Shimmer from "./Shimmer";

const Main = ({ isAddForm, togglePopUp }) => {

  const todoData = useFetchList();

  if(!todoData && todoData.length==0){
    return <Shimmer/>
  }

  return (
    <div>
      {isAddForm ? <Form togglePopUp={togglePopUp} /> : null}
      <div className="w-full flex px-5 md:px-10 mt-1 justify-between">
        <div className="w-1/2 m-1">
          <h2 className="text-center font-bold text-gray-500 text-xl m-2">
            {pending}
          </h2>
          {todoData
            .filter((todo) => todo.completed)
            .map((todo) => (
              <Todo key={todo.id} data={todo} />
            ))}
        </div>
        <div className="w-1/2 m-1">
          <h2 className="text-center font-bold text-gray-500 text-xl m-2">
            {complted}
          </h2>
          {todoData
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <Todo key={todo.id} data={todo} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
