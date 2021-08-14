import { useState, useEffect } from "react";

export default function Pointer() {
  const [isWhite, setIsWhite] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsWhite((x) => !x), 500);
  });

  return (
    <span
      style={{
        userSelect: "none",
        color: "transparent",
        backgroundColor: isWhite ? "white" : "transparent",
      }}
    >
      _
    </span>
  );
}
