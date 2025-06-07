import { useSelector } from "react-redux";
import MenuItemCard from "./MenuItemCard";

const MenuItems = () => {
  const { items, selectedCategoryId } = useSelector((state) => state.menu);

  const filtered = items.filter(
    (item) => item.categoryId === selectedCategoryId
  );

  if (!selectedCategoryId)
    return <p className="text-slate-400">Select a category to view items.</p>;

  if (!filtered.length)
    return <p className="text-slate-500">No items found for this category.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {filtered.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuItems;
