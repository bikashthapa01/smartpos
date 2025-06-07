import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTables } from "../../data/api";

// Async thunk to load tables from a simulated API
export const loadTables = createAsyncThunk("table/loadTables", async () => {
  const data = await fetchTables();
  return data;
});

const tableSlice = createSlice({
  name: "table",
  initialState: {
    tables: [],
    loading: false,
    error: null,
  },

  // ✅ These are normal reducers for table updates
  reducers: {
    assignOrderToTable: (state, action) => {
      const { tableId, orderId } = action.payload;
      const table = state.tables.find((t) => t.id === tableId);
      if (table) {
        table.status = "occupied";
        table.currentOrderId = orderId;
      }
    },

    updateTableStatus: (state, action) => {
      const { tableId, status } = action.payload;
      const table = state.tables.find((t) => t.id === tableId);
      if (table) {
        table.status = status;

        if (status === "available") {
          table.currentOrderId = null;
        }
      }
    },
  },

  // ✅ Async loading handlers
  extraReducers: (builder) => {
    builder
      .addCase(loadTables.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadTables.fulfilled, (state, action) => {
        state.tables = action.payload;
        state.loading = false;
      })
      .addCase(loadTables.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { assignOrderToTable, updateTableStatus } = tableSlice.actions;

export default tableSlice.reducer;
