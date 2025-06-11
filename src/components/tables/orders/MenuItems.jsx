import { useDispatch, useSelector } from "react-redux";
import MenuItemCard from "./MenuItemCard";
import {
  addItemToOrder,
  decrementItem,
} from "../../../store/slices/tableOrderSlice";

const MenuItems = ({ order }) => {
  const dispatch = useDispatch();
  const { items, selectedCategoryId } = useSelector((state) => state.menu);

  const isBiled = order.status === "billed";

  const filtered = items.filter(
    (item) => item.categoryId === selectedCategoryId
  );

  // Prepare a map of itemId → quantity from the order
  const itemQuantities = order.items.reduce((acc, item) => {
    acc[item.id] = item.qty;
    return acc;
  }, {});

  if (!selectedCategoryId)
    return <p className="text-slate-400">Select a category to view items.</p>;

  if (!filtered.length)
    return <p className="text-slate-500">No items found for this category.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {filtered.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          quantity={itemQuantities[item.id] || 0}
          onAdd={() => {
            if (isBiled) return;
            dispatch(addItemToOrder({ orderId: order.id, item }));
          }}
          onRemove={() => {
            if (isBiled) return;
            dispatch(decrementItem({ orderId: order.id, itemId: item.id }));
          }}
          disabled={isBiled}
        />
      ))}
    </div>
  );
};

export default MenuItems;
