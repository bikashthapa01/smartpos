const statusColors = {
  available: "bg-green-300 text-green-900",
  occupied: "bg-yellow-300 text-yellow-900",
  billed: "bg-orange-300 text-orange-900",
  paid: "bg-blue-300 text-blue-900",
};

const TableCard = ({ table, onStartOrder }) => {
  const isAvailable = table.status === "available" && !table.currentOrderId;

  return (
    <div className="rounded-xl p-4 shadow-md bg-secondary-gray text-white transition hover:scale-[1.02] duration-150">
      <div className="flex justify-between items-center mb-3">
        {/* Left: Table name and seats */}
        <div>
          <h2 className="text-lg font-bold">{table.name}</h2>
          <p className="text-sm text-white/70">Seats: {table.seats}</p>
        </div>

        {/* Right: Status and Use Table button */}
        <div className="flex flex-col items-end gap-2">
          <span
            className={`text-sm capitalize rounded-full px-3 py-1 font-medium ${
              statusColors[table.status]
            }`}
          >
            {table.status}
          </span>

          {isAvailable && (
            <button
              onClick={() => onStartOrder(table.id)}
              className="bg-white/10 hover:bg-white/20 px-3 py-1 cursor-pointer rounded-full text-sm text-white transition"
            >
              Use Table
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableCard;
