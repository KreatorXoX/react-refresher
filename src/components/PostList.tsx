import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";
import Modal from "./Modal";

type PostType = { author: string; message: string } | undefined;

type Props = { onModalClose: () => void; isModalOpen: boolean };

const PostList = ({ onModalClose, isModalOpen }: Props) => {
  const [postList, setPostList] = useState<PostType[]>();

  const addNewPostHandler = (post: PostType) => {
    setPostList((prev) => [...(prev || []), post]);
  };

  return (
    <>
      {isModalOpen && (
        <Modal onClose={onModalClose} isOpen={isModalOpen}>
          <NewPost
            onModalClose={onModalClose}
            onAddNewPost={addNewPostHandler}
          />
        </Modal>
      )}

      <ul className={styles.list}>
        {postList ? (
          postList.map((post, idx) => (
            <Post key={idx} name={post?.author} message={post?.message} />
          ))
        ) : (
          <div>
            <p>No posts yet!</p>
            <p>
              you can start adding by clicking the <span>New Post!</span>
            </p>
          </div>
        )}
      </ul>
    </>
  );
};

export default PostList;
