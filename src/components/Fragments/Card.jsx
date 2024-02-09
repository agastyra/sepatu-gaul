/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import Button from "../Elements/Button";
import { DarkMode } from "../../context/DarkMode";
import { useContext } from "react";

const Card = ({ children }) => {
  const { darkMode } = useContext(DarkMode);

  return (
    <div
      className={`transition-all border shadow rounded-lg w-full max-w-sm p-4 flex flex-col justify-between gap-3 ${
        darkMode ? "text-white border-slate-800" : "text-black"
      }`}
    >
      {children}
    </div>
  );
};

const Header = ({ children, img }) => {
  return (
    <header className="w-full max-h-[50%] mb-2">
      <img
        src={img}
        alt="shoes"
        className="object-cover w-full h-[250px] object-top rounded-lg mb-3"
      />
      <h3 className="font-semibold text-2xl tracking-tight px-3">{children}</h3>
    </header>
  );
};

const Body = ({ children }) => {
  return <main className="px-3 pt-3">{children}</main>;
};

const Footer = ({ children, handleAddToCart, productId: id }) => {
  const [qty, setQty] = useState(1);
  const decreaseBtn = useRef(null);

  useEffect(() => {
    if (qty <= 1) {
      decreaseBtn.current.disabled = true;
      decreaseBtn.current.classList.add("cursor-not-allowed");
    } else {
      decreaseBtn.current.disabled = false;
      decreaseBtn.current.classList.remove("cursor-not-allowed");
    }
  }, [qty]);

  return (
    <footer className="px-3 flex flex-col justify-between gap-5">
      <section className="flex justify-between items-center">
        <h5 className="text-lg font-medium tracking-wide">{children}</h5>
        <section className="qty flex justify-between items-center gap-4">
          <Button
            className="bg-slate-300 text-black px-1"
            onClick={() => setQty((qty) => qty - 1)}
            ref={decreaseBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </Button>
          <p className="text-lg">{qty}</p>
          <Button
            className="bg-slate-600 text-white px-1"
            onClick={() => setQty((qty) => qty + 1)}
          >
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Button>
        </section>
      </section>
      <Button
        className="bg-blue-600 text-white w-full flex items-center justify-center gap-5"
        onClick={() => {
          handleAddToCart({ id, qty });
          setQty(1);
        }}
      >
        <p>Add to cart</p>
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
      </Button>
    </footer>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
