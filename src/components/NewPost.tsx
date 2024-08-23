import styles from "./NewPost.module.css";

type Props = {
  onMessageChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const NewPost = ({ onMessageChange, onNameChange }: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.form__input}>
        <label htmlFor="body">Your Message</label>
        <textarea id="body" required rows={3} onChange={onMessageChange} />
      </div>

      <div className={styles.form__input}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onNameChange} />
      </div>
    </form>
  );
};

export default NewPost;
