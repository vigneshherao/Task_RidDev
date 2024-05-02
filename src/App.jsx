// App.js
import React, { useState } from 'react';
import Head from "./components/Head";
import Main from './components/Main';

const App = () => {
  const [isPopUp, setIsPopUp] = useState(false);

  // Function to toggle isPopUp state
  const togglePopUp = () => {
    setIsPopUp(!isPopUp);
  };
  
  console.log(isPopUp)

  return (
    <div className='bg-blue-50 h-full'>
      {/* Pass togglePopUp function as prop to Head */}
      <Head togglePopUp={togglePopUp} />
      <Main isAddForm ={isPopUp} togglePopUp={togglePopUp} />
    </div>
  );
};

export default App;
