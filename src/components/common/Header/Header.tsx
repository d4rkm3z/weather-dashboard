import React from 'react';
import SearchBar from 'components/core/SearchBar';
import Breadcrumbs from 'components/core/Breadcrumbs';

import styles from './Header.module.scss';

interface IProps {
}

export default React.memo<IProps>(function Header() {
  return (
    <div className={styles.root}>
      <SearchBar/>
      <Breadcrumbs/>
    </div>
  );
});