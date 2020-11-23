import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { getFirestore } from "../../config/firebaseConfig";

const CartContext = React.createContext();

const CartProvider = ({ defaultValue = [], children }) => {
  const [articles, setArticles] = useState(defaultValue);
  const [items, setItems] = useState(defaultValue);
  const [categories, setCategories] = useState(defaultValue);
  const [item, setItem] = useState(null);
  const addArticle = (article) => {
    setArticles([...articles, article]);
  };

  const removeArticle = (article) => {
    setArticles(articles.filter((item) => item.id !== article.id));
  };

  const getItems = (query = "") => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No results.");
      }
      setItems(
        querySnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          )
      );
    });
  };

  const getItemsByCategory = (category) => {
    const db = getFirestore();
    const itemCollection = db
      .collection("items")
      .where("category", "==", category);
    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No results.");
      }
      setItems(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  };

  const getItem = (id) => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);
    item.get().then((doc) => {
      if (!doc.exists) {
        console.log("No results.");
      }
      setItem({ id: doc.id, ...doc.data() });
    });
  };

  const getCategories = () => {
    const db = getFirestore();
    const itemCollection = db.collection("categorias");
    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No results.");
      }
      setCategories(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  };

  return (
    <CartContext.Provider
      value={{
        articles,
        articlesLength: articles.length,
        items,
        item,
        categories,
        getItems,
        getItem,
        addArticle,
        removeArticle,
        getCategories,
        getItemsByCategory
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
