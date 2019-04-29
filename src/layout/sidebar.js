import React, { useEffect } from 'react';
import classNames from "classnames";
import { Link } from 'react-navi';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import useGlobal from "../store";

const drawerWidth = 200;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  a: {
    textDecoration: 'none'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 7 + 1
    }
  },
});

function Sidebar({ classes }) {
  const [globalState, globalActions] = useGlobal();
  const matches = window.matchMedia('(max-width: 600px)').matches;

  useEffect(() => {
    if(matches)
      globalActions.handleDrawer()

  }, []);

  return (
    <Drawer
      variant="permanent"
      open={globalState.drawer}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: globalState.drawer,
        [classes.drawerClose]: !globalState.drawer
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: globalState.drawer,
          [classes.drawerClose]: !globalState.drawer
        }),
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {['Product'].map((text, index) => (
            <Link href="/" className={classes.a} key={text}>
              <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <ShoppingBasketIcon /> : <ShoppingBasketIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
              </ListItem>
            </Link>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}

export default withStyles(styles)(Sidebar);
