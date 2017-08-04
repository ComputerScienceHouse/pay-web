/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Tabs, { Tab } from 'material-ui/Tabs';
import {
  DrinkIcon,
  SwagIcon,
} from '../../icons';

// MUI Overrides
const styleSheet = createStyleSheet(() => ({
  balanceChip: {
    backgroundColor: '#b0197e',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '18px',
    float: 'right',
    padding: '1em',
  },
}));

const CurrencySwitcher = styled(Tabs)`
  background-color: #b0197e;
  color: #ffffff;
`;

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    classes: PropTypes.object,
  };

  render() {
    return (
      <Card>
        <CurrencySwitcher index={0} onChange={() => {}}>
          <Tab icon={<SwagIcon />} label="Swag Dollars" />
          <Tab icon={<DrinkIcon />} label="Drink Credits" />
        </CurrencySwitcher>
        <div>
          <div style={{ margin: 20 }}>
            <Chip
              classes={{
                root: this.props.classes.balanceChip,
              }}
              label="Available Balance: $10.00"
            />
          </div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Transaction Description</TableCell>
                <TableCell numeric>Amount</TableCell>
                <TableCell numeric>Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>08/02/2017</TableCell>
                <TableCell>CSH SWAG STORE - swag.csh.rit.edu</TableCell>
                <TableCell numeric>- $10.00</TableCell>
                <TableCell numeric>$10.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>08/01/2017</TableCell>
                <TableCell>Balance Reload - Credit Card</TableCell>
                <TableCell numeric>+ $20.00</TableCell>
                <TableCell numeric>$20.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    );
  }
}

export default withStyles(styleSheet)(HomePage);
