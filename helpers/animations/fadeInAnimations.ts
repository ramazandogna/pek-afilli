export const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i
    }
  })
};
