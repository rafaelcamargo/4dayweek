import './logo.styl';
import { formatSrc } from '@src/base/services/assets';
import logoImageUrl from '@src/base/images/logo.svg';

export const Logo = () => {
  return (
    <img
      className="fdw-logo"
      src={formatSrc(logoImageUrl)}
      alt="Four Day Week's Logo"
    />
  );
};
