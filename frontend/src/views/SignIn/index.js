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
    const [loginWithMobile,setLoginWithMobile] = React.useState(false)

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
                   <SignInWithGoogle />
                   <Typography className={classes.OrLabel}>Or</Typography>
                   <Button color={"secondary"}
                    className={classes.signInWithGoogleButton}
                    // onClick={() => setEmailVerification(false)}
                    // startIcon={<GoogleIcon />}
                    variant={"contained"}>Try with Mobile Number</Button>
                   {/* <MobileVerification 
                   validateMobileNumber={()=>{}}
                   cancelMobileVerification={()=>{}}
                   /> */}
                </Paper>
            </Grid>
        </Grid>
    );
}
