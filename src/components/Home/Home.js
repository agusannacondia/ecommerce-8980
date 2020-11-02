import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./Home.css";

const Home = ({ addArticle, removeArticle, greeting }) => (
  <main className="Home">
    <h3>{greeting}</h3>
    <ItemList />
    <ItemCount addArticle={addArticle} removeArticle={removeArticle} />
  </main>
);

export default Home;
