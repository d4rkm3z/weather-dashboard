import React from 'react';
import ReportBox from 'components/core/ReportBox';
import { ReactComponent as MapImg } from 'assets/img/russia.svg';
import styles from './MapReport.module.scss';

interface IProps {
}

export default React.memo<IProps>(function MapReport() {
  return (
    <ReportBox className={styles.root}>
      <div className={styles.img}>
        <MapImg className={styles.map} title="map"/>
      </div>
    </ReportBox>
  );
});