import styles from "./Terminal.module.css";
import { Animate } from "./Animation";
import { useRef, useEffect, useState } from "react";
import { tokens } from "./tokens";
import Pointer from "./Pointer";

export default function Terminal() {
  const cmdRef = useRef<HTMLSpanElement>();
  const inputRef = useRef<HTMLSpanElement>();
  const outputRef = useRef<HTMLPreElement>();
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      await Animate(
        [
          { text: "volt", color: "#1fcf83" },
          { text: " add next", color: "white" },
        ],
        cmdRef.current,
        50
      );

      await Animate(tokens, outputRef.current);

      setDone(true);
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
        <pre ref={outputRef}></pre>
        {done && (
          <span>
            /dev/my-project: <Pointer />
          </span>
        )}
      </main>
    </div>
  );
}
