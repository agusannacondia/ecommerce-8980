import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "react-bootstrap/Spinner";
import { CartContext } from "../../contexts/Cart/CartContext";

const ItemDetailContainer = () => {
  const { addArticle, getItem, item } = useContext(CartContext);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Promise.resolve(getItem(id))
    .then(() => {
      setIsLoading(false);
    })
    // eslint-disable-next-line
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
