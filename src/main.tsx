import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Landing from "./routes/Landing.tsx";

import NewPost from "./routes/NewPost.tsx";
import RootLayout from "./routes/RootLayout.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
        children: [{ path: "/new-post", element: <NewPost /> }],
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
