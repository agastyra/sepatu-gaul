import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../Elements/Button";

const email = localStorage.getItem("email");
const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  location.href = "/login";
};

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [item, setItem] = useState(0);

  useEffect(() => {
    const sum = cart.reduce((total, product) => total + product.qty, 0);
    setItem(sum);
  }, [cart]);

  return (
    <div className="flex h-20 bg-blue-600 justify-between items-center text-white px-6">
      <span>{email}</span>
      <div className="flex gap-10 items-center">
        <span className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          {item > 0 && (
            <span className="absolute -top-2 -right-3 rounded-full bg-red-600 text-white shadow-sm text-xs p-1 w-6 text-center">
              {item}
            </span>
          )}
        </span>
        <Button className="bg-red-700" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
