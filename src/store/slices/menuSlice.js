import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories, fetchItemsByCategory } from "../../data/api";

export const loadMenu = createAsyncThunk("menu/loadMenu", async () => {
  const categories = await fetchCategories();
  const items = [];

  for (const cat of categories) {
    const i = await fetchItemsByCategory(cat.id);
    items.push(...i);
  }

  return { categories, items };
});

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    categories: [],
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadMenu.fulfilled, (state, action) => {
        const { categories, items } = action.payload;

        // Enrich categories with itemCount
        const enrichedCategories = categories.map((cat) => {
          const count = items.filter(
            (item) => item.categoryId === cat.id
          ).length;
          return { ...cat, itemCount: count };
        });

        state.categories = enrichedCategories;
        state.items = items;
        state.loading = false;
      });
  },
});

export default menuSlice.reducer;
