import Link from "next/link";
import styles from "./header.module.css";
import { Baloo_2 } from "next/font/google";

const fontLogo = Baloo_2({ subsets: ["latin"] });

export default function Header() {
  return (
    <nav className={styles.headerContainer}>
      <div>
        <Link href="/" className={`${styles.logo} ${fontLogo.className}`}>
          <h1>Kynthia Kindeli</h1>
        </Link>
      </div>

      <div>
        {/* <button className={`${styles.box} ${styles.button}`}>Menu</button> */}
        <Link href="/work" className={styles.links}>
          Work
        </Link>
        <Link href="/contact" className={styles.links}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
