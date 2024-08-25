import { useState } from "react";
import styles from "./NewPost.module.css";

type PostType = { author: string; message: string } | undefined;

type Props = {
  onModalClose: () => void;
  onAddNewPost: (post: PostType) => void;
};

const NewPost = ({ onModalClose, onAddNewPost }: Props) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onAddNewPost({ author: name, message: message });
    onModalClose();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.form__input}>
        <label htmlFor="body">Your Message</label>
        <textarea id="body" required rows={3} onChange={onMessageChange} />
      </div>

      <div className={styles.form__input}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onNameChange} />
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={onModalClose}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NewPost;
