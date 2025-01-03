import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import toast from "react-hot-toast";

// Fetch menu items
export const fetchMenuItems = createAsyncThunk(
  "menu/fetchMenuItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/menu");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Add menu item
export const addMenuItem = createAsyncThunk(
  "menu/addMenuItem",
  async (menuData, { rejectWithValue }) => {
    try {
      const response = await api.post("/menu", menuData);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update menu item
export const updateMenuItem = createAsyncThunk(
  "menu/updateMenuItem",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/menu/${id}`, data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete menu item
export const deleteMenuItem = createAsyncThunk(
  "menu/deleteMenuItem",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/menu/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: [],
    filteredItems: [],
    loading: false,
    error: null,
    activeCategory: "all",
  },
  reducers: {
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.activeCategory = category;
      state.filteredItems =
        category === "all"
          ? state.items
          : state.items.filter((item) => item.category === category);
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch menu items
      .addCase(fetchMenuItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch menu items";
        toast.error(state.error);
      })
      // Add menu item
      .addCase(addMenuItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(addMenuItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
        // Update filtered items if category matches
        if (
          state.activeCategory === "all" ||
          state.activeCategory === action.payload.category
        ) {
          state.filteredItems.push(action.payload);
        }
        toast.success("Menu item added successfully");
      })
      .addCase(addMenuItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to add menu item";
        toast.error(state.error);
      })
      // Update menu item
      .addCase(updateMenuItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateMenuItem.fulfilled, (state, action) => {
        state.loading = false;
        // Update in items array
        const index = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        // Update in filtered items array
        const filteredIndex = state.filteredItems.findIndex(
          (item) => item._id === action.payload._id
        );
        if (filteredIndex !== -1) {
          if (
            state.activeCategory === "all" ||
            state.activeCategory === action.payload.category
          ) {
            state.filteredItems[filteredIndex] = action.payload;
          } else {
            state.filteredItems = state.filteredItems.filter(
              (item) => item._id !== action.payload._id
            );
          }
        }
        toast.success("Menu item updated successfully");
      })
      .addCase(updateMenuItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to update menu item";
        toast.error(state.error);
      })
      // Delete menu item
      .addCase(deleteMenuItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteMenuItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item._id !== action.payload);
        state.filteredItems = state.filteredItems.filter(
          (item) => item._id !== action.payload
        );
        toast.success("Menu item deleted successfully");
      })
      .addCase(deleteMenuItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to delete menu item";
        toast.error(state.error);
      });
  },
});

export const { filterByCategory } = menuSlice.actions;
export default menuSlice.reducer;
