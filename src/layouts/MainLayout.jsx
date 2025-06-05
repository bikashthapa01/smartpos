import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function MainLayout() {
  return (
    <div className="flex h-screen font-inter">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-slate-100 dark:bg-primary-black">
        <Topbar />
        <main className="p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
