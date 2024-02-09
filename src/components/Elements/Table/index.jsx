import { DarkMode } from "../../../context/DarkMode";
import { useContext } from "react";

const Table = ({ children }) => {
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      <table
        className={`transition-all table-auto border border-separate border-spacing-3 ${
          darkMode ? "text-white border-slate-800" : "text-black"
        }`}
      >
        {children}
      </table>
    </>
  );
};

const Head = ({ children }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
};

const Body = ({ children }) => {
  return <tbody>{children}</tbody>;
};

const Foot = ({ children }) => {
  return (
    <tfoot>
      <tr>{children}</tr>
    </tfoot>
  );
};

Table.Head = Head;
Table.Body = Body;
Table.Foot = Foot;

export default Table;
