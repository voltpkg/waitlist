export type Token = {
  text: string;
  color: string;
  noAnimation?: boolean;
};

export const tokens: Token[] = [
  {
    text: "Resolving Dependencies ",
    color: "#FF70B5",
    noAnimation: true,
  },
  { text: "[", color: "white", noAnimation: true },
  {
    text: "=====================",
    color: "#CE8FFF",
    noAnimation: true,
  },
  { text: "] [", color: "white", noAnimation: true },
  { text: "OK", color: "#1AF194", noAnimation: true },
  { text: "]\n", color: "white", noAnimation: true },

  {
    text: "Resolved 264 Dependencies in 0.0069 seconds\n",
    color: "#1EF498",
    noAnimation: true,
  },
  { text: "warn: ", color: "#F0F98B", noAnimation: true },
  { text: "@next/react-refresh-utils", color: "#6CD6FC", noAnimation: true },
  { text: " has unmet peer dependency ", color: "white", noAnimation: true },
  { text: "react-refresh\n", color: "#F0F98B", noAnimation: true },

  { text: "warn: ", color: "#F0F98B", noAnimation: true },
  { text: "@next/react-refresh-utils", color: "#6CD6FC", noAnimation: true },
  { text: " has unmet peer dependency ", color: "white", noAnimation: true },
  { text: "webpack\n", color: "#F0F98B", noAnimation: true },

  { text: "warn: ", color: "#F0F98B", noAnimation: true },
  { text: "@next/react-dev-overlay", color: "#6CD6FC", noAnimation: true },
  { text: " has unmet peer dependency ", color: "white", noAnimation: true },
  { text: "react\n", color: "#F0F98B", noAnimation: true },

  {
    text: "Installing Packages ",
    color: "#FF70B5",
    noAnimation: true,
  },
  { text: "[", color: "white", noAnimation: true },
  {
    text: "=====================",
    color: "#CE8FFF",
  },
  { text: "] 264/264\n", color: "white", noAnimation: true },

  {
    text: "Finished in 0.23s",
    color: "#1EF498",
    noAnimation: true,
  },
];
