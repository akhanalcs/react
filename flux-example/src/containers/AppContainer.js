import { Container } from "flux/utils";
import CounterActions from "../data/CounterActions";
import CounterStore from "../data/CounterStore";
import App from "../App";
function getStores() {
  return [CounterStore];
}

function getState() {
  return {
    count: CounterStore.getState(),
    onAdd: () => CounterActions.add(1),
    onAddFive: () => CounterActions.add(5),
    onReset: CounterActions.reset,
  };
}

// This is controller view. It listens for change event from the store.
// When it hears a change event, it calls its getState() function to retrieve new state from the store
// and re-renders the App.js with this new state
export default Container.createFunctional(App, getStores, getState);
