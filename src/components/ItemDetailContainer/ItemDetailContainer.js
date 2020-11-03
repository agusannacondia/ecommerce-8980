import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "react-bootstrap/Spinner"

const ItemDetailContainer = ({ addArticle }) => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getItem = () => {
      setIsLoading(true);
      fetch("https://api.mercadolibre.com/sites/MLA/search?q=iphone")
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            setItem(data.results[0]);
            setIsLoading(false);
          }, 3000);
        });
    };
    getItem();
  }, []);

  return (
    <div>
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      {item && <ItemDetail data={item} addArticle={addArticle} />}
    </div>
  );
};

export default ItemDetailContainer;
