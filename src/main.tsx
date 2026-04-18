import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { path: "", Component: Home },
      { path: "/about", Component: About },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
<RouterProvider router={router}/>
);
