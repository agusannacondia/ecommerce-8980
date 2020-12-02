import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/Cart/CartContext";
import "./ItemCart.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const getPriceString = (price) => {
  return `$ ${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

const ItemCart = ({ data }) => {
  const { removeArticle, addItemToArticle, removeItemFromArticle } = useContext(
    CartContext
  );

  const handleAddItem = () => {
    addItemToArticle(data);
    data.quantity++;
  }

  const handleRemoveItem = () => {
    removeItemFromArticle(data);
    data.quantity--;
  }

  return (
    <div className="item">
      <div className="item-body">
        <div className="item-description">
          <img src={data.thumbnail} alt={data.title} />
          <Link to={`/item/${data.item}`}>
            <p>{data.title}</p>
          </Link>
        </div>
        <div className="item-counter">
          <ItemCount
            addArticle={handleAddItem}
            removeArticle={handleRemoveItem}
            quantity={data.quantity}
          />
        </div>
        <div className="item-price">
          <h3>{`${data.quantity} x ${getPriceString(data.price)}`}</h3>
        </div>
      </div>
      <div className="item-options" onClick={() => removeArticle(data)}>
        <p>Eliminar</p>
      </div>
    </div>
  );
};

export default ItemCart;
