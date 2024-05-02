import React, { useState } from "react";
import Head from "./components/Head";
import Main from "./components/Main";

const App = () => {
  const [isPopUp, setIsPopUp] = useState(false);

  const togglePopUp = () => {
    setIsPopUp(!isPopUp);
  };

  return (
    <div className="bg-blue-50 h-full">
      <Head togglePopUp={togglePopUp} />
      <Main isAddForm={isPopUp} togglePopUp={togglePopUp} />
    </div>
  );
};

export default App;
