
![Image Description](https://i.ibb.co/jvtTNxx/68747470733a2f2f692e6962622e636f2f33634b51707a6b2f312d75772d53417a6b6d612d4a4746662d302d476d762d5454.png)

# Latest React Router DOM Version 6.12.1 🚀🚀🚀
 
Recently, react-router dom has got an updated version that is 6.4 and brings some new and easiest features that will really help to make a lightweight client-side rendering application.



## Key Features of Updated React Router DOM
- Routers
- Router Components
- Route
- Components
- Hooks
- Fetch Uitilities
- Uitilities


These are the remarkable features that highly represent the unique thinking of the community.


## Installation
1. Create a new React App with Vite
```javascript
npm create vite@latest name-of-your-project -- --template react
# follow prompts
cd <your new project directory>
npm install react-router-dom
npm run dev
```
2. If you have an already react project, then just install react-router DOM
Copy the command and past it into the terminal
```javascript
npm install react-router-dom
```
5. Start the server: 
```javascript
npm run dev
```
## Follow these steps below ❗❗

Step 1 : First of all, create a router folder under the src folder and then create a router.js file to create your initial route

```
src
└── router
      ├── router.js
```
```js
//past it into router.js file
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([

]);
```

Now our inital router is created without path and element. Do not concern about it we will emplement all the feature later.


After all, now it's time to import our intial route in App.jsx file wrapped with RouterProvider from react router dom

```js
//past it into App.jsx file
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
```


