import React from 'react';
import classNames from 'classnames';
import styles from './ReportBox.module.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default React.memo<IProps>(function ReportBox({
                                                       children,
                                                       className,
                                                     }) {
  return (
    <div className={classNames(styles.root, className)}>
      {children}
    </div>
  );
});