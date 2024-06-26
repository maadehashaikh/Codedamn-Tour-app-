import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = '/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  function removeTour(id) {
	   const newTours = tours.filter (tour => tour.id !== id);
     setTours(newTours);
  }

  async function fetchTours(){
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setTours(data);
      setLoading(false);
}
useEffect(() => {
  fetchTours();
}, []);

if (loading) {
  return <h2>Loading...</h2>;
}
	return (
    <div>
            {/* {tours.map((tour) => (
                <h2 key={tour.id}>{tour.name}</h2>
            ))} */}
            <Tours tours={tours} removeTour={removeTour}/>
    </div>
  )
  }

export default App
