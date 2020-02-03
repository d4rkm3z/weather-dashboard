import React from 'react';
import ReportBox from 'components/core/ReportBox';

import styles from './WeekReport.module.scss';

interface IProps {
}

export default React.memo<IProps>(function WeekReport() {
  return (
    <ReportBox className={styles.root}>
      <div>WeekReport</div>
    </ReportBox>
  );
});