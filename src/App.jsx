import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Menu from "./pages/menu/Menu";
import Orders from "./pages/orders/Orders";
import Table from "./pages/table/Tables";
import CategoryDetails from "./pages/menu/CategoryDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tables" element={<Table />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<CategoryDetails />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
