import useSWR from "swr";
import BarLoader from "react-spinners/BarLoader";
import Card from "../components/Fragments/Card";
import ProductLayouts from "../components/Layouts/ProductLayouts";
import fetcher from "../lib/fetcher";
import { useDispatch } from "react-redux";
import { addToCart } from "../lib/slices/cartSlicer";
import Navbar from "../components/Layouts/Navbar";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

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

  const truncate = (str, max) => {
    return str.length > max ? str.substring(0, max) + "..." : str;
  };

  return (
    <>
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
                {price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                })}
              </Card.Footer>
            </Card>
          );
        })}
      </ProductLayouts>
    </>
  );
};

export default ProductsPage;
