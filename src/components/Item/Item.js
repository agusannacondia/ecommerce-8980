import "./Item.css";

const getPriceString = (price) => {
  return `$ ${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
}

const Item = ({ data }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={data.thumbnail} alt={data.title} />
      </div>
      <div className="card-content">
        <span className="card-title">{getPriceString(data.price)}</span>
        <a
          className="btn-floating halfway-fab waves-effect waves-light red"
          href={data.permalink}
        >
          <i className="material-icons" target="_blank" rel="noreferrer">
            link
          </i>
        </a>
        <p>{data.title}</p>
      </div>
    </div>
  );
};

export default Item;
