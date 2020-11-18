import React, { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";
import CartContext from "../../contexts/Cart/CartContext";

const NavBar = () => {
  const { articlesLength } = useContext(CartContext);
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/cart" className="brand-logo">
          <CartIcon quantity={articlesLength}/>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/cart">Cantidad de articulos: {articlesLength}</Link>
          </li>
          <li>
            <Link to="/">Opcion 1</Link>
          </li>
          <li>
            <Link to="/">Opcion 2</Link>
          </li>
          <li>
            <Link to="/">Opcion 3</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
