import "./Browser.css";

const Browser = ({ onBrowserChange }) => {
  return (
    <input
      type="text"
      className="input-search"
      placeholder="Buscar productos, marcas y más..."
      onChange={(event) => {
        onBrowserChange(event.target.value);
      }}
    />
  );
};

export default Browser;