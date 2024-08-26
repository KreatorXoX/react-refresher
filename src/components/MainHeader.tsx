import { Link } from "react-router-dom";
import { IoBeerOutline } from "react-icons/io5";
import { MdPostAdd } from "react-icons/md";

import styles from "./MainHeader.module.css";

type Props = {};

const MainHeader = ({}: Props) => {
  return (
    <header className={styles.main__header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <IoBeerOutline size={40} />
        </h1>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li>
              <Link to="/new-post" className={styles.nav__link}>
                <MdPostAdd size={30} />
                New Post
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
