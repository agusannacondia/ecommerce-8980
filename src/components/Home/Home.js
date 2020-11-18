import React from "react";
import ItemList from "../ItemList/ItemList";
import "./Home.css";

const Home = ({greeting}) => (
  <main className="Home">
    <h3>{greeting}</h3>
    <ItemList />
  </main>
);

export default Home;
