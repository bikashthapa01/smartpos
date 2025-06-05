// data/api.js
import menuCategories from "./menuCategories";
import menuItems from "./menuItems";
import tables from "./tables";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchCategories = async () => {
  await delay(100);
  return menuCategories;
};

export const fetchItemsByCategory = async (categoryId) => {
  await delay(100);
  return menuItems.filter((item) => item.categoryId === categoryId);
};

export const fetchCategoryById = async (categoryId) => {
  await delay(100);
  return menuCategories.find((cat) => cat.id === categoryId) || null;
};

export const fetchTables = async () => {
  await new Promise((res) => setTimeout(res, 500)); // simulate delay
  return tables;
};
