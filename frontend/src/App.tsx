import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';

interface ApplicantData {
  id: number;
  name: string;
  email: string;
  school: string;
  movie: string;
  game: string;
  weather: string;
}

function App() {
  const [data, setData] = useState<Partial<ApplicantData>>({});
  const [isHidden, setIsHidden] = useState(true);
  const [editData, setEditData] = useState<Partial<ApplicantData>>({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/awesome/applicant');
      const jsonData = await response.json();
      setData(jsonData[0]);
      setEditData(jsonData[0]);
      
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  
  const handleClick = () => {
    setIsHidden(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditData({
      ...editData,
      [event.target.name]: event.target.value,
    });
  };

  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const response = await fetch(`http://localhost:3000/awesome/applicant/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editData),
    });

    if (response.ok) {
      setData(editData);
      setIsHidden(true);
    }
  };

  const { id, name, email, school, movie, game, weather } = data;
  

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
      {!isHidden && <form className='pl-44 pr-44 mt-10 mb-10 font-mono' onSubmit={handleSubmit}>
      Welcome, I'm <input name="name" type="text"value={editData.name || ''} className=' rounded-md pl-2' onChange={handleInputChange}/>
      <br/>
      Currently, I'm pursuing my studies at <input name="school" type="text" value={editData.school || ''} className='rounded-md pl-2 w-72' onChange={handleInputChange}/>
      <br/>
      My all-time favorite movie is the <input name="movie" type="text" value={editData.movie || ''} className='rounded-md pl-2' onChange={handleInputChange}/>
      <br/>
      For leisure, I enjoy playing the game <input name="game" type="text" value={editData.game || ''} className='rounded-md pl-2' onChange={handleInputChange}/>.
      <br/>
      My favorite weather is <input name="weather" type="text" value={editData.weather || ''} className='rounded-md pl-2' onChange={handleInputChange}/>
      <br/>
      You can reach me at <input name="email" type="text" value={editData.email || ''} className='rounded-md pl-2' onChange={handleInputChange}/>
      <br/>
      <button className='bg-green-700 rounded-md' type='submit'>Submit</button>
      </form> }
    </div>
  );
}

export default App;
