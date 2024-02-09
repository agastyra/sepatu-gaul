import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import Button from "../Elements/Button";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPrice";

const email = localStorage.getItem("email");
const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  location.href = "/login";
};

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [item, setItem] = useState(0);
  const { darkMode, setDarkMode } = useContext(DarkMode);
  const total = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((total, product) => total + product.qty, 0);
    setItem(sum);
  }, [cart]);

  return (
    <div className="flex h-20 bg-blue-600 justify-between items-center text-white px-6">
      <span>{email}</span>
      <div className="flex gap-10 items-center">
        <span onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Moon /> : <Sun />}
        </span>
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
        (
        {total?.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
        })}
        )
        <Button className="bg-red-700" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

const Sun = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-white cursor-pointer transition-all"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
};

const Moon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-white cursor-pointer transition-all"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );
};

export default Navbar;
