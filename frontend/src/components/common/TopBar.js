import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Toolbar, Grid, Typography, Avatar, MenuItem, Menu, Button, Box } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router';
import { IS_USER } from '../../redux/constants';
import Logo from '../../assets/Logo.png'
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
    // const [open, setOpen] = React.useState(false);
    const isUser = useSelector((data) => data.auth.isUser)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigation = useNavigate()
    const dispatch = useDispatch()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        navigation('/');
        dispatch({
            type: IS_USER,
            payload: false
        })
    };
    // const drawerHandler = () => {
    //     setOpen(!open);
    // };
    // function valuetext(value) {
    //     return `${value}°C`;
    // }

    return (
        <Box sx={{
            display: 'flex',
            marginTop: "2.4vh",
            marginLeft: "1.1vw",
            
            width: "100%",
            height: "4vh",
            justifyContent:"space-between"
        }}
            className="Navigation"
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: "39vw"
            }}
                className='Navigation_LeftFlex'
            >
                <img className='Navigation__Logo' sx={{
                    display: 'flex',
                    width: "12vw",
                }} src={Logo}></img>
                <Box sx={{
                    display: 'flex',
                    backgroundColor: "#ED2024",
                    width: "2px",
                    height: "4vh"
                }} className='Navigation__Divider1'>
                </Box>
                <Box sx={{
                    display: 'flex',
                    fontFamily: 'Hind Vadodara',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '1.8vw',
                    color: '#000000'
                }} className='Navigation__Title'>
                    KYC Request Dashboard
                </Box>
            </Box>
            <Box sx={{
                fontFamily: 'Hind Vadodara',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '1.8vw',
                color: '#000000',
                marginRight: "1.9vw",
                alignSelf:"center"
            }}>
                
                    {
                        isUser ?
                            <div style={{ float: "right", marginLeft: "85%", }} >
                                {/* <span><Avatar >JD</Avatar></span> */}
                            </div>
                            : null
                    }
                    {isUser ? <Grid container direction={"row"} spacing={1} justify="flex-end">
                        {/* <Grid item><Typography>John Doe</Typography></Grid> */}
                        <Button onClick={handleClose}>Logout</Button>
                        <Grid item>
                            {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
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
                            </Menu> */}
                        </Grid>
                    </Grid> : null}
            </Box>
        </Box>
    );
}



