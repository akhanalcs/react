// This is the View
export default function App(props) {
    console.log(props);
  return (
    <div>
      <h1>Welcome to my counter</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onAdd}>Add</button>
      <button onClick={props.onAddFive}>Add 5</button>
      <button onClick={props.onReset}>Reset</button>
    </div>
  );
}
