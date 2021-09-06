import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, Box, TextField, Paper, Checkbox } from '@material-ui/core';
import { useFormik } from "formik"
import { useStyles } from "./styles"
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { CHANGE_STATUS,SHOW_MESSAGE } from '../../redux/constants';
import { useNavigate } from 'react-router';
import Dropdown from "../../components/Dropdown"

export default function AddressDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigation = useNavigate()
  const [toggleEmail, setToggleEmail] = React.useState(false)
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
      dispatch({
        type: CHANGE_STATUS,
        payload: {
          label: "Aadhaar Validations",
          status: "complete"
        }
      })
      dispatch({
        type:SHOW_MESSAGE,
        payload:{
          type:"success",
          message:"Step 2: Address details completed"
        }
      })
      navigation('/home/aadharValidation')
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
            <Box style={{ marginLeft: "40%", marginRight: "40%", marginTop: "7%" }}>
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


