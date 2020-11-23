import { useEffect, useState } from "react";
import "./Item.css";
import { useParams, Link } from "react-router-dom";

const getPriceString = (price) => {
  return `$ ${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

const Item = ({ data }) => {
  const { id } = useParams();
  const [idState, setIdState] = useState("");

  useEffect(() => {
    setIdState(id);
  }, [id]);

  if (!data) return <p>Hubo un error al cargar el item.</p>;

  return (
    <div className="card">
      <div className="card-image">
        <img src={data.thumbnail} alt={data.title} />
      </div>
      <div className="card-content">
        <span className="card-title">{getPriceString(data.price)}</span>
        <Link
          to={`/item/${data.id}`}
          className="btn-floating halfway-fab waves-effect waves-light red"
        >
          <i className="material-icons" target="_blank" rel="noreferrer">
            link
          </i>
        </Link>
        <p>
          {data.title} ID: {idState}
        </p>
      </div>
    </div>
  );
};

export default Item;