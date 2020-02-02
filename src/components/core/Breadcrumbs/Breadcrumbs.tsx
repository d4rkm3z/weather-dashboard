import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'core.breadcrumbs.title',
    defaultMessage: 'WeatherReport'
  }
});

interface IProps {
}

export default React.memo<IProps>(function Breadcrumbs() {
  const intl = useIntl();

  return (
    <div>
      <span>{intl.formatMessage(messages.title)}</span>
    </div>
  );
});