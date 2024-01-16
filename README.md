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

- Action
  
  An action is a plain JS object that has a type field. You can think of an action as an event that describes something that happened in the app. The type field is written like `"domain/eventName"`. Action object can have other fields with additional information which is put in a field called `payload`. For eg:
  ```js
  const addCounterAction = {
    type: 'counter/add',
    payload: 5
  }
  ```
- Action Creators

  Is a function that creates and returns an action object. For eg:
  ```js
  const addCounter = count => {
    return {
      type: 'counter/add',
      payload: count
    }
  }
  ```

- Reducers

  Is a function that receives `state` and `action` object, decides how to update the state if necessary and returns the new state. Think of a reducer as an event listener which handles events based on the received action (event) type.
  They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.

- Store

  d

Fireship one:
<img width="550" alt="image" src="https://github.com/akhanalcs/reactjs/assets/30603497/4e9634ca-f15f-4299-ab3c-99d564f450b1">

## Using TypeScript
[Reference](https://react.dev/learn/typescript)

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


