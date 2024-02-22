import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contacts from "./layouts/contacts";
import Home from "./layouts/home";
import ErrorPage from "./components/errorPage";
import Contact from "./layouts/contacts/id";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/contacts/:id",
    element: <Contact />,
  },
]);

const rootDiv = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootDiv);

root.render(<RouterProvider router={router} />);
