import React from 'react';
import { Grid, Paper, Button, Box, TextField, Typography, SvgIcon, useTheme } from '@material-ui/core';
import { useFormik } from "formik"
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import Content from "./content"
import { useStyles } from "./styles"
import OtpInput from 'react-otp-input';
import {ReactComponent as GoogleIcon} from "../../assets/icons8-google.svg"
import { useDispatch } from 'react-redux';
import { IS_USER, SHOW_MESSAGE } from '../../redux/constants';

export default function Signup(props) {
  const classes = useStyles(props);
  const [generateOTP, setGenerateOTP] = React.useState(false)
  const [otp, setOTP] = React.useState()
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const theme = useTheme()
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
    initialValues:{
      otp:"", 
    },
//  validationSchema:otpValidationSchema,
 onSubmit:(values)=>{
   console.log("I Am here")
   dispatch({
     type:SHOW_MESSAGE,
     payload:{
       type:"success",
       message:"Login Success"
     }
   })
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


  return (
    <Grid container alignItems="center" justifyContent={"center"}>
      <Grid item xs={12} sm={6} 
        className={classes.gridOne}
        >
        <Content />
      </Grid>
      <Grid item xs={12} sm={6} className={classes.gridSecond}>
        <Paper elevation={3} className={classes.paper}>
          {generateOTP === false ?
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
                       startIcon={<SvgIcon><GoogleIcon /></SvgIcon>}
                       variant={"contained"}>{"Sign in With Google"}</Button>
                    </>}
                </Box>
              </Box>
            </form>
            :
            
            <Box>
              <form onSubmit={otpFormik.handleSubmit}>
              <Box className={classes.addMarginTwo}>
                <Typography className={classes.alignLabel} variant={"h5"} >{"Verify email"}</Typography>
                <Typography>{"We have sent you an OTP on email"}
                <Typography variant="h6"style={{marginTop:"4%"}} gutterBottom>{formik.values.email}</Typography>
                </Typography>
               
              </Box>
              <Box>
                <Typography>{"Please enter OTP"}</Typography>
                
                <OtpInput
                className={classes.otp}
                  value={otp}
                  onChange={(event)=>{
                    setOTP(event)}}
                  numInputs={6}
                  isInputNum={true}
                  // separator={<span>-</span>}
                  inputStyle={{width:"70%",border:0,borderBottom: "1px solid black",height:"150%"}}
                  focusStyle={{outline:"none"}}
                  // hasErrored={otpFormik.touched.otp && Boolean(otpFormik.errors.otp)}
                />
                <Typography className={classes.resendOtp}> {"Haven't received OTP?"}
                <Button color={"secondary"} style={{textTransform:"none",fontSize:"1.1em",color:theme.palette.primary.contrastText,fontWeight:'bold'}}>{"Resend OTP"}</Button></Typography>
                <Button color={"secondary"}
                 type={"submit"}
                  className={classes.submitButton}
                  onClick={(event)=>{
                    let values ={
                      email:formik.values.email,
                      otp:otp
                    }
                    dispatch({
                      type:IS_USER,
                      payload:true
                    })
                    alert(JSON.stringify(values, null, 2));
                    navigation("/home")
                  }}
                  variant={"contained"}>{"Submit"}</Button>

              </Box>
              </form>
            </Box>
           }
        </Paper>
      </Grid>
    </Grid>
  );
}
