import React from 'react';

import styles from './SideBar.module.scss';

interface IProps {
}

export default React.memo<IProps>(function SideBar() {
  return (
    <aside className={styles.root}>
      <div>Sidebar</div>
    </aside>
  );
});