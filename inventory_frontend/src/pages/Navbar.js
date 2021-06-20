import React from 'react';
import { withRouter } from 'react-router';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppsIcon from '@material-ui/icons/Apps';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';

const Navbar = ({ history, setActiveState }) => {
  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }));
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      {/* <Divider /> */}
      <div className="navbar-list-container">
        <div className="list-container">
          <List>
            <ListItem button key="Inventory" onClick={() => setActiveState(0)}>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary="Inventory" />
            </ListItem>
          </List>
          <List>
            <ListItem button key="Suppliers" onClick={() => setActiveState(1)}>
              <ListItemIcon>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary="Suppliers" />
            </ListItem>
          </List>
          <List>
            <ListItem button key="Menu" onClick={() => setActiveState(2)}>
              <ListItemIcon>
                <RestaurantMenuIcon />
              </ListItemIcon>
              <ListItemText primary="Menu" />
            </ListItem>
          </List>
          <List>
            <ListItem button key="Reports">
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText
                primary="Reports"
                onClick={() => setActiveState(3)}
              />
            </ListItem>
          </List>
        </div>
        <div div className="list-container">
          <Divider />
          <List>
            <ListItem
              button
              key="Logout"
              onClick={() => {
                localStorage.clear();
                history.push('/login');
              }}
              id="logout-btn"
            >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </div>
      </div>
    </Drawer>
  );
};

export default withRouter(Navbar);
