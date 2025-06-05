// data/tables.js
const tables = [
  {
    id: "table1",
    name: "Table 1",
    status: "available", // available | occupied | billed
    currentOrderId: null,
    seats: 4,
  },
  {
    id: "table2",
    name: "Table 2",
    status: "occupied",
    currentOrderId: "order_001",
    seats: 2,
  },
  {
    id: "table3",
    name: "Table 3",
    status: "billed",
    currentOrderId: "order_002",
    seats: 6,
  },
  {
    id: "table4",
    name: "Table 4",
    status: "available",
    currentOrderId: null,
    seats: 8,
  },
];

export default tables;
