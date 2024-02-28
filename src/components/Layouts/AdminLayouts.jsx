import {
  ShoppingBagIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Profile } from "../../assets";

const AdminLayouts = () => {
  return (
    <section className="grid grid-cols-12 h-full">
      <Sidebar />
      <section className="main-content col-span-10 p-5">
        <Outlet />
      </section>
    </section>
  );
};

const Sidebar = () => {
  const active = "bg-blue-100 bg-opacity-80";
  const { pathname } = useLocation();

  return (
    <aside className="flex flex-col h-full col-span-2 p-5 shadow-lg">
      <h3 className="font-bold text-start text-lg text-blue-600 mb-6">
        Sepatu Gaul Dashboard
      </h3>
      <h4 className="text-slate-400 font-semibold mb-2 text-sm">Menu</h4>
      <section className="menu flex flex-col items-start justify-between h-full">
        <section className="nav-menu flex flex-col items-start gap-3 w-full">
          <Link
            to="/admin"
            className={`transition-all flex flex-row gap-3 w-full text-blue-500 p-2 rounded ${
              pathname === "/admin" ? active : ""
            }`}
          >
            <RectangleGroupIcon className="h-6 w-6" />
            Dashboard
          </Link>
          <Link
            to="/admin/products"
            className={`transition-all flex flex-row gap-3 w-full text-blue-500 p-2 rounded ${
              pathname === "/admin/products" ? active : ""
            }`}
          >
            <ShoppingBagIcon className="h-6 w-6" />
            Products
          </Link>
        </section>
        <section className="nav-profile flex flex-row gap-3 items-center">
          <img
            src={Profile}
            alt="Profile Picture"
            className="w-10 h-10 object-cover object-bottom rounded-full"
          />
          <section className="profile-bio flex flex-col justify-center">
            <h3>Rangga Agastya</h3>
            <hr className="my-1 border-slate-300" />
            <span className="text-blue-600 font-semibold text-sm">Admin</span>
          </section>
        </section>
      </section>
    </aside>
  );
};

export default AdminLayouts;
