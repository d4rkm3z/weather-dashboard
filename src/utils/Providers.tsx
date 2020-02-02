import React, { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

interface IProps {
  children: ReactNode
}

export default React.memo<IProps>(function Providers({ children }) {
  return (
    <IntlProvider locale={'en'}>
      {children}
    </IntlProvider>
  );
});