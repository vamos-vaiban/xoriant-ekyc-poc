import React,{useEffect} from 'react';
import { Grid, Typography, Avatar, Button, Box, TextField, Paper, Checkbox, IconButton, Card, CardContent, CardMedia } from '@material-ui/core';
import { useStyles } from "./styles"
import { find } from "lodash"
import Storage from "../../utils/Storage"
import { useSelector, useDispatch } from 'react-redux';
import { SHOW_MESSAGE, USER_LIST } from '../../redux/constants/index'
import { useNavigate } from 'react-router';
import { DoGetDetailsForReviewApiAction } from '../../redux/actions/reviewDetailsAction';
export default function Review(props) {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const [submitted, setSubmitted] = React.useState(false)
  const userSpecificData = useSelector(state => state.details.review)
  const userSpecificDataString = localStorage.getItem('user');
  const classes = useStyles(props);
  useEffect(()=>{
dispatch(DoGetDetailsForReviewApiAction())
  },[])
  return (
    <Grid className={classes.grid}>
      <Paper elevation={3} className={classes.paper}>
        <Grid container spacing={2}>
          {submitted ? <>
            <Typography>{"Thank You For Submitting Application, Bank People will contact you soon"}</Typography><Button variant={'contained'} style={{ marginRight: "5%",marginTop:"5%" }} onClick={()=>{ setSubmitted(!submitted)
            navigation('/')}}>{"Back To Home"}</Button></>
            : <><Grid item xs={3}>
              <div><img style={{ borderRadius: '50%' }} height={150} width={150} src={userSpecificData && userSpecificData.photopath} />  </div>
            </Grid>
              <Grid item xs={8} style={{ marginLeft: "5%" }}>
                <Box >
                  <Typography variant={"h4"}>{"Review Application"}</Typography>
                </Box>
                <Box >
                <Typography>{"Name : "}{userSpecificData && userSpecificData.fullName}</Typography>
                <Typography>{"Date of Birth : "}{userSpecificData && userSpecificData.dateOfBirth}</Typography>
                  <Typography>{"Address : "}{userSpecificData && userSpecificData.house_no} {userSpecificData && userSpecificData.address_line_1} {userSpecificData && userSpecificData.address_line_2} {userSpecificData && userSpecificData.landmark}, {userSpecificData && userSpecificData.city}</Typography>
                  <Typography>{"Mob No : "}{userSpecificData && userSpecificData.mobile_number}</Typography>
                  <Typography>{"Validated Adhar Number : "}{userSpecificData && userSpecificData.aadhar_number}</Typography>
                  <Typography>{"Validated Pan Number : "}{userSpecificData && userSpecificData.pan_number}</Typography>
                  <Typography>{"Uploaded Video : "}<a href={userSpecificData && userSpecificData.s3url} target="_blank">{userSpecificData && userSpecificData.s3url}</a></Typography>
                  <Typography>{"Uploaded Document : "}<a href={userSpecificData && userSpecificData.aadhaarpath} target="_blank">{userSpecificData && userSpecificData.aadhaarpath}</a></Typography>
                  {/* <Typography>{"Similarity Percentage : "}{userSpecificData && userSpecificData.similarity}</Typography>             */}
                  <Typography variant={"h5"} style={{ marginTop: "2%" }}>{"Please note down these numbers "}</Typography>
                  <Typography>{"Account Number : "}{userSpecificData && userSpecificData.accountNumber}</Typography>
                  <Typography>{"CRN number : "}{userSpecificData && userSpecificData.crn}</Typography>
                  <Typography>{"Request Id : "}{userSpecificData && userSpecificData.request_id}</Typography>
            
                </Box>
              </Grid>
          <Grid xs={12} style={{ padding: "7%", marginLeft: "10%", marginRight: "10%" }}>

            <Button variant={'contained'} style={{ marginRight: "5%" }} onClick={() => {
             
                // let userList = localStorage.getItem('userList');
                // let userArray;
                // if (userList) {
                //   userArray = JSON.parse(userList)
                // } else {
                //   userArray = []
                // }

                // userArray.push(userSpecificData)
                // localStorage.setItem("userList", JSON.stringify(userArray))
                // dispatch({
                //   type: USER_LIST,
                //   payload: JSON.stringify(userArray)
                // })
                // Storage.storeUserData(userArray)
                dispatch({
                  type: SHOW_MESSAGE,
                  payload: {
                    type: "success",
                    message: "Thanks for submitting the application. We will get back to you",

                  }
                })
                setSubmitted(!submitted)
              


            }} >Submit Application</Button>
            {/* <Button variant={'contained'}>Cancel</Button> */}
          </Grid></>}
        </Grid>
      </Paper>
    </Grid>
  );
}
