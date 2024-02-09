/* eslint-disable react/prop-types */
import Cart from "../Fragments/Cart";
import { DarkMode } from "../../context/DarkMode";
import { useContext } from "react";

const ProductLayouts = ({ children }) => {
  const { darkMode } = useContext(DarkMode);

  return (
    <div className="container p-6 mx-auto">
      <header className="mb-8">
        <h1
          className={`transition-all text-3xl font-bold ${
            darkMode ? "text-blue-400" : "text-blue-600"
          } mb-3`}
        >
          Products Page
        </h1>
        <p
          className={`transition-all tracking-wide font-medium ${
            darkMode ? "text-slate-200" : "text-slate-400"
          }`}
        >
          Find your needs here...
        </p>
      </header>
      <main className="flex gap-5">
        <section className="flex flex-wrap gap-3 w-2/3">{children}</section>
        <section className="w-1/3">
          <Cart />
        </section>
      </main>
    </div>
  );
};

export default ProductLayouts;
