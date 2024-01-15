import { Container } from "flux/utils";
import { CounterActions } from "../data/CounterActions";
import CounterStore from "../data/CounterStore";
import App from "../App";
function getStores() {
  return [CounterStore];
}

function getState() {
  return {
    count: CounterStore.getState(),
    onAdd: CounterActions.add,
    onReset: CounterActions.reset,
  };
}

export default Container.createFunctional(App, getStores, getState);
