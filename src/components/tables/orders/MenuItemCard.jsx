import { useState } from "react";

const MenuItemCard = ({ item }) => {
  const [qty, setQty] = useState(0);

  const increment = () => setQty(qty + 1);
  const decrement = () => qty > 0 && setQty(qty - 1);

  return (
    <div className="bg-secondary-gray p-4 rounded-xl shadow flex flex-col gap-2">
      <h3 className="text-lg font-bold">{item.name}</h3>
      <p className="text-sm text-slate-400">£{item.pricing.table.toFixed(2)}</p>

      {item.available ? (
        <div className="flex items-center justify-between mt-2">
          <button
            onClick={decrement}
            className="px-3 py-1 bg-white/10 rounded text-white text-lg"
          >
            −
          </button>
          <span className="text-lg">{qty}</span>
          <button
            onClick={increment}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white text-lg"
          >
            +
          </button>
        </div>
      ) : (
        <p className="text-red-500 text-sm">Out Of Stock</p>
      )}
    </div>
  );
};

export default MenuItemCard;
