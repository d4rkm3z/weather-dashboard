import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import styles from './Breadcrumbs.module.scss';

const messages = defineMessages({
  title: {
    id: 'core.breadcrumbs.title',
    defaultMessage: 'Weather Report'
  }
});

interface IProps {
}

export default React.memo<IProps>(function Breadcrumbs() {
  const intl = useIntl();

  return (
    <div className={styles.root}>
      <span>{intl.formatMessage(messages.title)}</span>
    </div>
  );
});