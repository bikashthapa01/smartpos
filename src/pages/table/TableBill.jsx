import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  loadActiveOrders,
  updateOrderStatus,
} from "../../store/slices/tableOrderSlice";
import { updateTableStatus } from "../../store/slices/tableSlice";
import Loading from "../../components/Loading";

const TableBill = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { activeOrders, loading } = useSelector((state) => state.tableOrder);
  const { tables } = useSelector((state) => state.table);

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [discountType, setDiscountType] = useState("none");
  const [discountValue, setDiscountValue] = useState(0);

  useEffect(() => {
    dispatch(loadActiveOrders());
  }, [dispatch]);

  if (loading) return <Loading text="Loading bill..." />;

  const order = activeOrders.find((o) => o.id === orderId);
  if (!order || order.status !== "billed") {
    return (
      <div className="text-white p-6">
        <h2 className="text-xl font-bold">Bill not available.</h2>
      </div>
    );
  }

  const table = tables.find((t) => t.id === order.tableId);
  const formattedDate = new Date(order.createdAt).toLocaleString();
  const placedDate = order.placedAt
    ? new Date(order.placedAt).toLocaleString()
    : "—";

  const subtotal = order.items.reduce(
    (sum, item) => sum + item.qty * item.pricing.table,
    0
  );

  const discountAmount =
    discountType === "percent"
      ? subtotal * (discountValue / 100)
      : discountType === "fixed"
      ? discountValue
      : 0;

  const taxRate = 0.1;
  const taxedAmount = (subtotal - discountAmount) * taxRate;
  const total = subtotal - discountAmount + taxedAmount;

  const handleConfirmPayment = () => {
    dispatch(
      updateOrderStatus({
        orderId: order.id,
        status: "paid",
        paidAt: new Date().toISOString(),
        paymentMethod,
        totalPaid: total,
        discount: {
          type: discountType,
          value: discountValue,
          amount: discountAmount,
        },
      })
    );
    dispatch(
      updateTableStatus({
        tableId: order.tableId,
        status: "available",
        currentOrderId: null,
      })
    );
    navigate("/tables");
  };

  return (
    <div className="min-h-screen bg-primary-black text-white p-6">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 bg-secondary-gray rounded-xl shadow-lg p-6">
        {/* Order Summary */}
        <div className="space-y-6 border-r border-slate-700 pr-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">Order Summary</h2>
            <p className="text-slate-400 text-sm">
              Order ID: #{order.id.slice(0, 6)}...
            </p>
            <p className="text-slate-400 text-sm">
              Table: {table?.name || order.tableId} • {order.people} People
            </p>
            <p className="text-slate-400 text-sm">Created: {formattedDate}</p>
            <p className="text-slate-400 text-sm">Placed At: {placedDate}</p>
            <p className="text-slate-400 text-sm">Server: —</p>
          </div>

          <div className="divide-y divide-slate-700 text-sm">
            {order.items.map((item) => (
              <div key={item.id} className="py-3 flex justify-between">
                <span>
                  {item.qty} × {item.name}
                </span>
                <span>£{(item.qty * item.pricing.table).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Panel */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Payment & Discount</h2>

          {/* Payment method */}
          <div>
            <label className="block font-semibold mb-1">Payment Method</label>
            <div className="flex gap-4">
              {["cash", "card"].map((method) => (
                <button
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`px-4 py-2 rounded-full border text-sm transition ${
                    paymentMethod === method
                      ? "bg-blue-600 text-white"
                      : "bg-slate-700 text-slate-300"
                  }`}
                >
                  {method.charAt(0).toUpperCase() + method.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Discount options */}
          <div>
            <label className="block font-semibold mb-1">Discount</label>
            <select
              value={discountType}
              onChange={(e) => {
                setDiscountType(e.target.value);
                setDiscountValue(0);
              }}
              className="w-full p-2 rounded bg-slate-700 text-white"
            >
              <option value="none">None</option>
              <option value="percent">Staff/Manager % Discount</option>
              <option value="fixed">Fixed £ Discount</option>
            </select>

            {(discountType === "percent" || discountType === "fixed") && (
              <input
                type="number"
                min="0"
                max={discountType === "percent" ? 100 : subtotal}
                className="w-full p-2 mt-2 rounded bg-slate-700 text-white"
                placeholder={
                  discountType === "percent"
                    ? "Enter discount % (e.g. 10)"
                    : "Enter £ discount"
                }
                value={discountValue}
                onChange={(e) => setDiscountValue(Number(e.target.value))}
              />
            )}
          </div>

          {/* Totals */}
          <div className="space-y-2 border-t border-slate-600 pt-4 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-red-400">
                <span>Discount</span>
                <span>-£{discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Tax (10%)</span>
              <span>£{taxedAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-dashed border-slate-500 mt-2">
              <span>Total</span>
              <span>£{total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handleConfirmPayment}
            className="w-full bg-green-500 hover:bg-green-600 text-black py-2 rounded-full font-semibold mt-4"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableBill;
