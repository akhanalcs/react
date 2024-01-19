import { add, reset, incrementAsync } from "./counterSlice"; // Import the action creators
import { useDispatch, useSelector } from "react-redux";

// Pascal case because it's a component
export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Welcome to my counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(add(1))}>Add</button>
      <button onClick={() => dispatch(incrementAsync(1))}>Add Async</button>
      <button onClick={() => dispatch(add(5))}>Add 5</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
