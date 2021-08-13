import styles from "./Home.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.banner}>In Development</div>
      <div>
        <div className={styles.txt}>
          <span style={{ color: "var(--voltcolor)" }}>Rapid.</span> Reliable.
          Reproducible.
        </div>
        <div className={styles.subtxt}>Develop and Deploy faster with Volt</div>
      </div>
      <div className={styles.waitlist}>
        <div className={styles.icon}>
          <Image src="/assets/email.svg" width="25%" height="25%" alt="@" />
        </div>
        <div className={styles.txtarea}>
          <input type="text" placeholder="email" />
        </div>
        <div className={styles.submit}>
          <span>Join Waitlist!</span>
        </div>
      </div>
      <Image
        src="/assets/preview.svg"
        width="100vw"
        height="100vh"
        alt=""
      ></Image>
    </div>
  );
}
