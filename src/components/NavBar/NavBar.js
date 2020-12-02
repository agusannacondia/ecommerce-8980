import React, { useContext, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";
import { CartContext } from "../../contexts/Cart/CartContext";
import "materialize-css"

const NavBar = () => {
  const { order, getCategories, categories } = useContext(CartContext);

  useEffect(() => {
    getCategories();
    window.$(".dropdown-trigger").dropdown();
  }, []);

  return (
    <>
      <ul id="dropdown1" className="dropdown-content">
        <>
          {categories?.map((item) => (
            <li key={item.id}>
              <Link to={`/categories/${item.id}`}>{item.name.toUpperCase()}</Link>
            </li>
          ))}
        </>
      </ul>

      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            CoderCompras
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a className="dropdown-trigger" data-target="dropdown1">
                Categorías
                <i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            <li>
              <Link to="/">Ofertas</Link>
            </li>
            <li>
              <Link to="/cart">
                <CartIcon
                  quantity={order && order.items ? order.items.length : 0}
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
