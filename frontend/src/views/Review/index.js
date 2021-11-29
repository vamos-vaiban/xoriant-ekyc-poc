import * as React from 'react';
import { Grid, Typography, Avatar, Button, Box, TextField, Paper, Checkbox, IconButton, Card, CardContent, CardMedia } from '@material-ui/core';
import { useStyles } from "./styles"
import { find } from "lodash"
import Storage from "../../utils/Storage"
import { useSelector, useDispatch } from 'react-redux';
import { SHOW_MESSAGE, USER_LIST } from '../../redux/constants/index'
import { useNavigate } from 'react-router';
export default function Review(props) {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const [submitted, setSubmitted] = React.useState(false)
  const userSpecificData = useSelector(state => state.auth.user)
  const userSpecificDataString = localStorage.getItem('user');
  debugger
  // const userSpecificData = JSON.parse(userSpecificDataString)
  //   const theme = useTheme();
  const classes = useStyles(props);
  return (
    <Grid className={classes.grid}>
      <Paper elevation={3} className={classes.paper}>
        <Grid container spacing={2}>
          {submitted ? <>
            <Typography>{"Thank You For Submitting Application, Bank People will contact you soon"}</Typography><Button variant={'contained'} style={{ marginRight: "5%",marginTop:"5%" }} onClick={()=>{ setSubmitted(!submitted)
            navigation('/')}}>{"Go To Home"}</Button></>
            : <><Grid item xs={3}>
              <div><img style={{ borderRadius: '50%' }} height={150} width={150} src={userSpecificData && userSpecificData.userPicUrl} />  </div>
            </Grid>
              <Grid item xs={8} style={{ marginLeft: "5%" }}>
                <Box >
                  <Typography variant={"h4"}>{"Review Application"}</Typography>
                </Box>
                <Box >
                  <Typography>{"Address : "}{userSpecificData && userSpecificData.house_no} {userSpecificData && userSpecificData.address_line_1} {userSpecificData && userSpecificData.address_line_2} {userSpecificData && userSpecificData.landmark}, {userSpecificData && userSpecificData.city}</Typography>
                  <Typography>{"Mob No : "}{userSpecificData && userSpecificData.mobileNumber}</Typography>
                  <Typography>{"Validated Adhar Number : "}{userSpecificData && userSpecificData.adharNumber}</Typography>
                  <Typography>{"Validated Pan Number : "}{userSpecificData && userSpecificData.panNumber}</Typography>
                  {/* <Typography>{"Similarity Percentage : "}{userSpecificData && userSpecificData.similarity}</Typography>             */}
                  <Typography variant={"h5"} style={{ marginTop: "2%" }}>{"Please note down these numbers "}</Typography>
                  <Typography>{"Account Number : "}{userSpecificData && userSpecificData.accountNumber}</Typography>
                  <Typography>{"CRN number : "}{userSpecificData && userSpecificData.crnNumber}</Typography>
                  <Typography>{"Request Id : "}{userSpecificData && userSpecificData.reqId}</Typography>
                </Box>
              </Grid>
          <Grid xs={12} style={{ padding: "7%", marginLeft: "10%", marginRight: "10%" }}>

            <Button variant={'contained'} style={{ marginRight: "5%" }} onClick={() => {
             
                let userList = localStorage.getItem('userList');
                let userArray;
                if (userList) {
                  userArray = JSON.parse(userList)
                } else {
                  userArray = []
                }

                userArray.push(userSpecificData)
                localStorage.setItem("userList", JSON.stringify(userArray))
                dispatch({
                  type: USER_LIST,
                  payload: JSON.stringify(userArray)
                })
                Storage.storeUserData(userArray)
                dispatch({
                  type: SHOW_MESSAGE,
                  payload: {
                    type: "success",
                    message: "Thanks for submitting the application. We will get back to you",

                  }
                })
                setSubmitted(!submitted)
              


            }} >Submit Application</Button>
            <Button variant={'contained'}>Cancel</Button>
          </Grid></>}
        </Grid>
      </Paper>
    </Grid>
  );
}
