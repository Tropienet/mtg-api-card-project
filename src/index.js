import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import RouteSwitch from "./RouteSwitch";

ReactDOM.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*   {isLoading? (
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
            {items.cards.map((card) => (
              
              <Route path="card/:type"  element={<Picture card={card}/>} key={card.id}></Route>
             
            ))}
           
          </Routes>
      </BrowserRouter>
      )}*/
