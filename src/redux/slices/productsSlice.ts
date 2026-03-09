import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { products as allProducts } from '../../data/products';
import type { Product } from '../../data/products';

interface ProductsState {
  items: Product[];
  filteredItems: Product[];
  selectedCategory: string;
  sortBy: string;
  priceRange: [number, number];
}

const initialState: ProductsState = {
  items: allProducts,
  filteredItems: allProducts,
  selectedCategory: 'All',
  sortBy: 'popularity',
  priceRange: [0, 100],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterByCategory: (state: ProductsState, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      applyFilters(state);
    },
    sortProducts: (state: ProductsState, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
      applyFilters(state);
    },
    filterByPrice: (state: ProductsState, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
      applyFilters(state);
    },
  },
});

function applyFilters(state: ProductsState) {
  let filtered = [...state.items];
  if (state.selectedCategory !== 'All') {
    filtered = filtered.filter(p => p.category === state.selectedCategory);
  }
  filtered = filtered.filter(p => p.price >= state.priceRange[0] && p.price <= state.priceRange[1]);
  switch (state.sortBy) {
    case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
    case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
    default: filtered.sort((a, b) => b.reviews - a.reviews); break;
  }
  state.filteredItems = filtered;
}

export const { filterByCategory, sortProducts, filterByPrice } = productsSlice.actions;
export default productsSlice.reducer;
