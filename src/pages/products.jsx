import useSWR from "swr";
import { useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import Button from "../components/Elements/Button";
import Card from "../components/Fragments/Card";
import ProductLayouts from "../components/Layouts/ProductLayouts";
import products from "../data/products.json";
import fetcher from "../lib/fetcher";

const email = localStorage.getItem("email");
const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  location.href = "/login";
};

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

const ProductsPage = () => {
  const [product, setProduct] = useState({});
  const {
    data: products,
    error,
    isLoading,
  } = useSWR(`https://fakestoreapi.com/products`, fetcher);

  const handleAddToCart = ({ id, qty }) => {
    const product = products.find((item) => item.id === id);
    setProduct({ ...product, qty });
  };

  if (!email) {
    location.href = "/login";
  }
  return (
    <>
      <div className="flex h-20 bg-blue-600 justify-between items-center text-white px-6">
        <span>{email}</span>
        <Button className="bg-red-600" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <ProductLayouts productSelected={product}>
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
              <Card.Header img={image}>{title}</Card.Header>
              <Card.Body>{description}</Card.Body>
              <Card.Footer productId={id} handleAddToCart={handleAddToCart}>
                {price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
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
