import { useLoaderData, Link, LoaderFunction } from "react-router-dom";

import Modal from "../components/Modal";

import styles from "./PostDetail.module.css";

type PostType = { author: string; message: string; id: string } | undefined;

type Props = {};

const PostDetail = ({}: Props) => {
  const post = useLoaderData() as PostType;

  if (!post) {
    return (
      <Modal>
        <div className={styles.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={styles.btn}>
              Okay
            </Link>
          </p>
        </div>
      </Modal>
    );
  }
  return (
    <Modal>
      <div className={styles.details}>
        <p className={styles.author}>{post.author}</p>
        <p className={styles.text}>{post.message}</p>
        <div className={styles.post__footer}>
          <button>Like ❤️ </button>
          <button>Dislike 👎🏼 </button>
        </div>
      </div>
    </Modal>
  );
};

export default PostDetail;

export const loader: LoaderFunction = async ({ params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  if (!response.ok) {
    return undefined;
  }
  const data = await response.json();

  if (data.post) return data.post;
  else return null;
};
