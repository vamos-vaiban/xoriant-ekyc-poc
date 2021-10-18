import { Grid, Paper } from '@material-ui/core';
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Outlet } from 'react-router-dom';
import TopBar from '../../components/common/TopBar';
import { useStyles } from '../../views/BasicDetails/styles';
// const useStyles = makeStyles((theme) => ({
//     root: {
//         marginBottom: theme.spacing(2)
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
// }));

export default function AdminLayout() {
    const classes = useStyles();

    return (
        <div>
            <TopBar />
            <div>
                <Grid container alignItems={"center"} justifyContent={"center"}>
                    <Grid item className={classes.grid}>
                        <Outlet />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}


