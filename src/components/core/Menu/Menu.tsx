import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from './data';

import styles from './Menu.module.scss';

interface IProps {
}

export default React.memo<IProps>(function Menu() {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{data.title}</div>
      <div>
        {data.content.map(item => {
          return (
            <div className={styles.case}>
              <FontAwesomeIcon icon={item.icon} size={'1x'} />
              <span className={styles.text}>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
});