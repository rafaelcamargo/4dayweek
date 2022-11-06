const routes = require('./src/routes');

const _public = {};

_public.getRoutes = () => {
  const paths = getRoutePaths();
  return paths.map(path => `${path}?analytics=disabled`);
};

function getRoutePaths(){
  return routes.map(route => route.path);
}

module.exports = _public;
