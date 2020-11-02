import { useEffect, useState } from "react";
import Browser from "../Browser/Browser";
import Item from "../Item/Item";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  const handleChangeBrowser = (searchQuery) => {
    if (searchQuery.length >= 3) {
      setSearch(searchQuery);
    }
  };

  useEffect(() => {
    const getItemsFromApi = () => {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
        .then((response) => response.json())
        .then((data) => {
            setItems(data.results)
        });
    };
    getItemsFromApi();
  }, [search]);

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
