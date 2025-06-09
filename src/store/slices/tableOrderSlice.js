// store/slices/tableOrderSlice.js
import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { loadFromStorage, saveToStorage } from "../../utils/localStorage";

export const loadActiveOrders = createAsyncThunk("tableOrder/loadOrder", () => {
  return loadFromStorage("activeOrders", []);
});

const tableOrderSlice = createSlice({
  name: "tableOrder",
  initialState: {
    activeOrders: [],
    loading: false,
    error: null,
  },

  reducers: {
    createOrder: {
      reducer(state, action) {
        state.activeOrders.push(action.payload);
        saveToStorage("activeOrders", state.activeOrders);
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

        saveToStorage("activeOrders", state.activeOrders);
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

          saveToStorage("activeOrders", state.activeOrders);
        }
      }
    },

    removeItemFromOrder: (state, action) => {
      const { orderId, itemId } = action.payload;
      const order = state.activeOrders.find((o) => o.id === orderId);
      if (order) {
        order.items = order.items.filter((i) => i.id !== itemId);
        saveToStorage("activeOrders", state.activeOrders);
      }
    },
    cancelOrder: (state, action) => {
      const { orderId } = action.payload;
      state.activeOrders = state.activeOrders.filter(
        (order) => order.id !== orderId
      );
      saveToStorage("activeOrders", state.activeOrders);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadActiveOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadActiveOrders.fulfilled, (state, action) => {
        state.activeOrders = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(loadActiveOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  createOrder,
  addItemToOrder,
  decrementItem,
  removeItemFromOrder,
  cancelOrder,
} = tableOrderSlice.actions;

export default tableOrderSlice.reducer;
// This slice manages the active orders for tables in a restaurant management system.
