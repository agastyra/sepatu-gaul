/* eslint-disable react/prop-types */
import { useEffect, useContext } from "react";
import Table from "../Elements/Table";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPrice";
import formatCurrency from "../../lib/formatCurrency";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useTotalPriceDispatch();
  const total = useTotalPrice();

  const { darkMode } = useContext(DarkMode);

  useEffect(() => {
    const sum = cart.reduce(
      (total, product) => total + product.qty * product.price,
      0
    );
    dispatch({
      type: "UPDATE",
      payload: sum,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <h2
        className={`transition-all text-2xl font-medium tracking-wide mb-3 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Cart:
      </h2>
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
                <td>{formatCurrency(price, "en-US", "USD", 0)}</td>
                <td>{qty}</td>
                <td>{formatCurrency(price * qty, "en-US", "USD", 0)}</td>
              </tr>
            );
          })}
        </Table.Body>
        <Table.Foot>
          <th colSpan={3} className="text-right">
            Total
          </th>
          <th>{formatCurrency(total, "en-US", "USD", 0)}</th>
        </Table.Foot>
      </Table>
    </>
  );
};

export default Cart;
