import { useState } from "react";
import Button from "../components/Elements/Button";
import Card from "../components/Fragments/Card";
import ProductLayouts from "../components/Layouts/ProductLayouts";
import products from "../data/products.json";

const email = localStorage.getItem("email");
const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  location.href = "/login";
};

const ProductsPage = () => {
  const handleAddToCart = (id) => {
    const product = products.find((item) => item.id === id);
    setProduct(product);
  };

  const [product, setProduct] = useState({});

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
        {products.map((product) => {
          return (
            <Card key={product.id}>
              <Card.Header img={product.image}>{product.title}</Card.Header>
              <Card.Body>{product.description}</Card.Body>
              <Card.Footer
                productId={product.id}
                handleAddToCart={handleAddToCart}
              >
                {product.price}
              </Card.Footer>
            </Card>
          );
        })}
      </ProductLayouts>
    </>
  );
};

export default ProductsPage;
