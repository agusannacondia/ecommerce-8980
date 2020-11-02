const Browser = ({ onBrowserChange }) => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" className="validate" onChange={(event) => {onBrowserChange(event.target.value)}}/>
            <label for="icon_prefix">Buscar artículo</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Browser;