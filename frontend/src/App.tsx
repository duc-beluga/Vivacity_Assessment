import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Facts from './components/Facts';

function App() {
  
  const [isHidden, setIsHidden] = useState(true);
  

  

  

  
  const handleClick = () => {
    setIsHidden(false);
  };

  

  
  

  return (
    <div>
      <NavBar/>
      <div className='flex align-middle justify-center'>
       
          <img 
            src={require("./imgs/profile_pic.jpg")} 
            style={{ width: '500px', height: '500px' }} 
            className='rounded-full' 
            alt="Profile Pic"
            onClick={handleClick}  
          />
     
        
      </div>
      {!isHidden && <Facts/> }
    </div>
  );
}

export default App;
