import { useEffect, useState } from "react";
import { fetchList } from "../constants/constant";


const useFetchList = () => {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(fetchList);
    const results = await data.json();
    setTodoData(results);
  };


  const updateTodoList = (taskData) => {
    setTodoData((previousData) => [taskData, ...previousData]);
  };


  const toggleTaskCompletion = (taskId) => {
    setTodoData((previousData) =>
      previousData.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  console.log("hello")


  const deleteTask = (taskId) => {
    setTodoData((previousData) =>
      previousData.filter((task) => task.id !== taskId)
    );
  };
  

  return { todoData, updateTodoList , toggleTaskCompletion , deleteTask};
};

export default useFetchList;
