import { useEffect, useContext } from "react";
import Item from "../Item/Item";
import { CartContext } from "../../contexts/Cart/CartContext";

import "./ItemList.css";

const ItemList = () => {
  const { getItems, items } = useContext(CartContext);

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="ItemsBrowser">
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
