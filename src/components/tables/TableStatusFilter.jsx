import { statuses } from "../../utils/Constant";

const TableStatusFilter = ({ filter, setFilter }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6 border-b border-secondary-gray pb-4">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => setFilter(status)}
          className={`px-3 py-1 rounded-full capitalize font-medium transition cursor-pointer ${
            filter === status
              ? "bg-blue-600 text-white"
              : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
};
export default TableStatusFilter;
