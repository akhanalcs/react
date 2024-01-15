export default function App() {
  console.log("Hey App is rendered!");
  return (
      <div>
        <h1>Welcome to my counter</h1>
        <p>Count: 1</p>
        <button onClick={() => 1}>Add</button>
        <button onClick={() => 1}>Add 5</button>
        <button onClick={() => 1}>Reset</button>
      </div>
  );
}