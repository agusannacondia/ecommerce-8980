import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";
import { CartContext } from "../../contexts/Cart/CartContext";

const NavBar = () => {
  const { articlesLength } = useContext(CartContext);
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/cart" className="brand-logo">
          <CartIcon quantity={articlesLength} />
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Categorías</Link>
          </li>
          <li>
            <Link to="/">Ofertas</Link>
          </li>
          <li>
            <Link to="/">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
