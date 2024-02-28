const ProductAdminPage = () => {
  return (
    <>
      <h1 className="font-bold text-2xl">Products</h1>
      <section className="nav-menu my-3">
        <ul className="flex flex-row gap-5 font-medium">
          <li>Overview</li>
          <li>New</li>
        </ul>
      </section>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">$2999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductAdminPage;
