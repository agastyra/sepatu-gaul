import useSWR from "swr";
import BarLoader from "react-spinners/BarLoader";
import Card from "../components/Fragments/Card";
import ProductLayouts from "../components/Layouts/ProductLayouts";
import fetcher from "../lib/fetcher";
import { useDispatch } from "react-redux";
import { addToCart } from "../lib/slices/cartSlicer";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";
import { useContext } from "react";
import formatCurrency from "../lib/formatCurrency";

const truncate = (str, max) => {
  return str.length > max ? str.substring(0, max) + "..." : str;
};

const ProductsPage = () => {
  const dispatch = useDispatch();

  const {
    data: products,
    error,
    isLoading,
  } = useSWR(`https://fakestoreapi.com/products`, fetcher);

  const handleAddToCart = ({ id, qty }) => {
    const product = products.find((item) => item.id === id);
    dispatch(addToCart({ ...product, qty }));
  };

  const { darkMode } = useContext(DarkMode);

  return (
    <div className={`transition-all ${darkMode ? "bg-slate-900" : ""}`}>
      <Navbar />
      <ProductLayouts>
        {isLoading && (
          <BarLoader
            color="#2563eb"
            loading={isLoading}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
        {error && <p>{error}</p>}
        {products?.map(({ id, title, image, description, price }) => {
          return (
            <Card key={id}>
              <Card.Header img={image}>{truncate(title, 40)}</Card.Header>
              <Card.Body>{truncate(description, 150)}</Card.Body>
              <Card.Footer productId={id} handleAddToCart={handleAddToCart}>
                {formatCurrency(price, "en-US", "USD", 0)}
              </Card.Footer>
            </Card>
          );
        })}
      </ProductLayouts>
    </div>
  );
};

export default ProductsPage;
