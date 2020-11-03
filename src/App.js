import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

const App = () => {
  const [articles, setArticles] = useState(0);
  const handleAddArticle = () => {
    setArticles(articles + 1);
  };

  const handleRemoveArticle = () => {
    setArticles(articles === 0 ? 0 : articles - 1);
  };
  return (
    <div>
      <NavBar articles={articles} />
      <Home
        greeting={"Bienvenido al E-commerce"}
        addArticle={handleAddArticle}
        removeArticle={handleRemoveArticle}
      />
    </div>
  );
};

export default App;
