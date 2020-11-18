import "./ItemCount.css";

const ItemCount = ({ addArticle, removeArticle }) => {
  return (
    <div className="ItemCount">
      <button className="btn-floating btn-large waves-effect waves-light red" onClick={addArticle}><i className="material-icons">add</i></button>
      <button className="btn-floating btn-large waves-effect waves-light red" onClick={removeArticle}><i className="material-icons">remove</i></button>
    </div>
  );
};

export default ItemCount;
