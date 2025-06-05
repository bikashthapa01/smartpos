import { useState } from "react";

const AssignTableModal = ({ table, onConfirm, onClose }) => {
  const [people, setPeople] = useState("");

  const handleSubmit = () => {
    const count = parseInt(people);
    if (isNaN(count) || count <= 0) return alert("Enter a valid number.");
    if (count > table.seats) return alert("Too many people for this table.");
    onConfirm(count);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-primary-black rounded-xl p-6 w-[90%] max-w-sm text-white shadow-xl border border-white/10">
        <h2 className="text-xl font-bold mb-4">Use {table.name}</h2>

        <label className="block mb-2 text-sm font-medium text-slate-300">
          Number of People (max {table.seats}):
        </label>
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className="w-full bg-secondary-gray text-white border border-slate-600 rounded px-3 py-2 mb-4 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter count"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignTableModal;
