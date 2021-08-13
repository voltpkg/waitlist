import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.nav}>
      <div style={{ paddingLeft: "20px" }}>
        <Image
          src="/assets/logo.svg"
          width="60em"
          height="60em"
          alt="Volt"
        ></Image>
      </div>
      <div style={{ paddingRight: "35px", display: "flex" }}>
        <div style={{ margin: "50px 10px", cursor: "pointer" }}>
          <Link href="https://github.com/voltpkg" passHref>
            <a>
              <Image
                src="/assets/github.svg"
                width="35"
                height="35"
                alt="GitHub"
              ></Image>
            </a>
          </Link>
        </div>
        <div style={{ margin: "50px 10px", cursor: "pointer" }}>
          <Link href="https://discord.gg/KjzEwzXe7Z" passHref>
            <a>
              <Image
                src="/assets/discord.svg"
                width="35"
                height="35"
                alt="Discord"
              ></Image>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
