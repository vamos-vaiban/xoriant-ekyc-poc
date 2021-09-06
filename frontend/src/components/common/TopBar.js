import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Toolbar, Grid, Typography, Avatar,MenuItem,Menu,Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from "react-redux"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        // backgroundColor:"red"
    },
}));

export default function TopBar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const isUser = useSelector((data) => data.auth.isUser)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const drawerHandler = () => {
        setOpen(!open);
    };
    function valuetext(value) {
        return `${value}°C`;
    }
   
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                <div style={{ float: "left", }} >
                    <Typography variant="h6" noWrap>
                        Logo
                    </Typography>
                    </div>
                    {
                        isUser ?
                            <div style={{ float: "right", marginLeft: "85%", }} >
                                <span><Avatar >JD</Avatar></span>
                            </div>
                            : null
                    }
                   {isUser? <Grid container direction={"row"} spacing="1" justify="flex-end">
                        <Grid item><Typography>John Doe</Typography></Grid>
                        <Grid item>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                <ExpandMoreIcon />
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>:null}
                </Toolbar>
            </AppBar>
        </div>
    );
}



