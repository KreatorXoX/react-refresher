import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const onModalClose = () => {
    setModalOpen(false);
  };
  const onModalOpen = () => {
    setModalOpen(true);
  };
  return (
    <>
      <MainHeader onModalOpen={onModalOpen} />
      <main>
        <PostList isModalOpen={modalOpen} onModalClose={onModalClose} />
      </main>
    </>
  );
}

export default App;
