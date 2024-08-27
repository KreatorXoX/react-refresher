import { useNavigate } from "react-router-dom";
import styles from "./Post.module.css";
type Props = {
  author: string | undefined;
  message: string | undefined;
  id: string | undefined;
};

export default function Post({ author, message, id }: Props) {
  const navigate = useNavigate();
  const postDetailHandler = () => {
    navigate(`/post/${id}`);
  };
  return (
    <li className={styles.post} onClick={postDetailHandler}>
      <p className={styles.author}>{author ? author : "Anonymous"}</p>
      <p className={styles.message}>{message ? message : "No Message"}</p>
    </li>
  );
}
