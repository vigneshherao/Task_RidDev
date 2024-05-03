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

  return { todoData, updateTodoList };
};

export default useFetchList;
