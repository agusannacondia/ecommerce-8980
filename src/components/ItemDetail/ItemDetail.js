import { useState } from "react";
import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";

const getPriceString = (price) => {
  return `$ ${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

const ItemDetail = ({ data, addArticle }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    addArticle({
      ...data,
      quantity: counter
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={data.pictures[0].url} alt={data.title} />
      </div>
      <div className={styles.cardContent}>
        <h3>{getPriceString(data.price)}</h3>
        <p>{data.title}</p>
        <ItemCount
          addArticle={() => {
            setCounter(counter + 1);
          }}
          removeArticle={() => {
            setCounter(counter - 1);
          }}
        />
        <br />
        <button className="waves-effect waves-light btn" onClick={handleClick}>
          <i className="material-icons left" target="_blank" rel="noreferrer">
            add
          </i>
          Comprar {counter > 0 ? counter : ""}
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
