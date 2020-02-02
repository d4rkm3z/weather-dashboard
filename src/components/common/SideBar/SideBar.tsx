import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import Menu from 'components/core/Menu';

import styles from './SideBar.module.scss';

export default React.memo(function SideBar() {
  return (
    <aside className={styles.root}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faDev} size={'3x'} className={styles.icon} />
        <span className={styles.logo}>Gleek</span>
      </div>
      <div className={styles.content}>
        <Menu />
      </div>
    </aside>
  );
});