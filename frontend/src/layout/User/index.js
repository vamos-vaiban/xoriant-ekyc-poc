import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, CssBaseline, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
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
  label:{
    fontWeight:"bold",
    fontSize:"1.7em",
    color:theme.palette.primary.contrastText
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const theme = useTheme()
  const stepsForKyc = useSelector((data)=>data.nav.stepsForKyc)
  const drawerHandler = () => {
    setOpen(!open);
  };
  // function valuetext(value) {
  //   return `${value}°C`;
  // }

 
  return (
    <div>
      <div style={{
        
        paddingLeft:"5vw",
      }}>
      <TopBar />
      </div>
    <div className={classes.root}>
      <CssBaseline />
      
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
              <ListItemIcon className={classes.label}>{open === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}</ListItemIcon>
              <ListItemText ><Typography className={classes.label}>{"Steps For KYC"}</Typography></ListItemText>
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
    </div>
  );
}
