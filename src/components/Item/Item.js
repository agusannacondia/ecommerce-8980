import { useEffect, useState } from "react";
import "./Item.css";
import { useParams, Link } from "react-router-dom";

const getPriceString = (price) => {
  return `$ ${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

const Item = ({ data }) => {
  const { id } = useParams();
  const [idState, setIdState] = useState("");
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setIdState(id);
  }, [id]);

  if (!data) return <p>Hubo un error al cargar el item.</p>;

  return (
    <div
      className="card"
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
    >
      <Link to={`/item/${data.id}`} className="no-decoration">
        <div className="card-image">
          <img src={data.thumbnail} alt={data.title} />
        </div>
        <div
          className="card-content"
        >
          <h5 className="no-decoration">{getPriceString(data.price)}</h5>
          {showTitle && (
            <p>
              {data.title.length > 15
                ? data.title.substring(0, 15) + "..."
                : data.title}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Item;
