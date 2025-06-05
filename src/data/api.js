// data/api.js
import menuCategories from "./menuCategories";
import menuItems from "./menuItems";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchCategories = async () => {
  await delay(500);
  return menuCategories;
};

export const fetchItemsByCategory = async (categoryId) => {
  await delay(500);
  return menuItems.filter((item) => item.categoryId === categoryId);
};

export const fetchCategoryById = async (categoryId) => {
  await delay(300);
  return menuCategories.find((cat) => cat.id === categoryId) || null;
};
