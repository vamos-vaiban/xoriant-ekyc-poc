import React, { useEffect } from 'react';
import { Grid, Typography, Button, Box, TextField, Paper } from '@material-ui/core';
import { useFormik } from "formik"
import { useStyles } from "./styles"
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_STATUS,SAVE_USER_DETAILS } from '../../redux/constants';
import { useNavigate } from 'react-router';
import Dropdown from "../../components/Dropdown"
import { DoSaveAddressDetailsAction } from '../../redux/actions/addressDetailsAction';
import {findLast}from "lodash"
import Storage from '../../utils/Storage';

export default function AddressDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigation = useNavigate()
  // const [toggleEmail, setToggleEmail] = React.useState(false)
  const uiData = useSelector(data=>data.ui)
  const data = [
    {
      city: "pune"
    },
    {
      city: "Banglore"
    },
    {
      city: "Mumbai"
    },
    {
      city: "Mysore"
    }
  ]
  useEffect(()=>{
    if(uiData["messages"]){
      let refObj = findLast(uiData["messages"], { key: "Save_address_details" })
      if (refObj && refObj.type === "success") {
        dispatch({
          type: CHANGE_STATUS,
          payload: {
            label: "Aadhaar Validations",
            status: "complete"
          }
        })
  
        //save details to local Storage
        let user = localStorage.getItem('user');
        let userInfo = JSON.parse(user)
        let newUserInfo ={
          ...userInfo,
          "house_no":formik.values.houseNumber,
          "address_line_1":formik.values.addressLine1,
          "address_line_2":formik.values.addressLine2,
          "city":formik.values.city,
          "landmark":formik.values.landmark,     
       }
        
        localStorage.setItem("user", JSON.stringify(newUserInfo))
        Storage.storeUserData(user)
        dispatch({
          type:SAVE_USER_DETAILS,
          payload:newUserInfo
        })
        dispatch({
          type: CHANGE_STATUS,
          payload: {
            label: "Aadhaar Validations",
            status: "complete"
          }
        })
        navigation('/home/aadharValidation')
      }
    }
  },[uiData])
  const validationSchema = yup.object({
    houseNumber: yup
      .string()
      .required("Please Enter House Number/Name"),
    addressLine1: yup
      .string()
      .required("Please Enter Address"),
      addressLine2: yup
      .string(),
    landmark: yup
      .string()
      .required('Please Enter Landmark'),
      city:yup
      .string()
      .required('Please select city or state')
  })
  const formik = useFormik({
    initialValues: {
      houseNumber: "",
      addressLine1: "",
      addressLine2:"",
      landmark: "",
      city:""
    },
    validationSchema: validationSchema,
    onSubmit: (event) => {
      console.log("Form SSubmited")
      let userData = {
        "house_no":formik.values.houseNumber,
        "address_line_1":formik.values.addressLine1,
        "address_line_2":formik.values.addressLine2,
        "city":formik.values.city,
        "landmark":formik.values.landmark,     
     }
     dispatch(DoSaveAddressDetailsAction({userData , key:"Save_address_details"}))
   
    },
  });
  return (
    <Grid container alignItems={"center"} justifyContent={"center"} style={{ overflow: "none" }}>
      <Grid item xs={12} sm={6} 
        className={classes.grid}>
        <Paper elevation={3} className={classes.paper}>
          <form onSubmit={formik.handleSubmit}>
            <Typography variant={"h4"} className={classes.title}> Where Do you live!</Typography>
            <Typography variant={"h6"} style={{ marginBottom: "7%" }}> Please submit the details below to get started with E-KYC</Typography>
            <Box>
              <TextField
                style={{ marginBottom: "5%" }}
                fullWidth
                variant={"outlined"}
                id={"houseNumber"}
                name={"houseNumber"}
                label={"House Number/Name "}
                value={formik.values.houseNumber}
                onChange={formik.handleChange}
                error={formik.touched.houseNumber && Boolean(formik.errors.houseNumber)}
                helperText={formik.touched.houseNumber && formik.errors.houseNumber}
              />
              <TextField
                style={{ marginBottom: "5%" }}
                fullWidth
                variant={"outlined"}
                id={"addressLine1"}
                name={"addressLine1"}
                label={"Address Line 1"}
                value={formik.values.addressLine1}
                onChange={formik.handleChange}
                error={formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)}
                helperText={formik.touched.addressLine1 && formik.errors.addressLine1}
              />
              <TextField
                style={{ marginBottom: "5%" }}
                fullWidth
                variant={"outlined"}
                id={"addressLine2"}
                name={"addressLine2"}
                label={"Address Line 2"}
                value={formik.values.addressLine2}
                onChange={formik.handleChange}
                error={formik.touched.addressLine2 && Boolean(formik.errors.addressLine2)}
                helperText={formik.touched.addressLine2 && formik.errors.addressLine2}
              />
              <Dropdown
                label="Select City/State"
                data={data || []}
                objKey={"city"}
                onChangeListner={(selectedData) => {
                  console.log(selectedData)
                  formik.setFieldValue("city",selectedData)
                }}
                prevData={[]}
                name={"city"}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city} />
              <TextField
                style={{ marginBottom: "5%" }}
                fullWidth
                variant={"outlined"}
                id={"landmark"}
                name={"landmark"}
                label={"Landmark"}
                value={formik.values.landmark}
                onChange={formik.handleChange}
                error={formik.touched.landmark && Boolean(formik.errors.landmark)}
                helperText={formik.touched.landmark && formik.errors.landmark}
              />
            </Box>
            {/* <FormControlLabel
              control={<Checkbox />}
              label={<Typography variant="subtitle1" >I hereby consent for the use of my adhar number --- provided in application, to carryout Identity Validation</Typography>}
            /> */}

            {/* <Typography display="inline" style={{ marginBottom: "3%", marginTop: "5%" }}>
              <Checkbox /><Typography variant={"h6"}>I hereby consent for the use of my adhar number --- provided in application, to carryout Identity Validation</Typography></Typography> */}
            <Box style={{ marginLeft: "40%", marginRight: "40%", marginTop: "5%" }}>
              <Button color="secondary"
                variant="contained"
                className={classes.nextButton}
                type="submit">Next</Button>
                </Box>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}
        className={classes.contentGrid}
      >
      </Grid>
    </Grid>
  );
}


