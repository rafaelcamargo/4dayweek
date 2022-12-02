import { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
export * from 'react-router-dom';
import analyticsService from '@src/base/services/analytics';

const History = ({ children }) => {
  const location = useLocation();
  useEffect(() => analyticsService.trackPageView(), [location]);
  return <>{children}</>;
};

export const CustomRouter = ({ children }) => {
  return (
    <BrowserRouter>
      <History>
        {children}
      </History>
    </BrowserRouter>
  );
};
