import './view.styl';
import { Header } from '@src/base/components/header/header';
import { Link } from '@src/base/components/link/link';
import { Menu } from '@src/base/components/menu/menu';
import { Meta } from '@src/base/components/meta/meta';

export const View = ({ children, heading, description, keywords }) => {
  return (
    <Meta title={heading} description={description} keywords={keywords}>
      <main className="fdw-view">
        <Header heading={heading} />
        <article className="fdw-view-content">
          {children}
        </article>
        <footer className="fdw-view-footer">
          <Menu />
          <div className="fdw-view-footer-credits">
            Created and curated by
            <Link href="https://rafaelcamargo.com/?utm_source=4dayweek" external>
              Rafael Camargo
            </Link>
          </div>
        </footer>
      </main>
    </Meta>
  );
};
