import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Category.css";
import Item from "../Item/Item";
import { CartContext } from "../../contexts/Cart/CartContext";

const Category = () => {
  const { categoryId } = useParams();
  const { getItemsByCategory, items, categories } = useContext(CartContext);
  const [categoryName, setCategoryName] = useState("")

  useEffect(() => {
    getItemsByCategory(categoryId);
    categories?.map((cat) => {
      if(cat.id === categoryId) {
        setCategoryName(cat.name.replace(/\b\w/g, l => l.toUpperCase()));
      }
    })
  }, [categoryId]);

  return (
    <main className="wrapper">
      <h3>{categoryName}</h3>
      <main className="Categoria">
          {items &&
            items.map((item) => {
              return <Item data={item} key={item.id} />;
            })}
      </main>
    </main>
  );
};

export default Category;
