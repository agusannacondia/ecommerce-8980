import { useState } from "react";
import CartContext from "./CartContext";

const ProductsProvider = ({ defaultValue = [], children }) => {
  const [articles, setArticles] = useState(defaultValue);
  const addArticle = (article) => {
    setArticles([...articles, article]);
  };

  const removeArticle = (article) => {
    setArticles(articles.filter((item) => item.id !== article.id));
  };
  return (
    <CartContext.Provider value={{articles, articlesLength: articles.length, addArticle, removeArticle}}>
      {children}
    </CartContext.Provider>
  );
};

export default ProductsProvider;
