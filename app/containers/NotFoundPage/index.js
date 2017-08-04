/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import Button from 'material-ui/Button';
import messages from './messages';
import { WarningIcon } from '../../icons';

const MessageWrapper = styled.div`
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
`;

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MessageWrapper>
        <WarningIcon
          style={{
            width: 72,
            height: 72,
          }}
        />
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Button
          raised
          color="primary"
          to="/"
          component={Link}
        >
          <FormattedMessage {...messages.returnToAccount} />
        </Button>
      </MessageWrapper>
    );
  }
}
