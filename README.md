# reactjs
Learning React from [official docs](https://react.dev/learn) and various other sources.

## Helpful links
1. [JavaScript Basics](https://github.com/akhanalcs/tour-of-heroes/blob/main/docs/learn-javascript.md) (Read it!)
2. [10 React Hooks Explained](https://youtu.be/TNhaISOUy6Q?si=uGvmrS5tMAKaxS8e)
3. [React Router in 45 minutes](https://youtu.be/Ul3y1LXxzdU?si=MPRoMioZ2wWVb7jH)
4. [SSG vs CSR vs SSR vs ISR](https://youtu.be/XwswPqIXYoI?si=zIKP89FSV_HONWmF)
5. [Visual Explanation of CSR, SSR, SSG and ISR](https://dev.to/pahanperera/visual-explanation-and-comparison-of-csr-ssr-ssg-and-isr-34ea)
6. [Understanding CSR, SSR, SSG, and ISR](https://bootcamp.uxdesign.cc/understanding-csr-ssr-ssg-and-isr-a-next-js-perspective-fcaf36686de6)

## Quickstart
https://react.dev/learn

### default export
[Read this](https://javascript.info/import-export) as this is an important concept.

### React project structure
[Reference](https://codesandbox.io/p/sandbox/react-dev-zjtyvn?file=%2Fpublic%2Findex.html%3A8%2C7)

A simple react app looks like this
```bash
some-project
├── public
│   └── index.html
├── src
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
├── README.md
└── .gitignore
```

The files and the output look like this
<table>
<thead>
  <tr>
    <th><code>index.html</code></th>
    <th><code>index.js</code></th>
  </tr>
</thead>
<tbody>
  <tr>
  <td valign="top">
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <!-- It serves as a container for your React app -->
    <div id="root"></div>
  </body>
  </html>
  ```

  <p>This is what gets sent to the browser along with <code>index.js</code>. It serves as the entry point of your app.</p>
  <p>Even though there is no direct reference to <code>index.js</code> in this file, it will be bundled and loaded by some JS bundler (like webpack) when this app is built for production.</p>
  </td>
  <td valign="top">
  
  ```js
  import React, { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import "./styles.css";
  
  import App from "./App";

  // This creates a root node in the React DOM.
  const root = createRoot(document.getElementById("root"));
  // When .render is called, App component is rendered into this root node of the React DOM.
  // The React DOM is reconciled with the actual DOM by the React library,
  // effectively "mounting" the App component to the real DOM.
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  ```

  <p>Read the comments in this code above.</p>
  </td>
  </tr>
</tbody>
</table>

<table>
<thead>
  <tr>
    <th><code>App.js</code></th>
    <th><code>package.json</code></th>
    <th><code>styles.css</code></th>
  </tr>
</thead>
<tbody>
  <tr>
  <td valign="top">
  
  ```js
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  ```

  <p><i>Single curly brackets</i> <code>{}</code> are used to insert JavaScript expressions within the JSX.</p>
  <p><i>Double curly brackets</i> <code>{{}}</code> are typically used for inline styling in JSX, the outer curly brackets <code>{}</code> are a placeholder for a JavaScript expression, the inner curly brackets <code>{}</code> represent a JavaScript object. So, <code>style={{width: user.imageSize, height: user.imageSize}}</code> is passing an object to the style attribute.</p>

  <hr>

  The output looks like this

  <img width="150" alt="image" src="https://github.com/akhanalcs/reactjs/assets/30603497/30c467fe-f21e-47d1-b258-2b1449793047">

  </td>
  <td valign="top">

  ```json
  {
    "name": "react.dev",
    "version": "0.0.0",
    "main": "/src/index.js",
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test --env=jsdom",
      "eject": "react-scripts eject"
    },
    "dependencies": {
      "react": "^18.0.0",
      "react-dom": "^18.0.0",
      "react-scripts": "^5.0.0"
    },
    "devDependencies": {}
  }
  ```

  </td>
  <td valign="top">

  ```css
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: sans-serif;
    margin: 20px;
    padding: 0;
  }
  
  h1 {
    margin-top: 0;
    font-size: 22px;
  }
  
  h2 {
    margin-top: 0;
    font-size: 20px;
  }
  
  h3 {
    margin-top: 0;
    font-size: 18px;
  }
  
  h4 {
    margin-top: 0;
    font-size: 16px;
  }
  
  h5 {
    margin-top: 0;
    font-size: 14px;
  }
  
  h6 {
    margin-top: 0;
    font-size: 12px;
  }
  
  code {
    font-size: 1.2em;
  }
  
  ul {
    padding-inline-start: 20px;
  }
  
  .avatar {
    border-radius: 50%;
  }
  
  .large {
    border: 4px solid gold;
  }
  ```

  </td>
  </tr>
</tbody>
</table>

### Using Hooks
[Reference](https://react.dev/learn#using-hooks)

Functions starting with use are called Hooks. `useState` is a built-in Hook provided by React.  
Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). If you want to use `useState` in a condition or a loop, extract a new component and put it there.

For eg:
```js
function MyComponent(props) {
  if (props.condition) {
    const [value, setValue] = useState(0); // ❌ Invalid Hook call
  }
  // ...
}
```
The proper way:
```js
function MyComponent(props) {
  if (props.condition) {
    return <MySubComponent />;
  }
  // ...
}

function MySubComponent() {
  const [value, setValue] = useState(0); // ✅ Valid Hook call
  // ...
}
```

### Sharing data between components
[Reference](https://react.dev/learn#sharing-data-between-components)

Read the comments below to see how the code works.

```js
import { useState } from "react";

export default function MyApp() {
  console.log("MyApp rendered.");
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

// {} in '{ count, onClick }' is because we're destructuring/ unpacking "props" object passed to it into distinct variables
// In JS, primitive values (like numbers, strings, booleans) are passed by value while objects
// (including arrays and functions) are passed by reference.
// Here 'count' is passed by value but 'onClick' is passed by reference.
// When this button is clicked, handleClick function in MyApp component is called which updates 'count' state
// in MyApp component. Since 'count' is part of MyApp component's state, changing it will trigger re-render of
// MyApp as well as child components that depend on that state (MyButton in this case).
function MyButton({ count, onClick }) {
  console.log("MyButton rendered.");
  return <button onClick={onClick}>Clicked {count} times</button>;
}
```

### Css specificity
Specificity is a concept in CSS that determines which styles will be applied to an element when there are conflicting styles.
The specificity is calculated as a three-digit number (A, B, C):
- 'A' refers to the count of inline styles (styles applied directly to the HTML element using the style attribute).
- 'B' refers to the count of ID selectors.
- 'C' refers to the count of class selectors, attribute selectors, and pseudo-classes.

A > B > C

For example
```html
<!-- Inline style (A=1,B=0,C=0) will take precedence -->
<div id="some-id" class="some-class" style="color: blue;"> 
    This text will be blue.
</div>

<style>
    /* ID Selector (A=0,B=1,C=0) has higher specificity than class */
    #some-id { color: red; } 

    /* Class Selector (A=0,B=0,C=1) has the least specificity */
    .some-class { color: green; } 
</style>
```

## Tic-tac-toe tutorial
[Reference](https://react.dev/learn/tutorial-tic-tac-toe#setup-for-the-tutorial)
### Setup local development
- Download the code from the link referenced above
- Clone this repo down to your local, and paste the code downloaded from previous step into it
- Launch your IDE (I'm using Rider here) and open this folder
- Open integrated terminal in your IDE and navigate into this folder
  ```bash
  cd ./tic-tac-toe/
  ```
- Install dependencies
  ```bash
  npm install
  ```
- Add `node_modules` folder to .gitignore.  
  Right click `node_modules` folder -> Git -> Add to `.gitignore` -> `.gitignore`
- Add `package-lock.json` file to source control.  
  Right click `package-lock.json` file -> Git -> Add
- Start local server
  ```bash
  npm start
  ```
  The script that gets called is this
  https://github.com/akhanalcs/react/blob/f1943884e245f862ed69c4c22cbfa5d426321860/tic-tac-toe/package.json#L6

  When the script was run, I got this message
  
  <img width="500" alt="image" src="https://github.com/akhanalcs/reactjs/assets/30603497/a2934d61-6701-4a23-b608-a1fd0707cbbd">

  I said 'Y' and it was able to run the app and launch a new browser window (in Edge). The config it added to `package.json` is
  https://github.com/akhanalcs/reactjs/blob/48185e207c482b3f1621aebd32c3eeba8162cbda/tic-tac-toe/package.json#L17-L28

  The config basically means which versions of which browsers to support with transpiled output.

  In the "production" context, the following definitions apply:
  - ">0.2%": This targets browsers with greater than 0.2% usage globally.
  - "not dead": This targets browsers that are not "dead" (i.e., no longer updated by their respective organizations).
  - "not op_mini all": This excludes the Opera Mini browser from the targeted browsers due to its certain limitations.
  
  In the "development" context, the following definitions apply:
  - "last 1 chrome version": This targets the most recent version of Google Chrome.
  - "last 1 firefox version": This targets the most recent version of Mozilla Firefox.
  - "last 1 safari version": This targets the most recent version of Apple Safari.

### Keys in dynamic lists
[Reference](https://react.dev/learn/tutorial-tic-tac-toe#picking-a-key)

React handles re-rendering of lists and updates to the Virtual DOM based on keys.
1. If the current list has a key that didn’t exist before, React **creates** a component.
   ```js
    // Initial Render
    const elements = [<li key="1">Element 1</li>];
    // Re-render
    const elements = [<li key="1">Element 1</li>, <li key="2">Element 2</li>];
   ```
   On re-render, React sees that key "2" didn't exist before. Therefore, it creates a new `li` component for "Element 2".
2. If the current list is missing a key that existed in the previous list, React **destroys** the previous component.
   ```js
    // Initial Render
    const elements = [<li key="1">Element 1</li>, <li key="2">Element 2</li>];
    // Re-render
    const elements = [<li key="1">Element 1</li>];
   ```
   On re-render, React notes that key "2" from the previous list doesn't exist in the current list. So, it removes the `li` component for "Element 2".
3. If two keys match, the corresponding component is **moved**.
   ```js
    // Initial Render
    const elements = [<li key="1">Element 1</li>, <li key="2">Element 2</li>];
    // Re-render
    const elements = [<li key="2">Element 2</li>, <li key="1">Element 1</li>];
   ```
   On re-render, React sees that the keys "1" and "2" still exist but in different positions. So, it "moves" them in the Virtual DOM to match the new order, rather than destroying and recreating them.

It’s strongly recommended that you assign proper keys whenever you build dynamic lists. If you don’t have an appropriate key, you may want to consider restructuring your data so that you do.

## Thinking in React
[This is excellent](https://react.dev/learn/thinking-in-react). Read it!

## Local setup
### Install Editor
I'm using Jetbrains Rider.

### Install Node
Follow [this guide](https://github.com/akhanalcs/tour-of-heroes/blob/main/docs/local-setup.md#setup-node).

### Install DevTools Extensions
[React DevTools](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil?hl=en-US)  
[Redux DevTools](https://microsoftedge.microsoft.com/addons/detail/redux-devtools/nnkgneoiohoecpdiaponcejilbhhikei?hl=en-US)

## Editor Setup
[Reference](https://react.dev/learn/editor-setup)

### Linting
[Reference](https://www.npmjs.com/package/eslint-config-react-app#usage-outside-of-create-react-app)
```bash
npm install --save-dev eslint-config-react-app eslint@^8.0.0
```
Then create a file named `.eslintrc.json` with following contents in the root folder of your project:
```json
{
  "extends": "react-app"
}
```

Then integrate ESLint in Rider [using this guide](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_eslint_automatic_configuration). 

<img width="550" alt="image" src="https://github.com/akhanalcs/reactjs/assets/30603497/ae0778c0-cb31-4c57-9c54-c99ba3f34db7">

**Note about `^` and `~` in version numbers:**
- The caret (`^`) allows changes that do not include the next major version.<br>
  For example, `^2.3.0` allows changes from `2.3.0` up to but not including `3.0.0`.
- The tilde (`~`) allows changes that do not include the next minor version and major version, thereby only allowing patch-level changes for a given minor version.<br>
  For example, `~2.3.0` allows changes from `2.3.0` up to but not including `2.4.0`.

### Formatting
[Reference](https://www.jetbrains.com/help/webstorm/prettier.html)

```bash
npm install --save-dev --save-exact prettier
```

Create a file named `.prettierignore` at the `package.json` level to specify files you want to ignore. For example:
```
node_modules
```

Configure Prettier in Rider

<img width="500" alt="image" src="https://github.com/akhanalcs/reactjs/assets/30603497/671519b5-c8bc-4708-848a-bde74887f6f8">

[Turn off all rules that are unnecessary or might conflict with Prettier](https://github.com/prettier/eslint-config-prettier)
```bash
npm install --save-dev eslint-config-prettier
```
And add this to your ESLint configuration. Now your `.eslintrc.json` file should look like this
https://github.com/akhanalcs/reactjs/blob/a4eeae7e6a223af654c8999eae395e398b01d7c1/tic-tac-toe/.eslintrc.json#L1-L9

## Flux Pattern
[Reference](https://github.com/facebookarchive/flux/tree/main/examples/flux-concepts) (Read this!)

Data in a flux application flows in a single direction.

<img width="650" alt="image" src="https://github.com/akhanalcs/reactjs/assets/30603497/8080943d-3818-4558-86a0-b5f3c44deb65">

Explanation with a simple example
```bash
flux-example
├── public
│   └── index.html
├── src
│   ├── containers
│   │   └── AppContainer.js // 👈 Controller View
│   ├── data
│   │   ├── CounterActions.js // 👈 Action creator
│   │   ├── CounterActionTypes.js // 👈 Just holds some constants. Nothing special here
│   │   ├── CounterStore.js // 👈 Store
│   │   └── Dispatcher.js // 👈 Singleton dispatcher per project
│   ├── App.js
│   ├── index.js
│   └── styles.css
└── package.json
```

<img width="750" alt="image" src="https://github.com/akhanalcs/reactjs/assets/30603497/47b9b72b-f9b4-4b0d-95ea-1d5b05615cee">

- Actions are simple objects containing the new data and an identifying _type_ property. For eg:
  ```js
  { type: 'ADD', value: count }
  ```
- Action creators are helper methods that create an action and dispatch it to the dispatcher. For eg:
  https://github.com/akhanalcs/reactjs/blob/479bd290f9250bc8479b8206692f2354c5afe701/flux-example/src/data/CounterActions.js#L5-L10
- All data flows through the **dispatcher** as a central hub. Actions are provided to dispatcher in an _action creator_ method and most often originate from user interactions with the views.
  It is essentially a registry of callbacks into the stores and has no real intelligence of its own — it is a simple mechanism for distributing the actions to the stores. For eg:
  https://github.com/akhanalcs/reactjs/blob/479bd290f9250bc8479b8206692f2354c5afe701/flux-example/src/data/Dispatcher.js#L1-L3

  Each store registers itself and provides a callback. For eg:
  https://github.com/akhanalcs/reactjs/blob/479bd290f9250bc8479b8206692f2354c5afe701/flux-example/src/data/CounterStore.js#L5-L27
  When an action creator provides the dispatcher with a new action, all stores in the application receive the action via the callbacks in the registry.
- **Stores** contain the application state and logic. They register themselves with the dispatcher upon creation. For eg:
  https://github.com/akhanalcs/reactjs/blob/479bd290f9250bc8479b8206692f2354c5afe701/flux-example/src/data/CounterStore.js#L5-L9
  Their role is somewhat similar to a model in a traditional MVC, but they manage the state of many objects — they do not represent a single record of data like ORM models do. Stores manage the application state for a particular domain within the application.  
  Stores emit a 'change' event when their state changes.
- **Controller views** are React components that listen for those 'change' events, retrieve new data from the stores, and re-render. For eg:
  https://github.com/akhanalcs/reactjs/blob/479bd290f9250bc8479b8206692f2354c5afe701/flux-example/src/containers/AppContainer.js#L5-L21
- **Views** are typically dumb components that take the data passed in via props and render UI. For eg:
  https://github.com/akhanalcs/reactjs/blob/479bd290f9250bc8479b8206692f2354c5afe701/flux-example/src/App.js#L1-L13

## Thunks
- Used for delaying the computation of result until it's needed (lazy evaluation).
- Controlling the order of asynchronous operations.
- Wrapping computations to be invoked later.

The below example lets you start a task right away when called and grab the result at a later time.
It also lets you grab the results of multiple tasks in a particular order even if, for example, the first task takes longer than the second one.

```js
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
    // At this point, task1data is always defined
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
```

For more info, read [this](https://daveceddia.com/what-is-a-thunk/) and watch [this](https://youtu.be/EhyuWntGA8s?si=qPZGD1RIy6YNEOPF).

## Redux
[Reference](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)

Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application with rules ensuring that the state can only be updated in a predictable fashion.

### Quick Start
[Reference](https://redux-toolkit.js.org/tutorials/quick-start)

- Add Redux to your project
  ```bash
  npm install @reduxjs/toolkit react-redux
  ```
- Create a redux store using a root reducer function.
- Provide the Redux store to React
- Create a Redux state slice
- Add slice reducers to the store
- Use Redux state and actions in React components

### Terminology
[Reference](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)

- **Action**
  
  An action is a plain JS object that has a type field. You can think of an action as an event that describes something that happened in the app. The type field is written like `"domain/eventName"`. Action object can have other fields with additional information which is put in a field called `payload`. For eg:
  ```js
  const addCounterAction = {
    type: 'counter/add',
    payload: 5
  }
  ```
- **Action Creators**

  Is a function that creates and returns an action object. For eg:
  ```js
  const increment = () => {
    return {
      type: 'counter/increment'
    }
  }
  ```

- **Reducers**

  Is a function that receives `state` and `action` object, decides how to update the state if necessary and returns the new state. Think of a reducer as an event listener which handles events based on the received action (event) type.
  They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
  ```js
  // IMPORTANT: Parameters of a reducer function are (previousResult, currentItem)
  function counterReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'counter/increment') {
      // If so, make a copy of `state`
      return {
        ...state,
        // and update the copy with the new value
        value: state.value + 1
      }
    }
    // otherwise return the existing state unchanged
    return state
  }
  ```

  Usage of reducer in `Array.reduce()` method
  ```js
  const actions = [
    { type: 'counter/increment' },
    { type: 'counter/increment' }
  ];

  const initialState = { value: 0 };

  const finalResult = actions.reduce(counterReducer, initialState);
  console.log(finalResult); // { value: 2 }
  ```

- **Store**

  Redux application state lives in an object called the store. The store is created by passing in a reducer and has a method called `getState()` that returns the current state value.
  ```js
  import { configureStore } from '@reduxjs/toolkit'
  
  const store = configureStore({ reducer: counterReducer })
  
  console.log(store.getState())
  // {value: 0}
  ```

- **Dispatch**

  The redux store has a method called `dispatch`. The only way to update the state is to call `store.dispatch()` and pass in an action object. The store will run its reducer function and save the new state value inside and we can call `getState()` to retrieve the updated value.
  ```js
  store.dispatch({ type: 'counter/increment' })
  
  console.log(store.getState())
  // {value: 1}
  ```

  You can think of dispatching actions as "triggering an event" in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.

  We typically call action creators to dispatch the right action:
  ```js
  const increment = () => {
    return {
      type: 'counter/increment'
    }
  }

  store.dispatch(increment())

  console.log(store.getState())
  // {value: 2}
  ```

- **Selectors**
  Selectors are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:
  ```js
  const selectCounterValue = state => state.value
  
  const currentValue = selectCounterValue(store.getState())
  console.log(currentValue)
  // 2
  ```

### Redux data flow
[Reference](https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-application-data-flow)

- Redux dispatches a special action when the store is created.
- Your overall `counterSlice.reducer` sees this action.
- The `counterSlice.reducer` returns the initialState you defined.
- Redux uses this returned `initialState` as the initial state for your store.

<table>
<thead>
  <tr>
    <th>Step 1</th>
    <th>Step 2</th>
  </tr>
</thead>
<tbody>
  <tr>
  <td valign="top" width="450px">
    <img width="450" alt="image" src="https://github.com/akhanalcs/reactjs/assets/30603497/5ea040db-eeac-4225-a0ca-811064a57de3">
    <p>A bank teller clicks 'Deposit' button in the UI.</p>
  </td>
  <td valign="top" width="450px">
    <img width="450" alt="image" src="https://github.com/akhanalcs/reactjs/assets/30603497/f346530b-daae-4d78-b295-006ef3c4b7ce">
    <p>An action creator will create an action object which is given to the Dispatcher. Dispatcher then sends it to the Redux store.</p>
  </td>
  </tr>
</tbody>
</table>

<table>
<thead>
  <tr>
    <th>Step 3</th>
    <th>Step 4</th>
  </tr>
</thead>
<tbody>
  <tr>
  <td valign="top" width="450px">
    <img width="450" alt="image" src="https://github.com/akhanalcs/reactjs/assets/30603497/b3a1563e-a626-4f90-a4a5-ae718f3269a8">
    <p>The store runs the reducer function using the previous <code>state</code> and the current action, and saves the return value as the new <code>state</code>.</p>
    <p>The store notifies all parts of the UI that are subscribed that the store has been updated.</p>
  </td>
  <td valign="top" width="450px">
    <img width="450" alt="image" src="https://github.com/akhanalcs/reactjs/assets/30603497/714bdc23-e615-4360-a219-ae994424d122">
  </td>
  </tr>
</tbody>
</table>

<table>
<thead>
  <tr>
    <th>Step 5</th>
  </tr>
</thead>
<tbody>
  <tr>
  <td valign="top" width="450px">
    <img width="450" alt="image" src="https://github.com/akhanalcs/reactjs/assets/30603497/145a1183-4929-4339-a054-d6d6dd48598b">
    <p>Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen.</p>
  </td>
  </tr>
</tbody>
</table>

### Redux Thunk
[Read this](https://redux.js.org/tutorials/essentials/part-2-app-structure#writing-async-logic-with-thunks)

A thunk is a specific kind of Redux function that can contain asynchronous logic. Thunks are written using 2 functions:
1. Inside thunk function which gets `dispatch` and `getState` as arguments
2. The outside creator function which creates and returns the thunk function.

Simple example
```js
// thunk action creator
// allows us to do async logic
// can be dispatched like regular action. For eg: dispatch(incrementAsync(1)
// the outside "thunk creator" function
export const incrementAsync = (amount) => {
  // the inside "thunk function" that takes 'dispatch' as argument
  // used to delay the dispatch of 'add()` action
  // this returned function is called by redux-thunk middleware
  // For eg: when redux-thunk middleware sees the result from 'incrementAsync(1)',
  // it says "Oh, this is a function, let me call it for you!", and provides it with
  // the dispatch and getState arguments (which are bound to the current store).
  return (dispatch) => {
    setTimeout(() => {
      // After the timeout is done, normal Redux action is dispatched to the store
      dispatch(add(amount));
    }, 1000);
  };
};
```

Example with an API call
```js
// the outside "thunk creator" function
const fetchUserById = userId => {
  // the inside "thunk function"
  return async (dispatch, getState) => {
    try {
      // make an async call in the thunk
      const user = await userAPI.fetchById(userId)
      // dispatch an action when we get the response back
      dispatch(userLoaded(user))
    } catch (err) {
      // If something went wrong, handle it here
    }
  }
}
```

Remember that we're **not** allowed to put any kind of async logic in reducers.

### Redux ThunkMiddleware
```js
const thunkMiddleware =
  ({ dispatch, getState }) =>
  next =>
  action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }

    return next(action)
  }
```

- When the store is created, the middleware is setup
  ```js
  const thunk = thunkMiddleware({dispatch: store.dispatch, getState: store.getState}); 
  ```
  `thunk` gets called every time an action is dispatched.
- When an action is dispatched (for example, `store.dispatch(incrementAsync())`), Redux internally calls the `thunk` function with the next dispatch function, which belongs to the next middleware in the chain or to the store, if there are no more middlewares. For simplicity, let's assume there are no more middlewares, so `next` would be the `store.dispatch`.
  ```js
  const actionHandler = thunk(store.dispatch);
  ```
  This `actionHandler` function is not reused; a new one is created for every dispatched action.
- Redux calls this `actionHandler` with the dispatched action
  ```js
  actionHandler(incrementAsync()); 
  ```
  Inside the middleware, the `if (typeof action === 'function')` block gets executed and `action(dispatch, getState)` is called, which calls your thunk action with the dispatch and getState.
  
  This sets the timeout and after 1 second, we go back to step 2 and at step 3, we get to `return next(action)` which just passes the action to the store's dispatch function, which in turn activates the reducer with that action.

### Finish reading the ['Essentials'](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) section of Redux docs
[Essentials vs Fundamentals difference](https://www.reddit.com/r/reactjs/comments/ss8woy/comment/hwwts55/?utm_source=share&utm_medium=web2x&context=3)

## Using TypeScript
[Reference](https://react.dev/learn/typescript)

### Add TS to existing project
- Add type definitions
  ```bash
  npm install @types/react @types/react-dom --save-dev
  ```
- Add `tsconfig.json`
  ```json
  {
    "compilerOptions": {
      "target": "ES2022",
      "module": "ES2022",
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true,
      "strict": true, // This makes noImplicitAny as true
      "lib": [
        "ES2022",
        "dom"
      ],
      "jsx": "preserve"
    }
  }
  ```
- Change filename extensions. If you have JSX in your file, change its extension to `.tsx` otherwise change it to `.ts`. For eg:
  - Change `App.js` to `App.tsx`
  - Change `index.js` to `index.tsx`
- Fix error in `index.tsx`

  <img width="600" alt="image" src="https://github.com/akhanalcs/reactjs/assets/30603497/76335dd8-b71e-43e8-be8b-ef6298a42261">

  For eg: use non-null assertion operator
  ```ts
  const rootElement = document.getElementById("root")!;
  ```

### Indexed Access Type
[More info here](https://github.com/akhanalcs/tour-of-heroes/blob/main/docs/learn-typescript.md#indexed-access-type)
```js
interface MyInterface {
  name: string;
  age: number;
}

let obj: MyInterface = { name: 'John', age: 25 };

// Access the value of a property
let ageValue: number = obj['age'];
console.log(ageValue);

// Access the type of a property (Indexed Access Type example)
type AgeType = MyInterface['age']; // Type of 'AgeType' is number
```

### Finish reading the ['Using TypeScript'](https://react.dev/learn/typescript) section of React docs
This is also a great page: https://react-typescript-cheatsheet.netlify.app/

## Some React Hooks
[Reference](https://react.dev/reference/react/hooks)(Read this!)

### useRef
`useRef` lets you reference a value that's not needed for rendering.
By using a ref, you ensure that
- You can store information between re-renders unlike regular variables which reset on every render.
- Changing it does not trigger a re-render unlike state variables which trigger a re-render.
- The information is local to each copy of component unlike the variables outside which are shared.

In example below `intervalIdRef` is essentially used as a mutable instance variable that exists over the lifecycle of the component.
It does not cause a rerender when its value changes and it survives between component renders so that we can use it to stop `setInterval()`.
https://github.com/akhanalcs/reactjs/blob/24ba803817c4e6b733f049f7d0ce3d271f6ae9bc/hooks-examples/src/components/Stopwatch.tsx#L1-L50

### useEffect
[Reference](https://react.dev/reference/react/useEffect)

`useEffect` lets you synchronize a component with an external system. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.

Effects let you specify side effects caused by the rendering itself, rather than by a particular event.

For eg: Consider a ChatRoom component that must connect to the chat server whenever it’s visible on the screen. Connecting to a server is not a pure calculation (it’s a side effect) so it can’t happen during rendering. However, there is no single particular event like a click that causes ChatRoom to be displayed.

For eg:
```js
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}
```
The second argument: `[serverUrl, roomId]` is the dependency array of the `useEffect` hook.

- If you pass an empty array [] as the second argument to `useEffect`, it means "run this effect once after the initial render, and do not run it after any subsequent renders."
- If you pass an array with variables like `[serverUrl, roomId]`, it means "run this effect after the initial render, and also run it after any subsequent render if the values of `serverUrl` or `roomId` have changed since the last render."
- If you omit the second argument, it means "run this effect after every render."

### useMemo
`useMemo` lets you cache the result of an expensive calculation.

```js
function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```

The `useMemo` hook takes two parameters: a function and a dependency array. The function you pass as the first parameter generates the value to be stored, and the array you pass as the second parameter tells React when to update that value.

It only re-runs `filterTodos(todos, tab)` if `todos` or `tab` changes.
If neither `todos` nor `tab` changes between renders, `useMemo` just returns the most recent memoized value without running `filterTodos` function again.

### useCallback
`useCallback` lets you cache a function definition between re-renders.

In JavaScript, functions are objects, and creating a function is an operation that consumes some resources.

Consider this simple counter example
```js
function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```
Here a new function (i.e., a new object) is created each time the `Counter` component is rendered. Typically, this might not be an issue, but if the `Counter` component re-renders frequently or `incrementCount` is passed as a prop to child components, this could potentially lead to performance issues.

This is where `useCallback` comes in handy. With `useCallback`, React can "memoize" the function — the incrementCount function is not recreated on every render, but only when a value in the dependency array changes.

For eg:
```js
function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ExpensiveChildComponent onEventHappens={incrementCount} />
    </div>
  );
}
```
If `Counter` was re-rendering frequently but `count` wasn't changing, then `incrementCount` would remain the same between renders, but without `useCallback`, a new `incrementCount` function would be created every render, potentially causing unnecessary renders of `ExpensiveChildComponent` that depend on the `incrementCount` prop.

### useContext
Context lets a component receive information from distant parents without passing it as props. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.

#### Create the context
Here we specify what the context will contain.
https://github.com/akhanalcs/reactjs/blob/aaf01cebf2c9b5db0354ae664532c303741fccbe/hooks-examples/src/contexts/ThemeContext.ts#L1-L7

#### Provide the context
This makes the provided value available to `<MyComponent />` and all of its children components.
https://github.com/akhanalcs/reactjs/blob/aaf01cebf2c9b5db0354ae664532c303741fccbe/hooks-examples/src/App.tsx#L1-L17

#### Consume the context
Here the value of theme will be whatever value is currently provided via ThemeContext.Provider in App component.

Use it using `useContext`.
https://github.com/akhanalcs/reactjs/blob/aaf01cebf2c9b5db0354ae664532c303741fccbe/hooks-examples/src/MyComponent.tsx#L1-L11

## Finish reading the ['Learn React'](https://react.dev/learn/typescript) section of React docs
If you made it this far, this section isn't strictly necessary to learn at this time, but read it and practice it when you get time.
The docs are excellent. 
