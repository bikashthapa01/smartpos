// pages/tables/Tables.jsx
import { useEffect, useState } from "react";
import TableCard from "../../components/tables/TableCard";
import Loading from "../../components/Loading";
import AssignTableModal from "../../components/tables/AssignTableModal";
import { useDispatch, useSelector } from "react-redux";
import { assignOrderToTable, loadTables } from "../../store/slices/tableSlice";
import TableStatusFilter from "../../components/tables/TableStatusFilter";
import { createOrder } from "../../store/slices/tableOrderSlice";

const Tables = () => {
  // use the redux here
  const dispatch = useDispatch();
  const { tables, loading, error } = useSelector((state) => state.table);

  const [filter, setFilter] = useState("available");
  const [selectedTable, setSelectedTable] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleStartOrder = (tableId) => {
    // find table by id :
    const tbl = tables.find((t) => t.id === tableId);
    setSelectedTable(tbl);
    setShowModal(true);
  };

  // Confirm from modal to assign people to table // create order and assign to table
  const handleConfirmAssign = (peopleCount) => {
    const tableId = selectedTable.id;
    // Dispatch this when assigning a table:
    const action = createOrder({ tableId, peopleCount });
    dispatch(action);

    // Link the order ID to the table
    dispatch(assignOrderToTable({ tableId, orderId: action.payload.id }));

    setShowModal(false);
  };

  useEffect(() => {
    // dispatch the loadTables action to fetch tables
    dispatch(loadTables());
  }, [dispatch]);

  if (loading) return <Loading text="Loading tables..." />;
  if (error) return <p className="text-red-500">{error}</p>;

  // Filter out by selected status (or show all if filter === "all")
  const filteredTables =
    filter === "all" ? tables : tables.filter((t) => t.status === filter);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-4">Table Manager</h1>

      <TableStatusFilter filter={filter} setFilter={setFilter} />

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
