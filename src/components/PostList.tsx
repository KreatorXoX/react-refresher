import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";
import Modal from "./Modal";

type Props = {};

const PostList = ({}: Props) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      {modalOpen && (
        <Modal onClose={onModalClose} isOpen={modalOpen}>
          <NewPost
            onMessageChange={onMessageChange}
            onNameChange={onNameChange}
          />
        </Modal>
      )}

      <ul className={styles.list}>
        <Post name={name} message={message} />
      </ul>
    </>
  );
};

export default PostList;
