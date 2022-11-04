import './logo.styl';
import logoImageUrl from '@src/base/images/logo.svg';

export const Logo = () => {
  return (
    <img className="fdw-logo" src={logoImageUrl} alt="Four Day Week's Logo" />
  );
};
