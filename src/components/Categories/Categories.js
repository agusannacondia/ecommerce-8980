import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Categories.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/Cart/CartContext";

const Categories = () => {
  const { categoryId } = useParams();
  const { getCategories, categories } = useContext(CartContext);

  useEffect(() => {
    getCategories(categoryId);
    // eslint-disable-next-line
  }, [categoryId]);

  return (
    <main className="Categorias">
      <h3>Categorías</h3>
      {categories.length > 0 && (
        <ul>
          {categories.map((item) => (
            <li key={item.id}>
              <Link to={`/categories/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Categories;
