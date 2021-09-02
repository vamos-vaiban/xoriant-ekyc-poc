import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, Box, TextField, Paper, Checkbox } from '@material-ui/core';
import { useFormik } from "formik"
import { useStyles } from "./styles"
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { CHANGE_STATUS } from '../../redux/constants';
import { useNavigate } from 'react-router';
import Dropdown from "../../components/Dropdown"

export default function AddressDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigation = useNavigate()
  const [toggleEmail, setToggleEmail] = React.useState(false)
  const data = [
    {
      city:"pune"
    },
    {
      city:"Banglore"
    },
    {
      city:"Mumbai"
    },
    {
      city:"Mysore"
    }
  ]
  const validationSchema = yup.object({
    pan: yup
      .string()
      .matches('[A-Z]{5}[0-9]{4}[A-Z]{1}', "Please Enter a Valid Pan Number consist of first 5 are alphabets,followed with 4 numbers and a 1 alphabet.")
      .required("Please Enter Pan Number"),
    adhar: yup
      .string()
      .required("Please Enter Adhar Number"),
    // .matches("[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}", "ENter Valid Adhar Card Number"),
    contactNumber: yup
      .string()
      .matches('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$', "Enter Valid Contact Number")
      .required('Please Enter Mobile Number')
  })
  const formik = useFormik({
    initialValues: {
      pan: "",
      adhar: "",
      contactNumber: ""
    },
    // validationSchema: validationSchema,
    onSubmit: (event) => {
      debugger
      // alert(JSON.stringify("Values : "+formik.values.pan, null, 2));
      // event.preventDefault();
      console.log("Form SSubmited")
      dispatch({
        type: CHANGE_STATUS,
        payload: {
          label: "Address Details",
          status: "complete"
        }
      })
      navigation('\addressDetails');

    },
  });
  return (
    <Grid container alignItems={"center"} style={{ overflow: "none" }}>
      <Grid item xs={12} sm={6} justifyContent={"center"}
        alignItems={"center"} className={classes.grid}>
        <Paper elevation={3} className={classes.paper}>
          <form onSubmit={formik.handleSubmit}>
            <Typography variant={"h4"} className={classes.title}> Where Do you live!</Typography>
            <Typography variant={"h6"} style={{ marginBottom: "7%" }}> Please submit the details below to get started with E-KYC</Typography>
            <Box>
              <TextField
                style={{ marginBottom: "5%" }}
                fullWidth
                variant={"outlined"}
                id={"pan"}
                name={"pan"}
                label={"House Number/Name "}
                value={formik.values.pan}
                onChange={formik.handleChange}
                error={formik.touched.pan && Boolean(formik.errors.pan)}
                helperText={formik.touched.pan && formik.errors.pan}
              />
              <TextField
                style={{ marginBottom: "5%" }}
                fullWidth
                variant={"outlined"}
                id={"pan"}
                name={"pan"}
                label={"Address Line 1"}
                value={formik.values.pan}
                onChange={formik.handleChange}
                error={formik.touched.pan && Boolean(formik.errors.pan)}
                helperText={formik.touched.pan && formik.errors.pan}
              />
              <TextField
                style={{ marginBottom: "5%" }}
                fullWidth
                variant={"outlined"}
                id={"pan"}
                name={"pan"}
                label={"Address Line 2"}
                value={formik.values.pan}
                onChange={formik.handleChange}
                error={formik.touched.pan && Boolean(formik.errors.pan)}
                helperText={formik.touched.pan && formik.errors.pan}
              />
              <Dropdown
              label="Select City/State"
              data={data || []}
              objKey={"city"}
              onChangeListner={(selectedData)=>{
                console.log(selectedData)
              }}
              prevData={[]}
              name={"city"}
              error={false}
              helperText={""} />
              <TextField
                style={{ marginBottom: "5%" }}
                fullWidth
                variant={"outlined"}
                id={"pan"}
                name={"pan"}
                required
                label={"Landmark"}
                value={formik.values.pan}
                onChange={formik.handleChange}
                error={formik.touched.pan && Boolean(formik.errors.pan)}
                helperText={formik.touched.pan && formik.errors.pan}
              />
            </Box>
            <Typography display="inline" style={{ marginBottom: "3%", marginTop: "5%" }}>
              <Checkbox /><Typography variant={"h8"}>I hereby consent for the use of my adhar number --- provided in application, to carryout Identity Validation</Typography></Typography>
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
      </Grid>
    </Grid>
  );
}


