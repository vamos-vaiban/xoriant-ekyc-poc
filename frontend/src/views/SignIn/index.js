import React, { useEffect } from 'react';
import { Grid, Paper, Button, Box, TextField, Typography, useTheme } from '@material-ui/core';
import { useFormik } from "formik"
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import Content from "./content"
import { useStyles } from "./styles"
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import MobileVerification from './MobileVerification';
import { DoUserSignInAction, DoGenerateOTPAction } from '../../redux/actions/AuthActions';
import { findLast } from "lodash"
import Storage from '../../utils/Storage';
import { IS_USER, SAVE_USER_DETAILS } from '../../redux/constants/index'
import SignInWithGoogle from './SignInWithGoogle';
// import MobileVerification from './MobileVerification';
export default function Signup(props) {
  const classes = useStyles(props);
  const [generateOTP, setGenerateOTP] = React.useState(false)
  const [emailVerification, setEmailVerification] = React.useState(false);
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [otp, setOTP] = React.useState('')
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const theme = useTheme()
  const ui = useSelector((data) => data.ui)
  useEffect(() => {
    if (ui["messages"]) {
      let refObj = findLast(ui["messages"], { key: "user_sign_in" });
      //change error to success once server is attached
      if (refObj && refObj.type === "success") {  
        //things to save after login
        //  Storing Data into Local Storage 
        // let userList = localStorage.getItem("userList")
        // userList = JSON.parse(userList)
        // let userSpecificData = Storage.getUserData()
        // let user = {
        //   ...userSpecificData,
        //   reqId: userList ? userList.length + 1 : 1,
        //   accountNumber: userList ? userList.length + 1001000001 : 1001000001,
        //   crnNumber: "123456789A",
        //   mobileNumber: mobileNumber,
        // }
        // localStorage.setItem("user", JSON.stringify(user))
        // Storage.storeUserData(user)
        // dispatch({
        //   type: SAVE_USER_DETAILS,
        //   payload: user
        // })
        dispatch({
          type: IS_USER,
          payload: true
        })

    return (
        <Grid container alignItems="center" justifyContent={"center"}>
            <Grid item xs={12} sm={6}
                className={classes.gridOne}
            >
                <Content />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.gridSecond}>
                <Paper elevation={3} className={classes.paper}>
                <Box className={classes.addMargin}>
                <Typography variant={"h5"} className={classes.alignLabel} >{"Let's get Started"}</Typography>
                <Typography>{"Please login with gmail or continue with your mobile number to complete your E-KYC"}</Typography>
            </Box>
          ) : (
            emailVerification ? (
              <form onSubmit={formik.handleSubmit}>
                <Box>
                  <Box className={classes.addMargin}>
                    <Typography variant={"h5"} className={classes.alignLabel} >{"Let's get Started"}</Typography>
                    <Typography>{"Please login with email or continue with Google to complete your E-KYC"}</Typography>
                  </Box>
                  <Box >
                    <TextField
                      fullWidth
                      name="email"
                      id="email"
                      label="Email"
                      disabled={true}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email} />

                    {formik.values.email !== '' ?

                      <Button color="secondary"
                        variant="contained"
                        type="submit"
                        className={classes.generateOTPButton}>{"Generate OTP"}</Button>
                      :
                      <>
                        <Typography className={classes.OrLabel}>Or</Typography>
                        <Button color={"secondary"}
                          className={classes.signInWithGoogleButton}
                          onClick={() => setEmailVerification(false)}
                          // startIcon={<SvgIcon><GoogleIcon /></SvgIcon>}
                          variant={"contained"}>Try with mobile number</Button>
                      </>}
                  </Box>
                </Box>
              </form>
            ) : (
              <MobileVerification
                validateMobileNumber={(mobNo) => {
                  // setGenerateOTP(true)
                  setMobileNumber(mobNo)
                  //------------added for commenting login with email functionality----------
                  debugger
                  let values = {
                    "mode_Of_Authentication": emailVerification ? "via-email" : "via-mobile",
                    "email_id": formik.values.email ? formik.values.email : "",
                    "mobile_number": emailVerification ? "" : mobNo,
                  }
                  dispatch(DoGenerateOTPAction({ userData: values, otpSentOn: emailVerification ? "email" : "mobile", key: "generate_otp" }))
                }}
                cancelMobileVerification={() => setEmailVerification(true)}
              />
            )
          )
          }
        </Paper>
      </Grid>
    </Grid>
  );
}
