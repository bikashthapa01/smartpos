const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-primary-black text-white rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">{message}</h2>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-slate-500 rounded hover:bg-slate-600"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
          >
            Yes, Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
