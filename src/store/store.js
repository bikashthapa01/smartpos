import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import tableOrderReducer from "./slices/tableOrderSlice";
import tableReducer from "./slices/tableSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    table: tableReducer,
    tableOrder: tableOrderReducer,
  },
});
