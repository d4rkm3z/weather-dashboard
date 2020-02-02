import React from 'react';
import { defineMessages } from 'react-intl';
import Input from '../Input';
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
  return (
    <div className={styles.root}>
      <Input placeholder={messages.placeholder} />
    </div>
  );
});