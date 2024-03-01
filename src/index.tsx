import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/errorPage";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./layouts/home"));
const Contacts = lazy(() => import("./layouts/contacts"));
const Contact = lazy(() => import("./layouts/contacts/id"));

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

root.render(
  <Suspense fallback={<>Loading...</>}>
    <RouterProvider router={router} />
  </Suspense>
);
