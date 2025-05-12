export const randomGen = (max: number) => {
  max = Math.floor(max);
  return Math.floor(Math.random() * max);
};
