import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transaction: null,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    incrementByAmount(state, action) {
      state.transaction = action.payload;
    },
  },
});

export const { incrementByAmount } = transactionSlice.actions;
export default transactionSlice.reducer;
