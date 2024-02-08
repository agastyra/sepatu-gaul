/* eslint-disable react/prop-types */
import useCart from "../../hooks/cart.hooks";
import Table from "../Elements/Table";

const Cart = ({ productSelected }) => {
  const { cart, total } = useCart(productSelected);

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
          {cart.length < 1 && (
            <tr>
              <td colSpan={4}>Cart is empty.</td>
            </tr>
          )}
          {cart.map(({ id, title, price, qty }) => {
            return (
              <tr key={id}>
                <td>{title}</td>
                <td>
                  {price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}
                </td>
                <td>{qty}</td>
                <td>
                  {(price * qty).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}
                </td>
              </tr>
            );
          })}
        </Table.Body>
        <Table.Foot>
          <th colSpan={3} className="text-right">
            Total
          </th>
          <th>
            {total.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            })}
          </th>
        </Table.Foot>
      </Table>
    </>
  );
};

export default Cart;
