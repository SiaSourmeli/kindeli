import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.wrap}>
        <Image
          src="https://ucarecdn.com/54210b83-1849-4299-8346-3c80c4baff9d/KYN_6715websiteK.jpg"
          width={1200}
          height={0}
          alt="hero"
          className={styles.heroImage}
        />
      </div>
    </div>
  );
}
