import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CardPage from "./CardPage";

const RouteSwitch = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "https://api.magicthegathering.io/v1/cards";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (items.length !== 0) {
      setIsLoading(false);
    }
    console.log(items.cards);
  }, [items]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App items={items} />} />
            {items.cards.map((card) => (
              <Route
                path={card.id}
                /*"card/:type"*/ element={<CardPage card={card} />}
                key={card.id}
              ></Route>
            ))}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default RouteSwitch;
