import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

// camelCase because it's not a component or a class
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // reducers object
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    add: (state, action) => {
      state.value += action.payload;
      //console.log(action);
    },
    reset: () => initialState,
    // Works same as above
    // reset: (state) => {
    //   state.value = initialState.value;
    // },
  },
});

// Action creators are generated for each reducer function
// They're called like this from the UI: {() => dispatch(add(1))}
// The action "type" are named: "counter/add" and "counter/reset"
// The "payload" is 1 (for above example of dispatch(add(1)))
export const { add, reset } = counterSlice.actions;
export default counterSlice.reducer;
