import React, { useEffect } from 'react';
import { Grid, Paper, Button, Box, TextField, Typography,  useTheme } from '@material-ui/core';
import { useFormik } from "formik"
import * as yup from 'yup';
import {  useNavigate } from 'react-router';
import Content from "./content"
import { useStyles } from "./styles"
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import MobileVerification from './MobileVerification';
import { DoUserSignInAction } from '../../redux/actions/AuthActions';
import {findLast} from "lodash"
export default function Signup(props) {
  const classes = useStyles(props);
  const [generateOTP, setGenerateOTP] = React.useState(false)
  const [emailVerification, setEmailVerification] = React.useState(true);
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [otp, setOTP] = React.useState('555555')
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const theme = useTheme()
  const ui = useSelector((data)=>data.ui)
  useEffect(()=>{
    if(ui["messages"]){
      let refObj = findLast(ui["messages"],{key:"user_sign_in"});
     //change error to success once server is attached
      if(refObj && refObj.type === "success"){
        navigation("/home")
      }
    }
  },[ui,dispatch,navigation])
  
  //   const otpValidationSchema = yup.object({
  // otp: yup
  //       .number()
  //       .min(6, 'OTP should be of minimum 6 numbers length')
  //       .required('OTP is required'),
  //   })
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),

  })
  
  const otpFormik = useFormik({
    initialValues: {
      otp: "",
    },
    //  validationSchema:otpValidationSchema,
    onSubmit: (value) => {
      let values = {
        "mode_Of_Authentication":emailVerification ? "via-email":"via-mobile",
        "email_id":formik.values.email,
        "email_id_otp":emailVerification ? otp :"",
        "mobile_number": emailVerification ? "" : mobileNumber,
        "mobile_number_otp":emailVerification ? "" :otp
      }
      // dispatch({
      //   type: IS_USER,
      //   payload: true
      // })
      dispatch(DoUserSignInAction({userData:values,key:"user_sign_in"}))
      // alert(JSON.stringify(values, null, 2));
      // navigation("/home")
    }
  })
  const formik = useFormik({
    initialValues: {
      email: '',
      // otp: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setGenerateOTP(true)
    },
  });

  // const submitMobileNumber = () => {
  //   setGenerateOTP(true);
  // }
  // console.log("generatOTP ", generateOTP)

  return (
    <Grid container alignItems="center" justifyContent={"center"}>
      <Grid item xs={12} sm={6}
        className={classes.gridOne}
      >
        <Content />
      </Grid>
      <Grid item xs={12} sm={6} className={classes.gridSecond}>
        <Paper elevation={3} className={classes.paper}>
          {generateOTP ? (
            <Box>
              <form onSubmit={otpFormik.handleSubmit}>
                <Box className={classes.addMarginTwo}>
                  <Typography className={classes.alignLabel} variant={"h5"} >{"Verify email"}</Typography>
                  <Typography>{"We have sent you an OTP on email"}
                    <Typography variant="h6" style={{ marginTop: "4%" }} gutterBottom>{formik.values.email}</Typography>
                  </Typography>

                </Box>
                <Box>
                  <Typography>{"Please enter OTP"}</Typography>

                  <OtpInput
                    className={classes.otp}
                    value={otp}
                    onChange={(event) => {
                      setOTP(event)
                    }}
                    numInputs={6}
                    isInputNum={true}
                    // separator={<span>-</span>}
                    inputStyle={{ width: "70%", border: 0, borderBottom: "1px solid black", height: "150%" }}
                    focusStyle={{ outline: "none" }}
                  // hasErrored={otpFormik.touched.otp && Boolean(otpFormik.errors.otp)}
                  />
                  <Typography className={classes.resendOtp}> {"Haven't received OTP?"}
                    <Button color={"secondary"} style={{ textTransform: "none", fontSize: "1.1em", color: theme.palette.primary.contrastText, fontWeight: 'bold' }}>{"Resend OTP"}</Button></Typography>
                  <Button color={"secondary"}
                    type={"submit"}
                    className={classes.submitButton}
                    variant={"contained"}>{"Submit"}</Button>

                </Box>
              </form>
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
                  setGenerateOTP(true) 
                  setMobileNumber(mobNo)
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
