// pages/tables/Tables.jsx
import { useEffect, useState } from "react";
import { fetchTables } from "../../data/api";
import TableCard from "../../components/tables/TableCard";
import Loading from "../../components/Loading";

const Tables = () => {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTables = async () => {
      const data = await fetchTables();
      setTables(data);
      setLoading(false);
    };
    getTables();
  }, []);

  if (loading) return <Loading text="Loading tables..." />;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-4">Table View</h1>
      {tables.length === 0 ? (
        <p className="text-slate-400">No tables found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tables.map((table) => (
            <TableCard key={table.id} table={table} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tables;
