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

  return todoData;
};

export default useFetchList;
