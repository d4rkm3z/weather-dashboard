import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import styles from './SearchBar.module.scss';

const messages = defineMessages({
  placeholder: {
    id: 'core.searchBar.placeholder',
    defaultMessage: 'Search...',
  },
});

interface IProps {
}

export default React.memo<IProps>(function SearchBar() {
  const intl = useIntl();

  return (
    <div className={styles.root}>
      <input type="search" placeholder={intl.formatMessage(messages.placeholder)} />
    </div>
  );
});