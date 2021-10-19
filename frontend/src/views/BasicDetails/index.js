import React, { useEffect } from 'react';
import { Grid, Typography, Button, Box, TextField, Paper, Checkbox } from '@material-ui/core';
import { useFormik } from "formik"
import { useStyles } from "./styles"
import * as yup from 'yup';
import Content from "./content"
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_STATUS, SHOW_MESSAGE,SAVE_USER_DETAILS } from '../../redux/constants';
import { useNavigate } from 'react-router';
import { DoValidatePanNumberAction, DoValidateAadharNumberAction, DoValidateMobileNumberAction, DoSaveBasicDetailsAction } from '../../redux/actions/basicDetailsAction';
import { findLast } from "lodash"
import Storage from '../../utils/Storage';

export default function BasicDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigation = useNavigate()
  const uiData = useSelector((data) => data.ui)
  useEffect(() => {
    //check the response for the pan Number if success, dispatch action for adhar 
    if (uiData["messages"]) {
      let refObj = findLast(uiData["messages"], { key: "validate_pan" });
      //change error to success once server is attached
      if (refObj && refObj.type === "error") {
        let adharNumber =formik.values.adhar
        let number = adharNumber.split( " ") 
        let final = number.join()
       final =  final.replace(/,/g,"")
        let userData = {
          aadhar_number: final
        }
        dispatch(DoValidateAadharNumberAction({ userData, key: "validate_adhar" }))
        // dispatch({
        //   type: SHOW_MESSAGE,
        //   payload: {
        //     type: "success",
        //     message: "PAN number is valid",
        //   }
        // })
      }
      let adharRefObj = findLast(uiData["messages"], { key: "validate_adhar" })
      if (adharRefObj && adharRefObj.type === "error") {
        let userData = {
          mobile_number: formik.values.contactNumber
        }
        dispatch(DoValidateMobileNumberAction({ userData, key: "validate_mobile" }))
        // dispatch({
        //   type: SHOW_MESSAGE,
        //   payload: {
        //     type: "success",
        //     message: "Aadhar number is valid",
        //   }
        // })
      }
      let mobileRefObj = findLast(uiData["messages"], { key: "validate_mobile" })
      if (mobileRefObj && mobileRefObj.type === "success") {
        // dispatch({
        //   type: SHOW_MESSAGE,
        //   payload: {
        //     type: "success",
        //     message: "Mobile number is valid",
        //   }
        // })
        let userData = {
          pan_number: formik.values.pan,
          aadhar_number: formik.values.adhar,
          mobile_number: formik.values.contactNumber,
          aadhar_Linked_Mobile_no: formik.values.contactNumber
        }
        dispatch(DoSaveBasicDetailsAction({ userData, key: "save_basic_details" }))
        let user = localStorage.getItem('user');
  debugger
  //save details in Local Storage
  let userInfo = JSON.parse(user)
  let newUserInfo = {
    ...userInfo,
    adharNumber : formik.values.adhar,
    registeredMobile : formik.values.contactNumber,
    panNumber : formik.values.pan
  }
  dispatch({
    type:SAVE_USER_DETAILS,
    payload:newUserInfo
  })
  localStorage.setItem("user", JSON.stringify(newUserInfo))
  Storage.storeUserData(user)
      }
      let saveRefObj = findLast(uiData["messages"], { key: "save_basic_details" })
      if (saveRefObj && saveRefObj.type === "error") {
        dispatch({
          type: CHANGE_STATUS,
          payload: {
            label: "Address Details",
            status: "complete"
          }
        })
        dispatch({
          type: SHOW_MESSAGE,
          payload: {
            type: "error",
            message: "Step 1: Basic details completed"
          }
        })
        navigation('/home/addressDetails');
      }
    }
  }, [uiData,navigation,dispatch])
  const validationSchema = yup.object({
    pan: yup
      .string()
      .matches('[A-Z]{5}[0-9]{4}[A-Z]{1}', "Please Enter a Valid Pan Number consist of first 5 are alphabets,followed with 4 numbers and a 1 alphabet.")
      .required("Please Enter Pan Number"),
    adhar: yup
      .string()
      .required("Please Enter Adhar Number"),
    // .matches("[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}", "ENter Valid Adhar Card Number"),
    acceptTerms: yup.bool()
      .required("Please Accept the terms first")
      .oneOf([true], 'Accept Terms & Conditions is required')
  })
  const formik = useFormik({
    initialValues: {
      pan: "",
      adhar: "",
      contactNumber: ""
    },
    validationSchema: validationSchema,
    onSubmit: (event) => {
      
      let userData = {
        pan_number: formik.values.pan
      }
      dispatch(DoValidatePanNumberAction({ userData, key: "validate_pan" }))
    },
  });
  return (
    <Grid container alignItems={"center"} justifyContent={"center"} style={{ overflow: "none" }}>
      <Grid item xs={12} sm={6} className={classes.grid}>
        <Paper elevation={3} className={classes.paper}>
          <form onSubmit={formik.handleSubmit}>
            <Typography variant={"h4"} className={classes.title}> First thing first !</Typography>
            <Typography variant={"h6"} style={{ marginBottom: "7%" }}> Please submit the details below to get started with E-KYC</Typography>
            <Box>
              <TextField
                style={{ marginBottom: "5%" }}
                fullWidth
                variant={"outlined"}
                id={"pan"}
                name={"pan"}
                label={"Enter your Pan number "}
                value={formik.values.pan}
                onChange={formik.handleChange}
                error={formik.touched.pan && Boolean(formik.errors.pan)}
                helperText={formik.touched.pan && formik.errors.pan}
              />
              <TextField
                style={{ marginBottom: "5%" }}
                fullWidth
                variant={"outlined"}
                id={"adhar"}
                name={"adhar"}
                value={formik.values.adhar}
                onChange={(e) => {

                  const inputVal = e.target.value.replace(/ /g, "");
                  let inputNumbersOnly = inputVal.replace(/\D/g, "");

                  if (inputNumbersOnly.length > 12) {
                    inputNumbersOnly = inputNumbersOnly.substr(0, 12);
                  }

                  const splits = inputNumbersOnly.match(/.{1,4}/g);

                  let spacedNumber = "";
                  if (splits) {
                    spacedNumber = splits.join(" ");
                  }

                  formik.setFieldValue("adhar", spacedNumber);
                }}
                error={formik.touched.adhar && Boolean(formik.errors.adhar)}
                helperText={formik.touched.adhar && formik.errors.adhar}
                label={"Enter your Adhar number"}
              />
              <TextField variant={"outlined"}
                style={{ marginBottom: "5%" }}
                id={"contactNumber"}
                fullWidth
                name={"contactNumber"}
                value={formik.values.contactNumber}
                onChange={formik.handleChange}
                error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
                helperText={formik.touched.contactNumber && formik.errors.contactNumber}
                label={"Enter Mobile number"}
              />
            </Box>
            <Typography display="inline" style={{ marginBottom: "3%", marginTop: "5%" }}>
              <Checkbox
                name={"acceptTerms"}
                value={formik.values.acceptTerms}
                onChange={formik.handleChange}
                required /><Typography variant={"h8"}>I understand and accept the
                 <Button color={"secondary"} style={{ textTransform: "none", fontSize: "0.9em", fontWeight: 'bold' }}>{"Terms and conditions"}</Button></Typography></Typography>
            <Box style={{ marginLeft: "40%", marginRight: "40%", marginTop: "5%" }}>
              <Button color="secondary"
                variant="contained"
                className={classes.nextButton}
                type="submit">Next</Button></Box>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}
        className={classes.contentGrid}
      >
        <Content />
      </Grid>
    </Grid>
  );
}


