import { useSelector, useDispatch } from "react-redux";
import { add, reset } from "./features/counter/counterSlice";

export default function App() {
  console.log("Hey App is rendered!");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(add);

  return (
    <div>
      <h1>Welcome to my counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(add(1))}>Add</button>
      <button onClick={() => dispatch(add(5))}>Add 5</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
