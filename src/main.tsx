import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./routes/RootLayout.tsx";
import Landing, { loader as LandingLoader } from "./routes/Landing.tsx";
import NewPost, { action as NewPostAction } from "./routes/NewPost.tsx";
import PostDetail, {
  loader as PostDetailLoader,
} from "./routes/PostDetail.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
        loader: LandingLoader,
        children: [
          { path: "/new-post", element: <NewPost />, action: NewPostAction },
          {
            path: "/post/:id",
            element: <PostDetail />,
            loader: PostDetailLoader,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
