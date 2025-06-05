// pages/tables/Tables.jsx
import { useEffect, useState } from "react";
import { fetchTables } from "../../data/api";
import TableCard from "../../components/tables/TableCard";
import Loading from "../../components/Loading";
import AssignTableModal from "../../components/tables/AssignTableModal";

const Tables = () => {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("available");
  const [selectedTable, setSelectedTable] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleStartOrder = (tableId) => {
    // find table by id :
    const tbl = tables.find((t) => t.id === tableId);
    setSelectedTable(tbl);
    setShowModal(true);
  };

  // Confirm from modal
  const handleConfirmAssign = (peopleCount) => {
    const tableId = selectedTable.id;
    console.log(`Assigning ${peopleCount} people to table ${tableId}`);
    setShowModal(false);
  };

  useEffect(() => {
    const getTables = async () => {
      const data = await fetchTables();
      setTables(data);
      setLoading(false);
    };
    getTables();
  }, []);

  if (loading) return <Loading text="Loading tables..." />;

  // Only these statuses now—“paid” is not a table status
  const statuses = ["all", "available", "occupied", "billed"];

  // Filter out by selected status (or show all if filter === "all")
  const filteredTables =
    filter === "all" ? tables : tables.filter((t) => t.status === filter);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-4">Table Manager</h1>

      {/* Filter Bar */}
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

      {/* No Tables Found (after filter) */}
      {filteredTables.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg font-semibold text-slate-400">
            {filter === "all" ? "No tables found." : `No ${filter} tables.`}
          </p>
        </div>
      ) : (
        /* Table Grid (only available/occupied/billed) */
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTables.map((table) => (
            <TableCard
              key={table.id}
              table={table}
              onStartOrder={handleStartOrder}
            />
          ))}
        </div>
      )}

      {showModal && selectedTable && (
        <AssignTableModal
          table={selectedTable}
          onConfirm={handleConfirmAssign}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Tables;
