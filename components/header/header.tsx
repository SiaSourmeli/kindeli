import Link from "next/link";
import styles from "./header.module.css";
import MenuButton from "../menu-button/menu-button";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.headerContainer} container`}>
        <div>
          <Link href="/" className={`${styles.logo}`}>
            <p>Kynthia</p>
            <p className={styles.logoPadding}>Kindeli</p>
          </Link>
        </div>

        <div
          className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ""}`}
        >
          <ul>
            <Link href="/archive" className={styles.navLink}>
              Archive
            </Link>

            <Link href="/bio" className={styles.navLink}>
              Bio
            </Link>

            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </ul>
        </div>
        <MenuButton active={menuOpen} onClick={handleMenuClick} />
      </nav>
    </header>
  );
}
