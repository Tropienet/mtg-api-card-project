import React from "react";
import { Link } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";
import "./App.css";

function App(props) {
  const { items } = props;

  return (
    <>
      <HomeNavbar />
      <ul className="card-list">
        {items.cards.map((card) => (
          <li key={card.id} className="card-list-item">
            <Link to={`${card.id}`}>{card.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
