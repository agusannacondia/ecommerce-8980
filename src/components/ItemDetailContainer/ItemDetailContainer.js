import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "react-bootstrap/Spinner";
import { CartContext } from "../../contexts/Cart/CartContext";

const ItemDetailContainer = () => {
  const { addArticle } = useContext(CartContext);
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className="wrapper">
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
