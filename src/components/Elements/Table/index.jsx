const Table = ({ children }) => {
  return (
    <>
      <table className="table-auto border border-separate border-spacing-3">
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
