import React from "react";
import "./NavBar.css";
import CartIcon from "../CartIcon/CartIcon";

const NavBar = ({ articles }) => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">
        <CartIcon />
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="/">Cantidad de articulos: {articles}</a>
        </li>
        <li>
          <a href="/">Opcion 1</a>
        </li>
        <li>
          <a href="/">Opcion 2</a>
        </li>
        <li>
          <a href="/">Opcion 3</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
