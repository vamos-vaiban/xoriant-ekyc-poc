import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, AppBar, CssBaseline, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TopBar from '../../components/common/TopBar';
import Slider from "./Slider"
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerold: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  //newly added
  drawer: {
    width: "240px",
    height: "300px",
    // marginTop:"20%",
    width: drawerWidth,
    // height:"50%",
    flexShrink: 0,
    whiteSpace: 'nowrap',

  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const stepsForKyc = useSelector((data)=>data.nav.stepsForKyc)
  const drawerHandler = () => {
    setOpen(!open);
  };
  function valuetext(value) {
    return `${value}°C`;
  }

 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Toolbar />
        <div>
          <Divider />
          <List>
            <ListItem button key={"text"} onClick={drawerHandler}>
              <ListItemIcon>{open === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}</ListItemIcon>
              <ListItemText primary={"Steps for KYC"} />
            </ListItem>

            <Divider />
            <Slider open={open}  data={stepsForKyc}/>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
}
