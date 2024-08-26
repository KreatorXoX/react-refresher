import { useState } from "react";

import styles from "./NewPost.module.css";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

type Props = {};

const NewPost = ({}: Props) => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const cancelHandler = () => {
    navigate(-1);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const createdPost = { author: name, message: message };
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdPost),
    });
  };

  return (
    <Modal>
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
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  );
};

export default NewPost;
