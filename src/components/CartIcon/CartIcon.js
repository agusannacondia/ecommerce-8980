import React from "react";
import "./CartIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartIcon = ({ quantity }) => (
  <div className="cart-label">
    <FontAwesomeIcon icon={faShoppingCart} />
    <p>{quantity}</p>
  </div>
);

export default CartIcon;
