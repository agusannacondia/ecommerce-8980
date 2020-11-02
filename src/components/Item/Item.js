const Item = ({ data }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={data.thumbnail} alt={data.title} />
        <span className="card-title">${data.price}</span>
      </div>
      <div className="card-content">
        <p>{data.title}</p>
      </div>
      <div className="card-action">
        <a href={data.permalink} target="_blank" rel="noreferrer">
          VER
        </a>
      </div>
    </div>
  );
};

export default Item;
