import './header.styl';
import { Logo } from '@src/base/components/logo/logo';
import { Link } from '@src/base/components/link/link';

export const Header = ({ heading }) => {
  return (
    <div className="fdw-header">
      <Link to="/" aria-label="homepage">
        <Logo />
      </Link>
      {buildHeading(heading)}
    </div>
  );
};

function buildHeading(heading){
  if(heading) return <h1>{heading}</h1>;
}
