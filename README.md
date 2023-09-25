
![Image Description](https://i.ibb.co/jvtTNxx/68747470733a2f2f692e6962622e636f2f33634b51707a6b2f312d75772d53417a6b6d612d4a4746662d302d476d762d5454.png)

# Latest React Router DOM Version 🚀🚀🚀
 
Recently, react-router dom has got an updated version that is 6.4 and brings some new and easiest features that will really help to make a lightweight client-side rendering application.



## Key Features
- Routers
- Router Components
- Route
- Components
- Hooks
- Fetch Utilities
- Utilities


These are the remarkable features that highly represent the unique thinking of the react-router community.


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
## Follow the steps

Step 1: First of all, create a router folder under the src folder and then create a router.JSX file to create your initial route

```
Folder Structure
src
├── router
      └── router.js
```
```javascript
//past it into the router.js file
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([

]);
```

Now our initial router is created without a path and element. Do not be concerned about it we will implement all the features later.


It's time to import our initial route in the App.js file wrapped with RouterProvider from react-router-dom

```javascript
//past it into App.js file
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

Step 2: We are ready to create multiple components for our application. As if, we can set the destination path of our component. We will create multiple component in our components folder which is already placed under the src folder

```
Folder Structure
src
├── components
      └── Home.js
      └── Foods.js
      └── About.js
```

Step 3: Create a Layout folder and Root.js file inside the Layout under the src folder. Create a header folder and Header.jsx to navigate one route to another route under the components folder.

```
Folder Structure
src
├── components
        ├── Header
│             └── Header.js
├── Layout
      └── Root.js
```

Now we have multiple components for our application and header file to navigate one route to another route. 

We will import the header file inside the Root.jsx file and also import <Outlet /> from react-router-dom for that we can render all the children component inside the Root.jsx file.

```javascript
//Past it into the Header.js file
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/foods">Foods</NavLink>
      <NavLink to="/about">Abouts</NavLink>
    </div>
  );
};

export default Header;

```

```javascript
//Past it into Root.jsx file
import { Outlet } from "react-router-dom";
import Header from "../components/header/header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
```
And our router.js file looks like

```javascript
//Past it into the router.js file
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/home";
import Foods from "../components/foods/foods";
import About from "../components/about/about";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "foods", element: <Foods /> },
      { path: "about", element: <About /> },
    ],
  },
]);

```

Now we are successfully created components, Link and Nested Rotue using React Router DOM. 👏👏👏

