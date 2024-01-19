import Counter from "./features/counter/Counter";

export default function App() {
  //console.log("Hey App is rendered!");

  return <Counter />;
}
/*-------------------------THUNK example-------------------------------------------------------*/
/*-------------------------Can be removed. Just here for demo----------------------------------*/
// It kicks off an asynchronous task that takes 'effort' milliseconds
function DoSomething(task, effort) {
  console.log(task + " started");

  let data, fn; // fn is assigned with callback later
  setTimeout(() => {
    data = task + " completed";
    if (fn) {
      fn(data);
    }
  }, effort);

  // This is a THUNK because it defers some work for later
  // it can be named, or anonymous
  return function (callback) {
    if (data) {
      // Case 1. Our task has completed by the time the callback is passed to it
      // At this point we already have data, so give it to the callback by calling it with 'data'
      callback(data);
    } else {
      // Case 2. Our task hasn't completed when the callback is passed to it
      // Assign 'fn' here so that callback will be called with the data when the task completes (inside setTimeout)
      fn = callback;
    }
  };
}

// Both of these calls complete immediately which starts both of the tasks
// At this point, const task1 and const task2 have the return function assigned to them
// Because of 'closure' the inner returned function(function (callback)) will have access to outer scope variables 'data' and 'fn' even after 'DoSomething' has returned
const task1 = DoSomething("task1", 6000); // task1 takes 6 seconds
const task2 = DoSomething("task2", 3000); // task2 takes 3 seconds

// I need results of task1 in task2. Remember: task1 takes longer than task2
// I want both tasks to start together. By the time task1 completes, task2 will also have completed
task1(function (task1data) {
  console.log(task1data);

  // task2 has already completed by now (since it was shorter)
  // so calling task2 with a callback immediately logs the result of task2
  task2(function (task2data) {
    // This will always be true
    if (task1data) {
      console.log(task2data);
    }
  });
});
// The output is:
// task1 started
// task2 started
// task1 completed
// task2 completed
