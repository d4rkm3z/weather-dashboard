import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import styles from './SearchBar.module.scss';
import Input from '../Input/Input';

const messages = defineMessages({
  placeholder: {
    id: 'core.searchBar.placeholder',
    defaultMessage: 'Search...',
  },
});

interface IProps {
}

export default React.memo<IProps>(function SearchBar() {
  return (
    <div className={styles.root}>
      <Input placeholder={messages.placeholder}/>
    </div>
  );
});