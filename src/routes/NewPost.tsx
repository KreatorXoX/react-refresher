import { useNavigate, Form, ActionFunction, redirect } from "react-router-dom";

import Modal from "../components/Modal";

import styles from "./NewPost.module.css";

type Props = {};

const NewPost = ({}: Props) => {
  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate(-1);
  };

  return (
    <Modal>
      <Form className={styles.form} method="post">
        <div className={styles.form__input}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" required name="message" rows={3} />
        </div>

        <div className={styles.form__input}>
          <label htmlFor="author">Your name</label>
          <input type="text" id="author" name="author" required />
        </div>
        <div className={styles.actions}>
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Modal>
  );
};

export default NewPost;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  return redirect("/");
};
