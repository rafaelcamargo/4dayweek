import { useEffect } from 'react';
import metaTagsService from '@src/base/services/meta-tags';

export const Meta = ({ children, title, description, keywords }) => {
  useEffect(() => {
    metaTagsService.build({
      title,
      description,
      keywords
    });
  }, []);

  return <>{children}</>;
};
