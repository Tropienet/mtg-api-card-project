import React from 'react';
import { Link } from 'react-router-dom';
import HomeNavbar from './HomeNavbar';
import './App.css';




function App(props) {
  const { items } = props
 
  /*const [items,setItems] = useState([]);
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
  }, [items]);*/


 

  return (
    <>
      <HomeNavbar />
      <ul className='card-list'>
        {items.cards.map((card) => (
          
          <li key={card.id} className="card-list-item"><Link to={`${card.id}`}>{card.name}</Link></li>
          
        ))}
      </ul>
    </>
   /* <div className="App">
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

   
    </div>*/
   
  );
}

export default App;
