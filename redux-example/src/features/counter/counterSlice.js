import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

// camelCase because it's not a component or a class
export const counterSlice = createSlice({
  // You'll use this name as key when creating the store in app/store.js
  name: "counter",
  initialState,
  // reducers object
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    // IMP NOTE: {} after => will not automatically return what's inside {}
    // => without {} means return automatically what's on the right hand side of =>
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

// thunk action creator
// allows us to do async logic
// can be dispatched like regular action. For eg: dispatch(incrementAsync(1)
// the outside "thunk creator" function
export const incrementAsync = (amount) => {
  // the inside "thunk function" that takes 'dispatch' as argument
  // used to delay the dispatch of 'add()` action
  // this returned function is called by redux-thunk middleware
  // For eg: when redux-thunk middleware sees the result from 'incrementAsync(1)',
  // it says "Oh, this is a function, let me call it for you!", and provides it with
  // the dispatch and getState arguments (which are bound to the current store).
  return (dispatch) => {
    setTimeout(() => {
      // After the timeout is done, normal Redux action is dispatched to the store
      dispatch(add(amount));
    }, 1000);
  };
};

// Action creators are generated for each reducer function
// They're called like this from the UI: {() => dispatch(add(1))}
// The action "type" are named: "counter/add" and "counter/reset"
// The "payload" is 1 (for above example of dispatch(add(1)))
export const { add, reset } = counterSlice.actions;
export default counterSlice.reducer;

/*-------------------------Can be removed. Just here for demo----------------------------------*/
// Below shows the action by calling the action creator: add()
console.log(counterSlice.actions.add(5));

// createSlice(...) generates the "slice reducer function" shown below that knows how to respond to all these action types.
// Remember reducer functions take (state, action) as parameters
const newState = counterSlice.reducer(
  { value: 10 }, // "previousResult"
  counterSlice.actions.add(1), // This provides action type and payload ("currentItem") to the reducer function
);
console.log(newState); //{value: 11}
