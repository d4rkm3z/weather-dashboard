import React from 'react';
import { MessageDescriptor, useIntl } from 'react-intl';

import styles from './Input.module.scss';

interface IProps {
  placeholder: MessageDescriptor
}

export default React.memo<IProps>(function Input({ placeholder }) {
  const intl = useIntl();

  return (
    <input
      className={styles.root}
      type="search"
      placeholder={intl.formatMessage(placeholder)}
    />
  );
});