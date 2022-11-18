import { render, RouterMock } from '@src/base/services/testing';
import { FeedbackView } from './feedback-view';

describe('Feedback View', () => {
  function mount(){
    return render(
      <RouterMock>
        <FeedbackView />
      </RouterMock>
    );
  }

  it('should contain logo and heading', () => {
    const { getByAltText, getByRole } = mount();
    expect(getByAltText('Four Day Week\'s Logo')).toBeInTheDocument();
    expect(getByRole('heading', { name: 'Feedback' })).toBeInTheDocument();
  });

  it('should contain a link to get in touch', () => {
    const { getByText } = mount();
    expect(getByText(/send feedback/i)).toHaveAttribute('href', 'https://rafaelcamargo.com/contact');
  });
});
