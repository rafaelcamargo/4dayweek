import { render, within, RouterMock } from '@src/base/services/testing';
import { CollaboratorsView } from './collaborators-view';

describe('Collaborators View', () => {
  function mount(){
    return render(
      <RouterMock>
        <CollaboratorsView />
      </RouterMock>
    );
  }

  it('should contain logo and heading', () => {
    const { getByAltText, getByRole } = mount();
    expect(getByAltText('Four Day Week\'s Logo')).toBeInTheDocument();
    expect(getByRole('heading', { name: 'Collaborators' })).toBeInTheDocument();
  });

  it('should contain a collaborators list', () => {
    const { getByText } = mount();
    const secondCollaboratorItem = getByText(/lucas cunha/i).parentElement;
    expect(getByText(/andre pereira/i)).toBeInTheDocument();
    expect(
      within(secondCollaboratorItem).getByText(/learn more →/i)
    ).toHaveAttribute('href', 'https://thegamingpub.com/');
  });
});
