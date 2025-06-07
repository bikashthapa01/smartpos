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
    selectedCategoryId: null, // <-- track selected category
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadMenu.fulfilled, (state, action) => {
        const { categories, items } = action.payload;

        const enrichedCategories = categories.map((cat) => {
          const count = items.filter(
            (item) => item.categoryId === cat.id
          ).length;
          return { ...cat, itemCount: count };
        });

        state.categories = enrichedCategories;
        state.items = items;
        state.loading = false;

        // Set first category as selected by default
        state.selectedCategoryId = enrichedCategories[0]?.id || null;
      });
  },
});

export const { setSelectedCategory } = menuSlice.actions;
export default menuSlice.reducer;
