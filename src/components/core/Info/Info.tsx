import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

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

  return (
    <div>
      <div>{intl.formatMessage(messages.title, { name: 'West Virginia' })}</div>
      <div>{intl.formatMessage(messages.message)}</div>
      <div>
        %temperature%
        <button>{intl.formatMessage(messages.link)}</button>
      </div>
    </div>
  );
});