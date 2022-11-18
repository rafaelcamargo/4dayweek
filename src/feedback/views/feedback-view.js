import { Link } from '@src/base/components/link/link';
import { View } from '@src/base/components/view/view';

export const FeedbackView = () => {
  const description = 'If you have any suggestion on how to make this website better, I would love to know your thoughts.';
  return (
    <div className="fdw-contribute-view">
      <View
        heading="Feedback"
        description={description}
        keywords="four-day week, feeedback"
      >
        <p>
          {description}
        </p>
        <p>
          <Link href="https://rafaelcamargo.com/contact" external>
            Send Feedback
          </Link>
        </p>
      </View>
    </div>
  );
};
