import React from "react";
import ItemList from "../ItemList/ItemList";
import "./Home.css";

const Home = ({greeting}) => (
  <main className="Home">
    <ItemList />
  </main>
);

export default Home;
