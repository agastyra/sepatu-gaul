import { useState } from "react";
import Table from "../Elements/Table";
import { useEffect } from "react";

const Cart = ({ productSelected }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    handleAddToCart();
  }, [productSelected]);

  const handleAddToCart = () => {
    if (!productSelected.id) {
      console.log("oke");
    } else {
      setProducts((items) => [...items, productSelected]);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-medium tracking-wide mb-3">Cart:</h2>
      <Table>
        <Table.Head>
          <th>Name</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Subtotal</th>
        </Table.Head>
        <Table.Body>
          {products.length < 1 && (
            <tr>
              <td colSpan={4}>Cart is empty.</td>
            </tr>
          )}
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>2</td>
                <td>Rp. 2.000.000</td>
              </tr>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default Cart;
