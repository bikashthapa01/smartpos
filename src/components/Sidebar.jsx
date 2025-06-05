// src/components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Utensils,
  Settings,
  ShoppingCart,
  Computer,
  GalleryHorizontal,
} from "lucide-react";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: <Home size={20} /> },
  { to: "/menu", label: "Menu", icon: <Utensils size={20} /> },
  { to: "/tables", label: "Table", icon: <GalleryHorizontal size={20} /> },
  { to: "/orders", label: "Orders", icon: <ShoppingCart size={20} /> },
  { to: "/settings", label: "Settings", icon: <Settings size={20} /> },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="w-64 bg-primary-black text-white flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6 flex gap-1 items-center">
        <Computer />
        <span>SmartPOS</span>
      </h1>
      <nav className="space-y-2">
        {links.map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-3 p-2 rounded-lg transition hover:bg-secondary-gray  font-medium font-inter ${
              pathname.startsWith(to) ? "bg-secondary-gray" : ""
            }`}
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
