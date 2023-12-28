import React, { createRef } from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.jsx";
import Blog, { BlogBody } from "./routes/Blog.jsx";
import ReadBlog from "./routes/ReadBlog.jsx";
import { Category } from "./routes/routesComponents/Home/Category.jsx";
import Shop from "./routes/Shop.jsx";
// import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Root from "./routes/Root.jsx";
export const routes = [
  {
    path: "/",
    element: <Home />,
    nodeRef: createRef(),
  },

  {
    path: "shop-products",
    element: <Shop />,
    nodeRef: createRef(),
  },
  {
    path: `blog`,
    element: <Blog />,
    nodeRef: createRef(),
    children: [
      {
        element: <BlogBody />,
        index: true,
      },
      {
        path:"1",
        element:<Navigate to="/blog/" replace/>
      },

      {
        path: `:pageno`,
        element: <BlogBody />,
      },
    ],
  },
{
  path: `blog/read`,
  element: <ReadBlog/>,
  nodeRef: createRef(),
},
  {
    path: "faq",
    element: <div>faq</div>,
    nodeRef: createRef(),
  },
  {
    path: "about",
    element: <div>About Us</div>,
    nodeRef: createRef(),
  },
  {
    path: "contact",
    element: <div>Contact</div>,
    nodeRef: createRef(),
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
      children: route.children,
    })),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
