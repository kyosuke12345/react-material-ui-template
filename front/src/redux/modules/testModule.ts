import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TestState = {
  count: number;
};

const initialState: TestState = {
  count: 0,
};

const testModule = createSlice({
  name: "testModule",
  initialState: initialState,
  reducers: {
    addCount(state: TestState, action: PayloadAction<number>) {
      state.count += action.payload;
      return state;
    },
    reducerCount(state: TestState, action: PayloadAction<number>) {
      state.count -= action.payload;
      return state;
    },
  },
});

export const { addCount, reducerCount } = testModule.actions;

export default testModule;
