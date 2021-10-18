import * as React from 'react';
import { Grid, Typography, Avatar, Button, Box, TextField, Paper, Checkbox, IconButton, Card, CardContent, CardMedia } from '@material-ui/core';
import { useStyles } from "./styles"
import { find } from "lodash"
export default function Review(props) {
  const userSpecificDataString = localStorage.getItem('userSpecificData');
  debugger
  const userSpecificData = JSON.parse(userSpecificDataString)
  let refObj = userSpecificData.find(obj => obj.userId == 45)
  //   const theme = useTheme();
  const classes = useStyles(props);
  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div><img style={{ borderRadius: '50%' }} height={150} width={150} src={refObj && refObj.userPicUrl} />  </div>
        </Grid>
        <Grid item xs={8}>
          <Box >
            <Typography>{"View Application"}</Typography>
          </Box>
          <Box >
            <Typography>{"FirstName LastNAme"}</Typography>
            <Typography>{"Address"}</Typography>
            <Typography>{"Mob No"}</Typography>
            <Typography>{"Validated Adhar Number"}</Typography>
            <Typography>{"Validated Pan Number"}</Typography>
          </Box>
        </Grid>
        <Grid>
          <Typography>{"Please Note down these numbers "}</Typography>
          <Typography>{"Address"}</Typography>
          <Typography>{"Mob No"}</Typography>
          <Button >Submit Application</Button>
          <Button >Cancel</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
