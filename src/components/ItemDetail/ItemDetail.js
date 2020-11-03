import "./ItemDetail.css";

const getPriceString = (price) => {
  return `$ ${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
}

const ItemDetail = ({ data, addArticle }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={data.thumbnail} alt={data.title} />
      </div>
      <div className="card-content">
        <span className="card-title">{getPriceString(data.price)}</span>
        <button
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={addArticle}
        >
          <i className="material-icons" target="_blank" rel="noreferrer">
            add
          </i>
        </button>
        <p>{data.title}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
