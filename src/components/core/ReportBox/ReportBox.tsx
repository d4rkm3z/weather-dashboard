import React from 'react';

import styles from './ReportBox.module.scss';

interface IProps {
  children: React.ReactNode
}

export default React.memo<IProps>(function ReportBox({ children }) {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
});