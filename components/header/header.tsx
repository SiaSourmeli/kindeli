import Link from "next/link";
import styles from "./header.module.css";
import MenuButton from "../menu-button/menu-button";
import { useState } from "react";

export default function Header({headerTop}: {headerTop: boolean}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={headerTop ? styles.header : ''}>
      <nav className={`${styles.headerContainer} container`}>
        <div className={styles.logoWrap}>
          <Link href="/" className={`${styles.logo}`}>
            <span>KYNTHIA</span>
            <span className={styles.logoLastName}>KINDELI</span>
          </Link>
        </div>

        <div
          className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ""}`}
        >
          <ul>
            <Link href="/work" className={styles.navLink}>
              Work
            </Link>

            <Link href="/about" className={styles.navLink}>
              About
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
