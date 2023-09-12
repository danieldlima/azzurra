export const getClientSizes = () => {
  const WINDOW_WIDTH =
    window.innerWidth && document.documentElement.clientWidth
      ? Math.max(window.innerWidth, document.documentElement.clientWidth)
      : window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName('body')[0].clientWidth;

  const WINDOW_HEIGHT =
    window.innerHeight && document.documentElement.clientHeight
      ? Math.min(window.innerHeight, document.documentElement.clientHeight)
      : window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName('body')[0].clientHeight;

  return { width: WINDOW_WIDTH, height: WINDOW_HEIGHT };
};
