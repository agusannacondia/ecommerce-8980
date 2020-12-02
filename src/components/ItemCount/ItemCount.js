import "./ItemCount.css";

const ItemCount = ({ addArticle, removeArticle, quantity }) => {
  return (
    <div className="ItemCount">
      <button onClick={removeArticle} disabled={quantity <= 1}>-</button>
      {
        quantity && (
          <p>{quantity}</p>
        )
      }
      <button onClick={addArticle}>+</button>
    </div>
  );
};

export default ItemCount;
