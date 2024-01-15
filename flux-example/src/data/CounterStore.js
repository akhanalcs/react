import { ReduceStore } from "flux/utils";
import CounterActionTypes from "./CounterActionTypes";
import Dispatcher from "./Dispatcher";

class CounterStore extends ReduceStore {
  constructor() {
    // This registers this store with the provided Dispatcher
    super(Dispatcher);
  }
  getInitialState() {
    return 0;
  }

  // This is the callback that's registered with the dispatcher
  // Whenever a new state is returned from this function, the store automatically emits a change event
  // Controller-views listen for those change events, retrieve new data from store and re-render
  reduce(state, action) {
    switch (action.type) {
      case CounterActionTypes.ADD:
        return state + action.value;
      case CounterActionTypes.RESET:
        return this.getInitialState();
      default:
        return state;
    }
  }
}

export default new CounterStore();
