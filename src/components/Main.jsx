import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import useFetchList from "../hooks/useFetchList";
import Form from "./Form";
import { pending, complted } from "../constants/constant";
import Shimmer from "./Shimmer";
import { Toaster } from "react-hot-toast";
import { Reorder, useDragControls } from "framer-motion";

const Main = ({ isAddForm, togglePopUp }) => {
  const controls = useDragControls();
  const [showCompleted, setShowCompleted] = useState(false);
  const { todoData, updateTodoList, toggleTaskCompletion, deleteTask, setTodoData } =
    useFetchList();

  useEffect(() => {
    if (!todoData) return;
    const pendingTasks = todoData.filter((todo) => !todo.completed);
    const completedTasks = todoData.filter((todo) => todo.completed);
    setPendingTasks(pendingTasks);
    setCompletedTasks(completedTasks);
  }, [todoData]);

  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  if (!todoData || todoData.length === 0) {
    return <Shimmer />;
  }

  const onReorderPending = (reorderedPendingTasks) => {
    setPendingTasks(reorderedPendingTasks);
    setTodoData([...reorderedPendingTasks, ...completedTasks]);
  };

  const onReorderCompleted = (reorderedCompletedTasks) => {
    setCompletedTasks(reorderedCompletedTasks);
    setTodoData([...pendingTasks, ...reorderedCompletedTasks]);
  };

  const handleShowCompleted = (status) => {
    setShowCompleted(status);
  };

  return (
    <div>
      {isAddForm && (
        <Form togglePopUp={togglePopUp} updateTodoList={updateTodoList} />
      )}
      <Toaster />
      <div className="w-full flex px-5 md:px-10 mt-1 justify-between">
        <div className="w-1/2 m-1">
          <h2 className="text-center font-bold text-blue-500 text-xl m-2">
            <button
              className={!showCompleted ? "bg-white p-2" : "bg-gray-50 text-gray-300 p-2"}
              onClick={() => handleShowCompleted(false)}
            >
              {pending}
            </button>
          </h2>
          <Reorder.Group
            values={pendingTasks}
            onReorder={onReorderPending}
            dragControls={controls}
          >
            {!showCompleted &&
              pendingTasks.map((todo) => (
                <Reorder.Item key={todo.id} value={todo} dragControls={controls}>
                  <Todo
                    key={todo.id}
                    data={todo}
                    toggleTaskCompletion={toggleTaskCompletion}
                    deleteTask={deleteTask}
                  />
                </Reorder.Item>
              ))}
          </Reorder.Group>
        </div>
        <div className="w-1/2 m-1">
          <h2 className="text-center font-bold text-blue-500 text-xl m-2">
            <button
              className={showCompleted ? "bg-white p-2" : "bg-gray-50 text-gray-300 p-2"}
              onClick={() => handleShowCompleted(true)}
            >
              {complted}
            </button>
          </h2>
          <Reorder.Group
            values={completedTasks}
            onReorder={onReorderCompleted}
            dragControls={controls}
          >
            {showCompleted &&
              completedTasks.map((todo) => (
                <Reorder.Item key={todo.id} value={todo} dragControls={controls}>
                  <Todo
                    key={todo.id}
                    data={todo}
                    toggleTaskCompletion={toggleTaskCompletion}
                    deleteTask={deleteTask}
                  />
                </Reorder.Item>
              ))}
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
};

export default Main;
