import React, { useState, useEffect } from 'react';

interface ApplicantData {
    id: number;
    name: string;
    email: string;
    school: string;
    movie: string;
    game: string;
    weather: string;
}

const Facts = () => {
    useEffect(() => {
        fetchData();
      }, []);

    const [editData, setEditData] = useState<Partial<ApplicantData>>({});

    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/awesome/applicant');
          const jsonData = await response.json();
          setEditData(jsonData[0]);
          
        } catch (error) {
          console.log('Error fetching data:', error);
        }
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
          setEditData(editData);
        }
      };

      const { id, name, email, school, movie, game, weather } = editData;

  return (
    <form className='pl-44 pr-44 mt-10 mb-10 font-mono' onSubmit={handleSubmit} >
      Welcome, I'm <input name="name" type="text"value={name || ''} className=' rounded-md pl-2 border-2 border-gray-500 mb-2' onChange={handleInputChange}/>
      <br/>
      Currently, I'm pursuing my studies at <input name="school" type="text" value={school || ''} className='rounded-md pl-2 w-72 border-2 border-gray-500 mb-2' onChange={handleInputChange}/>
      <br/>
      My all-time favorite movie is the <input name="movie" type="text" value={movie || ''} className='rounded-md pl-2 border-2 border-gray-500 mb-2' onChange={handleInputChange}/>
      <br/>
      For leisure, I enjoy playing the game <input name="game" type="text" value={game || ''} className='rounded-md pl-2 border-2 border-gray-500 mb-2' onChange={handleInputChange}/>
      <br/>
      My favorite weather is <input name="weather" type="text" value={weather || ''} className='rounded-md pl-2 border-2 border-gray-500 mb-2' onChange={handleInputChange}/>
      <br/>
      You can reach me at <input name="email" type="text" value={email || ''} className='rounded-md pl-2 border-2 border-gray-500 mb-2' onChange={handleInputChange}/>
      <br/>
      <button className='bg-blue-700 rounded-md w-40 text-white mt-4' type='submit'>Submit changes.</button>
      </form>
  )
}

export default Facts