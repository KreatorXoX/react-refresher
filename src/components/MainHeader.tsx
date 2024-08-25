import styles from "./MainHeader.module.css";
import { MdPostAdd } from "react-icons/md";
import { IoBeerOutline } from "react-icons/io5";

type Props = { onModalOpen: () => void };

const MainHeader = ({ onModalOpen }: Props) => {
  return (
    <header className={styles.main__header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <IoBeerOutline size={40} />
        </h1>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li onClick={onModalOpen}>
              <p className={styles.nav__link}>
                <MdPostAdd size={30} />
                New Post
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
