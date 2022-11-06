import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeView } from '@src/home/views/home-view';
import routes from '@src/routes';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, name }) => {
          const ViewComponent = getViewComponentByViewName(name);
          return <Route path={path} element={<ViewComponent />} key={name} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

function getViewComponentByViewName(viewName){
  return {
    'home': HomeView
  }[viewName];
}
