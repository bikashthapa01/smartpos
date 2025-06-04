// src/components/Topbar.jsx
export default function Topbar() {
  return (
    <header className="h-16 flex items-center justify-between px-4  text-white bg-primary-black">
      <div className="text-lg font-semibold">Dashboard</div>
      <div className="flex items-center gap-4">
        <span className="text-sm">Welcome, Admin</span>
      </div>
    </header>
  );
}
