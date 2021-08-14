import { useEffect, useRef } from "react";
import { Token, tokens as data } from "./tokens";

const timeout = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function Animate(
  data: Token[],
  root: HTMLElement,
  ms: number = 0
) {
  for (const token of data) {
    const curr = document.createElement("span");
    curr.style.color = token.color;
    curr.textContent = token.noAnimation ? token.text : "";

    root.appendChild(curr);

    if (!token.noAnimation) {
      for (const letter of token.text) {
        curr.textContent += letter;
        await new Promise((r) => setTimeout(r, 1));
      }
    }
  }
}
