import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index:true, Component: Home },
      { path: "about", Component: About },
      { path: "academics", Component: Academics },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
<RouterProvider router={router}/>
);
