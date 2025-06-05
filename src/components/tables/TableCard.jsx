// components/tables/TableCard.jsx
const statusColors = {
  available: "bg-green-300 text-green-900",
  occupied: "bg-yellow-300 text-yellow-900",
  billed: "bg-orange-300 text-orange-900",
  paid: "bg-blue-300 text-blue-900",
};

const TableCard = ({ table }) => {
  return (
    <div
      className={`rounded-xl p-4 shadow-md bg-secondary-gray text-white cursor-pointer transition hover:scale-[1.02] duration-150`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">{table.name}</h2>
        <span
          className={`text-sm capitalize rounded-full px-2 py-1 ${
            statusColors[table.status]
          }`}
        >
          {table.status}
        </span>
      </div>
      <p className="text-sm text-white/80">Seats: {table.seats}</p>
    </div>
  );
};

export default TableCard;
