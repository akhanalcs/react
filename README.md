# react
Learning React from [official docs](https://react.dev/learn) and various other sources.

## Helpful links
1. [JavaScript Info](https://javascript.info/)

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

The files look like this
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
  <p>Look at this code:</p>

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  </html>
  ```

  </td>
  <td valign="top">
  <p>Look at this code:</p>
  
  ```js
  import React, { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import "./styles.css";
  
  import App from "./App";
  
  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  ```

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
  <p>Look at this code:</p>
  
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

  </td>
  <td valign="top">
  <p>Look at this code:</p>
  
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
  <p>Look at this code:</p>
  
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

The output looks like this

<img width="150" alt="image" src="https://github.com/akhanalcs/react/assets/30603497/30c467fe-f21e-47d1-b258-2b1449793047">


