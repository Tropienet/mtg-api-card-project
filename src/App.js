import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Picture from './Picture'
import logo from './logo.svg';
import './App.css';


function App() {
  const [items,setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "https://api.magicthegathering.io/v1/cards";
    fetch(url)
    .then((response) =>  response.json())
    .then((json) => setItems(json))
    .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    if(items.length !==0) {
      setIsLoading(false);
    }
    console.log(items);
  }, [items]);

  function logData() {
    
    let alpha = `${items.cards[2]}`
    console.log(alpha)
  }
  return (
    <div className="App">
      {isLoading? (
        <h1>Loading...</h1>
      ) : ( 
        items.cards.map((card) => (
          <div key={card.id}>
            <img src={card.imageURL} alt={card.name}></img>
          </div>
        ))
      )}
      <div>This is the division</div>

      {isLoading? (
        <h1>Loading...</h1>
      ) : (
      <BrowserRouter>
          <nav>
            <ul>
              {items.cards.map((card) => (
               <li key={card.id}><Link to={`/card/${card.name}`}>{card.name}</Link></li>
              ))}
            </ul>
          </nav>
          <Routes>
            <Route path="card/:type" element={<Picture />}>
              
            </Route>
          </Routes>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
