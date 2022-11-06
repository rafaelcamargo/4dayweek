import './home-view.styl';
import { View } from '@src/base/components/view/view';
import { CompanyList } from '@src/companies/components/company-list/company-list';

export const HomeView = () => {
  return (
    <div className="fdw-home-view">
      <View heading="Four-Day Week">
        <p>
          The idea behind this website is getting togheter all the companies
          that already work four days a week or that sympathize with shorter
          work weeks.
        </p>
        <h2>Companies</h2>
        <CompanyList />
      </View>
    </div>
  );
};
