import Link from "next/link";
import styles from "./menu-button.module.css";

export default function MenuButton(props: { active: any; onClick: () => void; }) {
  return (
    <>
       <button type='button' aria-label="navigation menu" className={`${styles.navButton} ${props.active ? 'active' : ''}`} onClick={() => {props.onClick()}}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </button>
    </>
  );
}
