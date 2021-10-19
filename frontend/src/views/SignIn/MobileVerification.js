import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useFormik } from "formik";
import * as yup from 'yup';
import { useStyles } from './styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {SET_LOGIN_AS_BANK_PERSONNEL,LOGGED_IN_AS_BANK_PERSONNEL} from '../../redux/constants/index'

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
    const [loginBankPersonnel ,setLoginBankPersonnel] = useState(false)
    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            format="##########"
        />
    );
}

function MobileVerification(props) {
    const classes = useStyles(props);
    const dispatch = useDispatch();
    const navigation = useNavigate()
    const isBankPersonnel = useSelector(state=>state.auth.loginAsBankPersonnel)
    const validationSchema = yup.object({
        mobile: yup.string()
            .min(10)
            .required()
    });
    const formik = useFormik({
        initialValues: {
            mobile: ''
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            props.validateMobileNumber(formik.values.mobile);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box>
                <Box className={classes.addMargin}>
                    {/* --------------added for commenting login with email functionality------------- */}
                    {/* <Typography variant={"h5"} className={classes.alignLabel} >
                        <IconButton size="small" onClick={props.cancelMobileVerification}>
                            <KeyboardBackspaceIcon />
                        </IconButton>
                        Verify Mobile Number
                    </Typography>
                    <Typography>Please enter mobile number registered with bank account</Typography> */}
                    <div style={{marginBottom:"1%"}}>
                            <Button variant={"outlined"} style={{float:"right",marginLeft:"1%",textTransform:"none"}} onClick={()=>{
                                debugger
                                dispatch({
                                    type:SET_LOGIN_AS_BANK_PERSONNEL,
                                    payload: !isBankPersonnel
                                })
                            }}>{isBankPersonnel ===true ? "Login as user" : "Login as Bank Personnel"}</Button>
                            </div>
                    <Box className={classes.addMargin}>
                        <div style={{marginBottom:"1%"}}> 
                            <Typography variant={"h5"} className={classes.alignLabel} >{"Let's get Started"}</Typography>
                            
                        </div>
                        <Typography style={{marginTop:'2%'}}>{"Please login with your mobile number to complete your E-KYC"}</Typography>
                    </Box>
                </Box>
                <Box >
                   {isBankPersonnel === true ?<Box> 
                    <TextField
                        fullWidth
                        value={"admin@bank.com"}
                        onChange={()=>{}}
                      placeholder="Enter your Login Id"
                    />
                     <TextField
                        fullWidth
                        value={"admin@bank.com"}
                        type={"password"}
                        onChange={()=>{}}
                      placeholder="Enter your password"
                    />
                    <Button
                        color="secondary"
                        variant="contained"
                        className={classes.generateOTPButton}
                        onClick={()=>{
                            dispatch({
                                type:LOGGED_IN_AS_BANK_PERSONNEL,
                                payload:true
                            })
                            navigation('/kycRequests')
                        }}
                    >
                       Login
                    </Button>
                   </Box> :
                   <Box>
                    <TextField
                        fullWidth
                        name="mobile"
                        id="mobile"
                        // label="mobile"
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                        helperText={formik.touched.mobile && formik.errors.mobile}
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                            startAdornment: <InputAdornment position="start"><strong>+91 -</strong></InputAdornment>,
                        }}
                        placeholder="Enter your mobile no"
                    />
                    <Button
                        color="secondary"
                        variant="contained"
                        type="submit"
                        className={classes.generateOTPButton}
                        disabled={!formik.values.mobile || Boolean(formik.errors.mobile)}
                    >
                        Generate OTP
                    </Button></Box>}
                </Box>
            </Box>
        </form>
    )
}

export default MobileVerification
