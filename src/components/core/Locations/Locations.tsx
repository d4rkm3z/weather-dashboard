import React from 'react';
import ReportBox from '../ReportBox';
import styles from './Locations.module.scss';

interface IProps {
}

export default React.memo<IProps>(function Locations() {
  return (
    <ReportBox className={styles.root}>
      Locations
    </ReportBox>
  );
});