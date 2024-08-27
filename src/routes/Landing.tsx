import { Outlet } from "react-router-dom";

import PostList from "../components/PostList";

function Landing() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Landing;

type PostType = { author: string; message: string; id: string } | undefined;

export async function loader(): Promise<PostType[]> {
  const response = await fetch("http://localhost:8080/posts");
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const data = await response.json();
  return data.posts;
}
