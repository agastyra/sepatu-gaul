import { useState, useEffect } from "react";

const useCart = (productSelected) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!productSelected.id) {
      console.log("Cart is empty.");
    } else {
      setCart((c) => {
        if (c.find((product) => product.id == productSelected.id)) {
          return c.map((product) =>
            product.id === productSelected.id
              ? { ...product, qty: product.qty + productSelected.qty }
              : product
          );
        } else {
          return [...c, productSelected];
        }
      });
    }
  }, [productSelected]);

  useEffect(() => {
    const sum = cart.reduce(
      (total, product) => total + product.qty * product.price,
      0
    );
    setTotal(sum);
  }, [cart]);

  return { cart, total };
};

export default useCart;
