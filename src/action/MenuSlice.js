import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  price: 0,
  productCount: 0,
  total: 0,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    incrementProductCount: (state, action) => {
      const { index } = action.payload;
      state[index].productCount += 1;
      state[index].total = state[index].productCount * state[index].price;
    },
    decrementProductCount: (state, action) => {
      const { index } = action.payload;
      if (state[index].productCount > 0) {
        state[index].productCount -= 1;
        state[index].total = state[index].productCount * state[index].price;
      }
    },
    clearProductCount: (state, action) => {
      const { index } = action.payload;
      state[index].productCount = 0;
      state[index].total = 0;
    },
  },
});

export const {
  incrementProductCount,
  decrementProductCount,
  clearProductCount,
} = menuSlice.actions;

export default menuSlice.reducer;
