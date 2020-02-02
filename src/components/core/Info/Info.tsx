import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import ReportBox from '../ReportBox';
import styles from './Info.module.scss';

const messages = defineMessages({
  title: {
    id: 'core.info.title',
    defaultMessage: 'Welcome Back {name}',
  },
  message: {
    id: 'core.info.message',
    defaultMessage: `A small river named Duden flows by their place and supplies
      it with the necessary regelialia. It is a paradisematic country,
      in which roasted parts of sentences fly into your mouth.`,
  },
  link: {
    id: 'core.info.button',
    defaultMessage: 'Charleston',
  },
});

interface IProps {
}

export default React.memo<IProps>(function Info() {
  const intl = useIntl();

  let temperature = 24;

  return (
    <ReportBox className={styles.root}>
      <div className={styles.text}>
        <span className={styles.title}>
          {intl.formatMessage(messages.title, { name: 'West Virginia' })}
        </span>
        <article className={styles.article}>{intl.formatMessage(messages.message)}</article>
      </div>

      <div className={styles.block}>
        <span className={styles.temperature}>
          <FontAwesomeIcon icon={faCloudSun} size={'1x'} />
          <span>{temperature}&#x2103;</span>
        </span>
        <a href="#"
           className={styles.button}
        >
          {intl.formatMessage(messages.link)}
        </a>
      </div>
    </ReportBox>
  );
});