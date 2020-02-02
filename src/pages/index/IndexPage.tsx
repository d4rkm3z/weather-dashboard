import React from 'react';
import SideBar from 'components/common/SideBar';
import Dashboard from 'components/common/Dashboard';
import Header from 'components/common/Header';

import styles from './Index.module.scss';

export default React.memo<{}>(function IndexPage() {
  return (
    <div className={styles.root}>
      <SideBar />
      <div>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
});

