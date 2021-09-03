import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Toolbar, Typography,Avatar } from '@material-ui/core';
import {useSelector} from "react-redux"

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
    const isUser = useSelector((data)=>data.auth.isUser)
    // const drawerHandler = () => {
    //     setOpen(!open);
    // };
    // function valuetext(value) {
    //     return `${value}°C`;
    // }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Logo
                    </Typography>
                    {
                        isUser?
                        <div style={{float:"right",marginLeft:"90%",}} >
                            <span>
                           <Avatar >JD</Avatar>
                           
                           {/* <Typography>John Doe</Typography> */}
                           </span>
                        </div>
                        :null
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}



