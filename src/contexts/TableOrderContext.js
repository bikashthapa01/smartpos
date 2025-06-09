import { createContext, useContext } from "react";

export const TableOrderContext = createContext();
export const useOrder = () => useContext(TableOrderContext);
