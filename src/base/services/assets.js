export const formatSrc = src => {
  return src.replace(/http:\/\/.+\/assets\/\.\.\//, '/');
};
