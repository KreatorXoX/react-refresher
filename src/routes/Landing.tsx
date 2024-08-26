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
