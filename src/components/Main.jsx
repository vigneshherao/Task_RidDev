import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const Main = ({ isAddForm ,togglePopUp}) => {
  const [todoData, setTodoData] = useState([]);
  const [isPopUp, setIsPopUp] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const results = await data.json();
    setTodoData(results);
  };

  return (
    <div>
      {isAddForm ? (
        <div className="w-full md:w-1/2 bg-white h-[200px] p-5 shadow-2xl absolute z-30 top-32 md:left-[25%] ">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-center m-2 font-semibold text-xl text-blue-500">
              Add Your Task!
            </h3>
            <button onClick={()=>togglePopUp()}>❌</button>
          </div>
          <form>
            <input
              className="bg-gray-100 w-full p-2 shadow-md rounded"
              type="text"
              placeholder="Enter a Task!"
            ></input>
            <button className="bg-blue-500 text-white font-bold p-1 rounded w-full mt-5">
              ADD TASK
            </button>
          </form>
        </div>
      ) : null}
      <div className="w-full flex px-5 md:px-10 mt-1 justify-between">
        <div className="w-1/2 m-1">
          <h2 className="text-center font-bold text-gray-500 text-xl m-2">
            🟡 Pending
          </h2>
          {todoData
            .filter((todo) => todo.completed)
            .map((todo) => (
              <Todo key={todo.id} data={todo} />
            ))}
        </div>
        <div className="w-1/2 m-1">
          <h2 className="text-center font-bold text-gray-500 text-xl m-2">
            🟢 Completed
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
