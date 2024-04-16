import Link from "next/link";
import Logo from "../ui/Logo";
import AdminRoute from "./AdminRoute";

const adminNavigation = [
  { url: "/admin/products-list", text: "Listado Productos", blank: false },
  { url: "/admin/orders-in-process", text: "Pedidos Recibidos", blank: false },
  { url: "/admin/orders-ready", text: "Pedidos Listos", blank: false },
  { url: "/order/menus", text: "Ver Kiosco", blank: true },
];

const AdminSidebar = () => {
  return (
    <>
      <div className="space-y-3">
        <Link href="/">
          <Logo />
        </Link>
        <p className="mt-10 uppercase font-bold text-sm text-gray-600 text-center">
          Navegación
        </p>
        <nav className="flex flex-col">
          {adminNavigation.map((link) => (
            <AdminRoute key={link.url} link={link} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;
