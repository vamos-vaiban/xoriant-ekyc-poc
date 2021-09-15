import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { useStyles } from "./styles"


export default function AadharValidation() {
  const classes = useStyles();
 
  return (
    <Grid container alignItems={"center"} justifyContent={"center"} style={{ overflow: "none" }}>
      <Grid item xs={12} sm={6} className={classes.grid}>
        <Paper elevation={3} className={classes.paper}>
          <form>
            <Typography variant={"h4"} className={classes.title}> Thank You!</Typography>
          </form>
        </Paper>
      </Grid>
     
    </Grid>
  );
}


