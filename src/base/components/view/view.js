import './view.styl';
import { Header } from '@src/base/components/header/header';

export const View = ({ children, heading }) => {
  return (
    <main className="fdw-view">
      <Header heading={heading} />
      <article className="fdw-view-content">
        {children}
      </article>
    </main>
  );
};
