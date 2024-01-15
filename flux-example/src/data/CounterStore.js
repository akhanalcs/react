import { ReduceStore } from "flux/utils";
import CounterActionTypes from "./CounterActionTypes";
import Dispatcher from "./Dispatcher";

class CounterStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }
  getInitialState() {
    return 0;
  }

  reduce(state, action) {
    switch (action.actionType) {
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
