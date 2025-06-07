import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMenu } from "../../store/slices/menuSlice";

import MenuCategoryNav from "../../components/tables/orders/MenuCategoryNav";
import MenuItems from "../../components/tables/orders/MenuItems";
import Cart from "../../components/tables/orders/Cart"; // to be created
import Loading from "../../components/Loading";

const TableOrders = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(loadMenu());
  }, [dispatch]);

  if (loading) return <Loading text="Loading menu..." />;

  return (
    <div className="grid grid-cols-5 gap-4 h-[calc(100vh-80px)] p-4 text-white">
      {/* Menu Section */}
      <div className="col-span-4 flex flex-col gap-4 overflow-y-auto pr-2">
        <MenuCategoryNav />
        <MenuItems />
      </div>

      {/* Cart Section */}
      <div className="col-span-1 bg-primary-black rounded-xl p-4 shadow-lg overflow-y-auto">
        <Cart />
      </div>
    </div>
  );
};

export default TableOrders;
