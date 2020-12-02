import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/Cart/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import ItemCart from "../ItemCart/ItemCart";
import "materialize-css";

const getPriceString = (price) => {
  return `$ ${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

const NoItemsComponent = () => (
  <div>
    <h4 className="width-100 align-center">Tu carrito está vacío</h4>
    <h5 className="width-100 align-center">
      ¿No sabés qué comprar? ¡Miles de productos te esperan!
    </h5>
    <Link to="/" className="width-100 align-center link-inicio">
      <FontAwesomeIcon icon={faArrowLeft} />
      Volver al inicio
    </Link>
  </div>
);

const Cart = () => {
  const { order, generateOrder } = useContext(CartContext);

  useEffect(() => {
    window.$(".modal").modal();
  }, []);

  const handleClickGenerateOrder = () => {
    generateOrder();
  };

  return (
    <div className="cart-wrapper">
      <main className="cart">
        {(!order || order.items.length === 0) && <NoItemsComponent />}
        {order && order.items.length > 0 && (
          <>
            <div className="cart-header">
              <h4>Carrito {`(${order.items.length})`}</h4>
            </div>
            <div className="cart-body">
              {order.items.map((item) => (
                <ItemCart data={item} key={item.item} />
              ))}
            </div>
            <div className="cart-total">
              <p className="width-100">
                Total <b>{getPriceString(order.amount)}</b>
              </p>
            </div>
            <div className="cart-buttons">
              <a
                className="waves-effect waves-light btn modal-trigger"
                href="#modal1"
                onClick={handleClickGenerateOrder}
              >
                Generar orden
              </a>
            </div>
          </>
        )}
      </main>
      <div id="modal1" className="modal">
        <h4>Orden generada correctamente</h4>
      </div>
    </div>
  );
};

export default Cart;
