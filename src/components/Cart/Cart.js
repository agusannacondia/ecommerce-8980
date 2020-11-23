import { useContext } from "react";
import { CartContext } from "../../contexts/Cart/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import Item from "../Item/Item";

const Cart = () => {
  const { articles, articlesLength } = useContext(CartContext);
  return (
    <main className="Cart">
        {!articles ||
          (articlesLength === 0 && (
            <>
              <p>No se han agregado articulos al carrito</p>
              <Link to="/">Volver al inicio</Link>
            </>
          ))}
        {articles &&
          articles.map((item) => {
            return <Item data={item} key={item.id} />;
          })}
    </main>
  );
};

export default Cart;
