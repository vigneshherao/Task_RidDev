import React, { useState } from "react";
import Todo from "./Todo";
import useFetchList from "../hooks/useFetchList";
import Form from "./Form";
import { pending, complted } from "../constants/constant";
import Shimmer from "./Shimmer";
import toast, { Toaster } from 'react-hot-toast';

const Main = ({ isAddForm, togglePopUp }) => {
  const [showCompleted, setShowCompleted] = useState(false);
  const { todoData, updateTodoList ,toggleTaskCompletion ,deleteTask } = useFetchList();

  if (!todoData || todoData.length === 0) {
    return <Shimmer />;
  }

  const filteredTasks = showCompleted
    ? todoData.filter((todo) => todo.completed)
    : todoData.filter((todo) => !todo.completed);

  return (
    <div>
      {isAddForm && (
        <Form togglePopUp={togglePopUp} updateTodoList={updateTodoList} />
      )}
      <Toaster></Toaster>
      <div className="w-full flex px-5 md:px-10 mt-1 justify-between">
        <div className="w-1/2 m-1">
          <h2 className="text-center font-bold text-blue-500 text-xl m-2">
            <button
              className={
                !showCompleted ? "bg-white p-2" : "bg-gray-50 text-gray-300 p-2"
              }
              onClick={() => setShowCompleted(false)}
            >
              {pending}
            </button>
          </h2>
          {!showCompleted
            ? filteredTasks.map((todo) => <Todo key={todo.id} data={todo}  toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask}/>)
            : null}
        </div>
        <div className="w-1/2 m-1">
          <h2 className="text-center font-bold text-blue-500 text-xl m-2">
            <button
              className={
                showCompleted ? "bg-white p-2" : "bg-gray-50 text-gray-300 p-2"
              }
              onClick={() => setShowCompleted(true)}
            >
              {complted}
            </button>
          </h2>
          {showCompleted
            ? filteredTasks.map((todo) => <Todo key={todo.id} data={todo} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />)
            : null}
        </div>
      </div>
    </div>
  );
};

export default Main;
