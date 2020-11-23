import { useEffect, useState, useContext } from "react";
import Browser from "../Browser/Browser";
import Item from "../Item/Item";
import { CartContext } from "../../contexts/Cart/CartContext";

import "./ItemList.css";

const ItemList = () => {
  const { getItems, items } = useContext(CartContext);

  const handleChangeBrowser = (searchQuery) => {
    if (searchQuery.length >= 3 || searchQuery === "") {
      getItems(searchQuery);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="ItemsBrowser">
      <div className="Browser__Container">
        <Browser onBrowserChange={handleChangeBrowser} />
      </div>
      <div className="Items__Container">
        {items &&
          items.map((item) => {
            return <Item data={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default ItemList;
