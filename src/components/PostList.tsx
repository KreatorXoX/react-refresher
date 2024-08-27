import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import styles from "./PostList.module.css";

type PostType = { author: string; message: string; id: string } | undefined;

type Props = {};

const PostList = ({}: Props) => {
  const postList = useLoaderData() as PostType[];

  return (
    <>
      {postList?.length === 0 && (
        <div>
          <p>No posts yet!</p>
          <p>
            you can start adding by clicking the <span>New Post!</span>
          </p>
        </div>
      )}

      <ul className={styles.list}>
        {postList &&
          postList.map((post, idx) => (
            <Post
              key={idx}
              author={post?.author}
              message={post?.message}
              id={post?.id}
            />
          ))}
      </ul>
    </>
  );
};

export default PostList;
