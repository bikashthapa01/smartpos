import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadMenu } from "../../store/slices/menuSlice";
import { loadActiveOrders } from "../../store/slices/tableOrderSlice";

import MenuCategoryNav from "../../components/tables/orders/MenuCategoryNav";
import MenuItems from "../../components/tables/orders/MenuItems";
import Cart from "../../components/tables/orders/Cart"; // to be created
import Loading from "../../components/Loading";

const TableOrders = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { loading: menuLoading } = useSelector((state) => state.menu);
  const { activeOrders, loading: orderLoading } = useSelector(
    (state) => state.tableOrder
  );

  useEffect(() => {
    dispatch(loadMenu());
    dispatch(loadActiveOrders());
  }, [dispatch]);

  if (orderLoading || menuLoading) return <Loading text="Loading data..." />;

  // Check if the orderId exists in activeOrders
  const order = activeOrders.find((order) => order.id === orderId);
  if (!order)
    return (
      <div className="text-white p-4">
        <h2 className="text-xl font-bold">Order not found.</h2>
      </div>
    );

  return (
    <div className="grid grid-cols-10 gap-4 h-[calc(100vh-80px)] p-4 text-white">
      {/* Menu Section */}
      <div className="col-span-7 flex flex-col gap-4 overflow-y-auto pr-2">
        <MenuCategoryNav />
        <MenuItems order={order} />
      </div>

      {/* Cart Section */}
      <div className="col-span-3 bg-primary-black rounded-xl p-4 shadow-lg overflow-y-auto">
        <Cart order={order} />
      </div>
    </div>
  );
};

export default TableOrders;
