import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    // Key is the name of the slice, and value is corresponding reducers
    // Corresponding reducers have an associated initialState
    // This will give us 'state.counter' section in our Redux state object
    counter: counterReducer,
  },
});
