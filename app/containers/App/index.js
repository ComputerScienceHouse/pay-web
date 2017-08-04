/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
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
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {
  AccountIcon,
  AlertIcon,
  CSHIcon,
  HelpIcon,
  MoneyBagIcon,
  MoneyTransferIcon,
  ReceiptIcon,
} from '../../icons';

// MUI Overrides
const styleSheet = createStyleSheet((theme) => ({
  logo: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  sidebar: {
    width: 300,
    top: 'initial',
    position: 'initial',
  },
  unreadBadge: {
    backgroundColor: theme.palette.error[500],
    color: theme.palette.getContrastText(theme.palette.error[500]),
  },
  userAvatar: {
    width: 30,
    height: 30,
  },
}));

const Brand = styled(Typography)`
  flex: 1;
`;

const Layout = styled.div`
  align-items: stretch;
  display: flex;
  width: 100%;
`;

const Sidebar = styled(Drawer)`
  box-shadow: 0 8px 17px rgba(0, 0, 0, .2);
  flex: 0 0 auto;
`;

const Content = styled.div`
  flex: 1 1 auto;
  margin: 2em;
`;

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
  };

  render() {
    const sidebarMenu = [];
    [
      {
        icon: ReceiptIcon,
        label: 'Transaction History',
      },
      {
        icon: MoneyBagIcon,
        label: 'Reload Balance',
      },
      {
        icon: MoneyTransferIcon,
        label: 'Send & Request',
      },
      {
        icon: AccountIcon,
        label: 'Manage Account',
      },
      {
        icon: HelpIcon,
        label: 'Help & Support',
      },
    ].forEach((item) => {
      sidebarMenu.push(
        <div>
          <List disablePadding>
            <ListItem button>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          </List>
          <Divider />
        </div>
      );
    });

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <CSHIcon classes={{ root: this.props.classes.logo }} />
            <Brand type="title" color="inherit">
              Pay
            </Brand>
            <IconButton color="contrast" aria-label="Alerts, 2 unread">
              <Badge
                classes={{
                  colorAccent: this.props.classes.unreadBadge,
                }}
                color="accent"
                badgeContent={2}
                aria-hidden
              >
                <AlertIcon />
              </Badge>
            </IconButton>
            <IconButton color="contrast" aria-label="Profile">
              <Avatar
                classes={{
                  root: this.props.classes.userAvatar,
                }}
                alt="Steven Mirabito"
                src="https://profiles.csh.rit.edu/image/smirabito"
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Layout>
          <Sidebar
            classes={{
              paper: this.props.classes.sidebar,
            }}
            open
            docked
          >
            {sidebarMenu}
          </Sidebar>
          <Content>
            {React.Children.toArray(this.props.children)}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default withStyles(styleSheet)(App);
