import {createSlice} from '@reduxjs/toolkit';

export interface CountState {
  count: number
};

const defaultState : CountState = {
  count: 0,
};

const slice = createSlice({
  name: 'count',
  initialState: defaultState,
  reducers: {
    increment: (state: CountState, action) => {
      state.count++;
    },
    decrement: (state: CountState, action) => {
      state.count--;
    }
  }
});

export const { increment, decrement } = slice.actions;

export default slice.reducer;