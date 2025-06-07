// store/slices/tableOrderSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const tableOrderSlice = createSlice({
  name: "tableOrder",
  initialState: {
    activeOrders: [],
  },

  reducers: {
    createOrder: {
      reducer(state, action) {
        state.activeOrders.push(action.payload);
      },
      prepare({ tableId, people }) {
        return {
          payload: {
            id: nanoid(),
            tableId,
            people,
            status: "active",
            items: [],
            createdAt: new Date().toISOString(),
          },
        };
      },
    },

    addItemToOrder: (state, action) => {
      const { orderId, item } = action.payload;
      const order = state.activeOrders.find((o) => o.id === orderId);
      if (order) {
        const existingItem = order.items.find((i) => i.id === item.id);
        if (existingItem) {
          existingItem.qty += 1;
        } else {
          order.items.push({ ...item, qty: 1 });
        }
      }
    },

    decrementItem: (state, action) => {
      const { orderId, itemId } = action.payload;
      const order = state.activeOrders.find((o) => o.id === orderId);
      if (order) {
        const item = order.items.find((i) => i.id === itemId);
        if (item) {
          if (item.qty > 1) {
            item.qty -= 1;
          } else {
            order.items = order.items.filter((i) => i.id !== itemId);
          }
        }
      }
    },

    removeItemFromOrder: (state, action) => {
      const { orderId, itemId } = action.payload;
      const order = state.activeOrders.find((o) => o.id === orderId);
      if (order) {
        order.items = order.items.filter((i) => i.id !== itemId);
      }
    },
  },
});

export const {
  createOrder,
  addItemToOrder,
  decrementItem,
  removeItemFromOrder,
} = tableOrderSlice.actions;

export default tableOrderSlice.reducer;
// This slice manages the active orders for tables in a restaurant management system.
