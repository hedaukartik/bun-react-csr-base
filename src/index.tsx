import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const rootDiv = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootDiv);

root.render(<RouterProvider router={router} />);
