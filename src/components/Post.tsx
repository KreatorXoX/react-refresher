import styles from "./Post.module.css";
type Props = {
  name: string | undefined;
  message: string | undefined;
};

export default function Post({ name, message }: Props) {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{name ? name : "Anonymous"}</p>
      <p className={styles.message}>{message ? message : "No Message"}</p>
      <div className={styles.post__footer}>
        <button>Like ❤️ </button>
        <button>Dislike 👎🏼 </button>
      </div>
    </li>
  );
}
