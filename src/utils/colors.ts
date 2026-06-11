const randomFromList = (values: string[]) => {
  return values[Math.floor(Math.random() * values.length)];
};

export const randomBackgroundColor = () => {
  return randomFromList(["bg-2026-blue", "bg-2026-pink", "bg-2026-green"]);
};
