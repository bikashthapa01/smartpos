const MenuItemCard = ({ item, quantity = 0, onAdd, onRemove, disabled }) => {
  return (
    <div
      className={` p-4 rounded-xl shadow flex flex-col gap-2 ${
        quantity > 0 ? "bg-secondary-gray" : "bg-secondary-gray/50"
      }`}
    >
      <h3 className="text-lg font-bold">{item.name}</h3>
      <p className="text-sm text-slate-400">£{item.pricing.table.toFixed(2)}</p>

      {item.available ? (
        <div className="flex items-center justify-end gap-4 mt-2">
          <button
            onClick={() => onRemove?.(item)}
            className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-white text-lg border border-red-50 disabled:opacity-50"
            disabled={disabled || quantity === 0}
          >
            −
          </button>
          <span className="text-lg p-1">{quantity}</span>
          <button
            disabled={disabled || !item.available}
            onClick={() => onAdd?.(item)}
            className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-white text-lg border border-red-50"
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
