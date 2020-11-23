import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Category.css";
import Item from "../Item/Item"
import { CartContext } from "../../contexts/Cart/CartContext";

const Category = () => {
  const { categoryId } = useParams();
  const { getItemsByCategory, items } = useContext(CartContext);

  useEffect(() => {
    getItemsByCategory(categoryId);
  }, [categoryId]);

  return (
    <main className="Categoria">
      {items &&
          items.map((item) => {
            return <Item data={item} key={item.id} />;
          })}
    </main>
  );
};

export default Category;
