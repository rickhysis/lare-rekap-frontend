import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import Avatar from '@material-ui/core/Avatar';
import useGlobal from "../store";
//import icon from './icon.png';

const drawerWidth = 240;

const styles = theme => ({
  avatar: {
    margin: 10,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
});

function Header({ classes }) {
  const [globalState, globalActions] = useGlobal();

  console.log(globalState)
  //<Avatar alt="Lare Media Teknologi" src={icon} className={classes.avatar} /> 

  return (
    <AppBar 
      position="fixed" 
      className={classes.appBar}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={globalActions.handleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow} noWrap>
          Lare Rekap
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);