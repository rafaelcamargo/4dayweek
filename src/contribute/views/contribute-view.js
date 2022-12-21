import './contribute-view.styl';
import ENV from '@environment';
import { Link } from '@src/base/components/link/link';
import { View } from '@src/base/components/view/view';

export const ContributeView = () => {
  const description = 'If you work in a 4-day week company or would like to suggest one to be added to the list, you can contribute to this project by filling out a Google Form or opening a pull request on Github.';
  return (
    <div className="fdw-contribute-view">
      <View
        heading="Contribute"
        description={description}
        keywords="four-day week, contribute"
      >
        <p>
          {description}
        </p>
        <ul className="fdw-contribute-view-links">
          <li>
            <Link href={ENV.ADD_COMPANY_FORM_LINK} external>
              Fill Google Form
            </Link>
          </li>
          <li>
            <Link href="https://github.com/rafaelcamargo/4dayweek#contributing" external>
              Open a Pull Request
            </Link>
          </li>
        </ul>
      </View>
    </div>
  );
};
