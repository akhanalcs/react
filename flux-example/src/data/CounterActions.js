import CounterActionTypes from "./CounterActionTypes";
import Dispatcher from "./Dispatcher";

const Actions = {
  add(count) {
    Dispatcher.dispatch({
      type: CounterActionTypes.ADD,
      value: count,
    });
  },
  reset() {
    Dispatcher.dispatch({
      type: CounterActionTypes.RESET,
    });
  },
};

export default Actions;
