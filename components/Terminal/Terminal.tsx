import styles from "./Terminal.module.css";
import AnimatedTerminal, { Animate } from "./Animation";
import { useState, useRef, useEffect } from "react";

export default function Terminal() {
  const [animateOutput, setAO] = useState(false);
  const cmdRef = useRef<HTMLSpanElement>();

  useEffect(() => {
    setTimeout(() => {
      Animate(
        [
          { text: "volt", color: "#1fcf83" },
          { text: " add next", color: "white" },
        ],
        cmdRef.current,
        50
      ).then(() => setAO(true));
    }, 1000);
  }, []);

  return (
    <div className={styles.terminal}>
      <header className={styles.terminalHeader}>
        {["rgb(255, 113, 113)", "rgb(240, 249, 139)", "rgb(141, 255, 113)"].map(
          (c) => (
            <div
              style={{ backgroundColor: c }}
              className={styles.terminalBtn}
              key={c}
            ></div>
          )
        )}
      </header>
      <main className={styles.terminalMain}>
        /dev/my-project: <span ref={cmdRef}></span>
        {animateOutput && <AnimatedTerminal />}
      </main>
    </div>
  );
}
