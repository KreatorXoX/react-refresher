import { useEffect, useState } from "react";

import Post from "./Post";
import styles from "./PostList.module.css";

type PostType = { author: string; message: string } | undefined;

type Props = {};

const PostList = ({}: Props) => {
  const [postList, setPostList] = useState<PostType[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");

      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setIsLoading(false);
      setIsError(false);
      setPostList(data.posts);
    }
    fetchPosts();
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && postList?.length === 0 && (
        <div>
          <p>No posts yet!</p>
          <p>
            you can start adding by clicking the <span>New Post!</span>
          </p>
        </div>
      )}
      {isError && <p>Something went wrong!</p>}
      <ul className={styles.list}>
        {!isLoading &&
          postList &&
          postList.map((post, idx) => (
            <Post key={idx} name={post?.author} message={post?.message} />
          ))}
      </ul>
    </>
  );
};

export default PostList;
