import './header.styl';
import { Logo } from '@src/base/components/logo/logo';

export const Header = ({ heading }) => {
  return (
    <div className="fdw-header">
      <Logo /> {buildHeading(heading)}
    </div>
  );
};

function buildHeading(heading){
  if(heading) return <h1>{heading}</h1>;
}
