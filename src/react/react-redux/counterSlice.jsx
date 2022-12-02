import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state, payload) => {
      console.log(state, payload); //type为name/方法名拼接而成
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

// store.subscribe(() => console.log(store.getState())); //监听操作 触发回调

// store.dispatch(incremented(1)); //传参则为payload， 不穿为undefined
// store.dispatch(incremented());
// store.dispatch(decremented());

export default counterSlice.reducer;
