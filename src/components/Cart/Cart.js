import { useContext } from "react";
import CartContext from "../../contexts/Cart/CartContext";
import Item from "../Item/Item";

const Cart = () => {
  const { articles, articlesLength } = useContext(CartContext);
  return (
    <div>
      {!articles ||
        (articlesLength === 0 && (
          <p>No se han agregado articulos al carrito</p>
        ))}
      {articles &&
        articles.map((item) => {
          return <Item data={item} key={item.id} />;
        })}
    </div>
  );
};

export default Cart;
