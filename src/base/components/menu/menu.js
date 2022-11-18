import './menu.styl';
import routes from '@src/routes';
import { Link } from '@src/base/components/link/link';

export const Menu = () => {
  return (
    <nav className="fwd-menu">
      <ul>
        {routes.map(({ name, path }) => (
          <li key={name}>
            <Link to={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
