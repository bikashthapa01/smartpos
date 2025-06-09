import { useDispatch } from "react-redux";
import {
  removeItemFromOrder,
  cancelOrder,
} from "../../../store/slices/tableOrderSlice";
import { Trash } from "lucide-react";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { updateTableStatus } from "../../../store/slices/tableSlice";
import { useNavigate } from "react-router-dom";

const TAX_RATE = 0.1; // 10% tax

const Cart = ({ order }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleRemove = (item) => {
    dispatch(removeItemFromOrder({ orderId: order.id, itemId: item.id }));
  };

  const handlePlaceOrder = () => {
    // Logic to place the order
  };

  const handleCancelOrder = () => {
    // Logic to cancel the order
    setShowConfirmation(true);
  };

  const confirmCancel = () => {
    dispatch(cancelOrder({ orderId: order.id }));
    dispatch(
      updateTableStatus({ tableId: order.tableId, status: "available" })
    );
    navigate("/tables");
    setShowConfirmation(false);
    // Optionally redirect to /tables
  };

  const subtotal = order.items.reduce(
    (sum, item) => sum + item.pricing.table * item.qty,
    0
  );

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <div className="text-white flex flex-col h-full">
      {/* Fixed Header */}
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-secondary-gray">
        <h2 className="text-lg font-bold">Table Order</h2>
        <button
          className="bg-red-400 rounded-full px-3 py-1 hover:bg-red-500 transition-colors text-sm"
          onClick={handleCancelOrder}
        >
          Cancel
        </button>
      </div>

      {/* Scrollable Items */}
      <div className="flex-1 overflow-y-auto pr-1">
        {order.items.length === 0 ? (
          <p className="text-slate-400">No items selected for the table.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="bg-secondary-gray p-3 rounded-lg flex justify-between items-center"
              >
                <h3 className="text-sm font-medium">
                  {item.qty > 1 ? `${item.qty} x ${item.name}` : item.name}
                </h3>
                <button
                  onClick={() => handleRemove(item)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fixed Footer */}
      <div className="border-t border-slate-600 pt-4 mt-4 text-sm space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>£{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (10%)</span>
          <span>£{tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-base pt-1 border-t border-dotted border-slate-500 mt-2">
          <span>Total</span>
          <span>£{total.toFixed(2)}</span>
        </div>

        <button
          className="w-full mt-3 bg-white text-primary-black rounded-full px-4 py-2 hover:bg-gray-200 transition-colors"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
      {showConfirmation && (
        <ConfirmModal
          message="Are you sure you want to cancel this order?"
          onConfirm={confirmCancel}
          onCancel={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
};

export default Cart;
