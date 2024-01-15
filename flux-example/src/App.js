export default function App(props) {
  return (
    <div>
      <h1>Welcome to my counter</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onAdd}>Add</button>
      <button onClick={props.onReset}>Reset</button>
    </div>
  );
}
