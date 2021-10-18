import * as React from 'react';
import { Grid, Typography, Avatar, Button, Box, TextField, Paper, Checkbox, IconButton, Card, CardContent, CardMedia } from '@material-ui/core';
import { useStyles } from "./styles"
import { find } from "lodash"
import Storage from "../../utils/Storage"
export default function Review(props) {
  const userSpecificDataString = localStorage.getItem('user');
  debugger
  const userSpecificData = JSON.parse(userSpecificDataString)
  //   const theme = useTheme();
  const classes = useStyles(props);
  return (
    <Grid className={classes.grid}>
    <Paper elevation={3} className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div><img style={{ borderRadius: '50%' }} height={150} width={150} src={userSpecificData && userSpecificData.userPicUrl} />  </div>
        </Grid>
        <Grid item xs={8} style={{marginLeft:"5%"}}>
          <Box >
            <Typography>{"Review your Application"}</Typography>
          </Box>
          <Box >
            <Typography>{"FirstName LastNAme"}</Typography>
            <Typography>{"Address : "}{userSpecificData && userSpecificData.house_no} {userSpecificData && userSpecificData.address_line_1} {userSpecificData && userSpecificData.address_line_2} {userSpecificData && userSpecificData.landmark}, {userSpecificData && userSpecificData.city}</Typography>
            <Typography>{"Mob No : "}{userSpecificData && userSpecificData.mobileNumber}</Typography>
            <Typography>{"Validated Adhar Number : "}{userSpecificData&&userSpecificData.adharNumber}</Typography>
            <Typography>{"Validated Pan Number : "}{userSpecificData && userSpecificData.panNumber}</Typography>
          </Box>
        </Grid>
        <Grid>
          <Typography>{"Please Note down these numbers "}</Typography>
          <Typography>{"Account Number : "}{userSpecificData && userSpecificData.accountNumber}</Typography>
          <Typography>{"CRN number : "}{userSpecificData && userSpecificData.crnNumber}</Typography>
          <Typography>{"Request Id : "}{userSpecificData && userSpecificData.reqId}</Typography>
          <Button onClick={()=>{
            let userList = localStorage.getItem('userList');
            let userArray;
            if(userList){
              userArray = JSON.parse(userList)
            }else{
              userArray= []
            }
           
            userArray.push(userSpecificData)
             localStorage.setItem("userList", JSON.stringify(userArray))
             Storage.storeUserData(userArray)
 
          }} >Submit Application</Button>
          <Button >Cancel</Button>
        </Grid>
      </Grid>
    </Paper>
    </Grid>
  );
}
