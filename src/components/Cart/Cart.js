import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/Cart/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import ItemCart from "../ItemCart/ItemCart";
import { ModalCartResume, ModalUserData, ModalSuccess } from "../Modal/Modal";
import "materialize-css";
import Button from "react-bootstrap/Button";
import Confetti from "react-dom-confetti";

const getPriceString = (price) => {
  return `$ ${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
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
  const { order, generateOrder, emptyCart } = useContext(CartContext);

  const [showResume, setShowResume] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    window.$(".modal").modal();
  }, []);

  const handleClickGenerateOrder = () => {
    setShowResume(true);
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
              <Button variant="success" onClick={handleClickGenerateOrder}>
                Generar orden
              </Button>
            </div>
          </>
        )}
      </main>
      <ModalCartResume
        show={showResume}
        handleClose={() => setShowResume(false)}
        handleAccept={() => {
          setShowResume(false);
          setShowUserForm(true);
        }}
      />
      <ModalUserData
        show={showUserForm}
        handleClose={() => setShowUserForm(false)}
        handleAccept={(userData) => {
          setShowUserForm(false);
          setShowSuccess(true);
          setShowConfetti(true);
          generateOrder(userData);
        }}
      />
      <ModalSuccess
        show={showSuccess}
        handleClose={() => {
          setShowSuccess(false)
          emptyCart();
          setShowConfetti(false)
        }}
        handleAccept={() => {
          setShowSuccess(false)
          emptyCart();
          setShowConfetti(false)
        }}
      />
      <Confetti active={showConfetti} config={config} className="confetti" />
    </div>
  );
};

export default Cart;
