import React from 'react';
import ReportBox from 'components/core/ReportBox';
import styles from './DetailedReport.module.scss';

interface IProps {
}

export default React.memo<IProps>(function DetailedReport() {
  return (
    <ReportBox className={styles.root}>
      <div>DetailedReport</div>
    </ReportBox>
  );
});