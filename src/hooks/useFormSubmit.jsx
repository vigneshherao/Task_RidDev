import { useState } from "react";


const useFormSubmit = (togglePopUp,updateTodoList) => {
    const [inputData, setInputData] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const trimmedInputData = inputData.trim();
      if (trimmedInputData === "") {
        return alert("Add Title for the Task");
      }
  
      const taskData = {
        userId: 1,
        id: Math.floor(Math.random() * 10000),
        title: trimmedInputData,
        completed: false,
      };
  
      updateTodoList(taskData);
  
      setInputData("");
      togglePopUp();
    };


    return {setInputData,handleSubmit,inputData};
}

export default useFormSubmit