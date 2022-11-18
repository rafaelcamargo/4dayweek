export const formatSrc = src => {
  return src.replace(/https?:\/\/.+\/assets\/\.\.\//, '/');
};
