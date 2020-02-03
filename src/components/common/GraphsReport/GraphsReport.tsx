import React from 'react';
import ReportBox from 'components/core/ReportBox';

import styles from './GraphsReport.module.scss';

interface IProps {
}

export default React.memo<IProps>(function GraphsReport() {
  return (
    <ReportBox className={styles.root}>
      GraphsReport
    </ReportBox>
  );
});