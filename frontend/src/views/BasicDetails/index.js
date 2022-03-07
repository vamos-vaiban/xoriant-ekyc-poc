import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Box, TextField, Paper, Checkbox } from '@material-ui/core';
import { useFormik } from "formik"
import Modal from '@mui/material/Modal';
import { useStyles } from "./styles"
import overrideSettings from '../../theme/overrides';
import * as yup from 'yup';
import Content from "./content"
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_STATUS, SHOW_MESSAGE, SAVE_USER_DETAILS } from '../../redux/constants';
import { useNavigate } from 'react-router';
import { DoValidatePanNumberAction, DoValidateAadharNumberAction, DoValidateMobileNumberAction, DoSaveBasicDetailsAction } from '../../redux/actions/basicDetailsAction';
import { findLast } from "lodash"
import Storage from '../../utils/Storage';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import moment from 'moment'
export default function BasicDetails() {
  const classes = useStyles();
  const overrideClasses = overrideSettings();
  const dispatch = useDispatch();
  const navigation = useNavigate()
  const uiData = useSelector((data) => data.ui)
  const [value, setValue] = useState()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80vw",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height:"70vh",
    overflowY:"scroll"
  };
  useEffect(() => {
    //check the response for the pan Number if success, dispatch action for adhar 
    if (uiData["messages"]) {
      let refObj = findLast(uiData["messages"], { key: "validate_pan" });
      //change error to success once server is attached
      if (refObj && refObj.type === "error") {
        let adharNumber = formik.values.adhar
        let number = adharNumber.split(" ")
        let final = number.join()
        final = final.replace(/,/g, "")
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
        // let userData = {
        //   mobile_number: formik.values.contactNumber
        // }
        /**commented for registered mobile number field
        dispatch(DoValidateMobileNumberAction({ userData, key: "validate_mobile" }))**/
        /* Added for save info */
        let date = moment(value).format('DD/MM/YYYY')
        debugger
        let userData = {
          pan_number: formik.values.pan,
          aadhar_number: formik.values.adhar,
          // mobile_number: formik.values.contactNumber,
          // aadhar_Linked_Mobile_no: formik.values.contactNumber
          fullName:formik.values.name,
          dateOfBirth:date.toString(),
        }
        dispatch(DoSaveBasicDetailsAction({ userData, key: "save_basic_details" }))
        // dispatch({
        //   type: SHOW_MESSAGE,
        //   payload: {
        //     type: "success",
        //     message: "Aadhar number is valid",
        //   }
        // })
      }
      let mobileRefObj = findLast(uiData["messages"], { key: "validate_mobile" })
      if (mobileRefObj && mobileRefObj.type === "error") {
        // dispatch({
        //   type: SHOW_MESSAGE,
        //   payload: {
        //     type: "success",
        //     message: "Mobile number is valid",
        //   }
        // })
        // let userData = {
        //   pan_number: formik.values.pan,
        //   aadhar_number: formik.values.adhar,
        //   mobile_number: formik.values.contactNumber,
        //   aadhar_Linked_Mobile_no: formik.values.contactNumber
        // }
        // dispatch(DoSaveBasicDetailsAction({ userData, key: "save_basic_details" }))
        // let user = localStorage.getItem('user');
        //save details in Local Storage
        // let userInfo = JSON.parse(user)
        // let newUserInfo = {
        //   ...userInfo,
        //   adharNumber: formik.values.adhar,
        //   registeredMobile: formik.values.contactNumber,
        //   panNumber: formik.values.pan
        // }
        // dispatch({
        //   type: SAVE_USER_DETAILS,
        //   payload: newUserInfo
        // })
        // localStorage.setItem("user", JSON.stringify(newUserInfo))
        // Storage.storeUserData(user)
      }
      let saveRefObj = findLast(uiData["messages"], { key: "save_basic_details" })
      if (saveRefObj && saveRefObj.type === "success") {
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
            type: "success",
            message: "Step 1: Basic details completed"
          }
        })
        navigation('/home/addressDetails');
      }
    }
  }, [uiData, navigation, dispatch])
  const validationSchema = yup.object({
    name: yup.string().matches('^[a-zA-Z\\s]*$',"Please Enter Valid Name ").required("Please Enter Your Full Name"),
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
      name: "",
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
                key="name"
                className={overrideClasses.root + " " + overrideClasses.root2}
                style={{ marginBottom: "5%" }}
                fullWidth
                variant="outlined"
                id={"name"}
                name={"name"}
                label={"Enter your Name (As per your Aadhar Card)"}
                value={formik.values.name}
                onChange={formik.handleChange}
                //error
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              // required

              />
            
              <TextField
                key="panNumber"
                className={overrideClasses.root + " " + overrideClasses.root2}
                style={{ marginBottom: "5%" }}
                fullWidth
                variant="outlined"
                id={"pan"}
                name={"pan"}
                label={"Enter your Pan number"}
                value={formik.values.pan && formik.values.pan.toUpperCase()}
                onChange={formik.handleChange}
                //error
                error={formik.touched.pan && Boolean(formik.errors.pan)}
                helperText={formik.touched.pan && formik.errors.pan}
              // required

              />

              <TextField
                className={overrideClasses.root + " " + overrideClasses.root2}
                style={{ marginBottom: "5%", marginTop: "1%" }}
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
                //error
                error={formik.touched.adhar && Boolean(formik.errors.adhar)}
                helperText={formik.touched.adhar && formik.errors.adhar}
                label={"Enter your Adhar number "}
              // required
              />
              {/* <TextField
                className={overrideClasses.root + " " + overrideClasses.root2}
                variant={"outlined"}
                style={{ marginBottom: "5%" }}
                id={"contactNumber"}
                fullWidth
                name={"contactNumber"}
                value={formik.values.contactNumber}
                onChange={formik.handleChange}
                //error
                error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
                helperText={formik.touched.contactNumber && formik.errors.contactNumber}
                label={"Enter Mobile number "}
                required
              /> */}
            </Box>
            <Box className={overrideClasses.root + " " + overrideClasses.root2}
                style={{ marginBottom: "5%", width: '100%',marginLeft:"1%" }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker

                    label="Enter your Date of Birth"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    // formatDate={(date) => moment(new Date()).format('MM-DD-YYYY')}
                  />
                </LocalizationProvider>
              </Box>
            <Typography display="inline" style={{ marginBottom: "3%", marginTop: "5%" }}>
              {/* <Checkbox
                name={"acceptTerms"}
                value={formik.values.acceptTerms}
                onChange={formik.handleChange}
                required /> */}
                <Typography variant={"h8"}>click to read and accept the
                <Button color={"secondary"} style={{ textTransform: "none", fontSize: "0.9em", fontWeight: 'bold' }} onClick={handleOpen}>{"Terms and conditions"}</Button></Typography></Typography>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              Please find below sample terms and conditions. Just create a simple pop up on click of terms and conditions page and copy this content in it.
                <br></br>
                2.1	Salary Accounts
                <br></br>
                <p>
                2.1.1	Reversal of Salary Credits: I hereby irrevocably and unconditionally authorise the Bank to on the request of my employer/company recover by marking hold funds/debiting/reversal of credit, any excess amount credited by and/or on the instructions of the employer/company into my account, with notice to me. The Bank will not be held responsible and liable for any such hold funds/debit/reversal of credit carried out by the Bank.
                </p><p>
                2.1.2	I acknowledge that my account has been opened with the Bank by virtue of my employment with the employer/company and is designated as "Salary Account". I understand that pursuant to the arrangement between the employer/company and the Bank, at the sole discretion of the Bank I may be entitled to certain facilities on the Salary Account only during the currency of my employment with the employer/company or till the subsistence of the arrangement between the employer/company and the Bank. I shall notify the Bank on cessation of services with the employer/company. The words "the employer/company" refers to the corporate in which I am employed and on whose request the Salary Account is opened with the Bank.
                </p>
                <p>
                2.1.3	I understand and acknowledge that the special facilities offered on Salary Account are basis agreement of regular salary credit between the employer/company and the Bank.
                </p><p>
                2.1.4	I understand and acknowledge that the name of the account holder is not tallied with the account number before crediting salary in the respective accounts as provided by my employer/company.
                </p><p>
                2.1.5	I understand and acknowledge that the responsibility of providing the correct account number for crediting of salaries will lie solely with my employer/company and i shall not hold the bank responsible for any wrong credit arising out of such incorrect account number provided by my employer/company.
                </p><p>
                2.1.6	I hereby agree that in the event of no salary credits in my Salary Account for any continuous three months, the Bank reserves the right to change the status of Salary Account to Savings Regular Account without any intimation to the account holder/me and the Terms & Conditions as applicable to the HDFC Bank Savings Regular Account shall apply to this account from the date of change of status. The Terms & Conditions and features applicable to Savings Regular Account are published on the website of the Bank.
                </p><p>
                2.1.7	I hereby agree that the Bank may at its sole and absolute discretion close the Salary Account if noticed that no amounts are credited by and/or on the instructions of the employer/company to the Salary Account regularly or in the event of my ceasing to be in the services of the employer/company for any reason whatsoever after giving me a notice of 30 days.
                </p><p>
                2.1.8	I agree that any modification to the mode of operation in my account can be effected by the Bank with the consent of all joint holders to my account. I acknowledge that the Bank will not be entertaining any request for modification received without consent of all joint holders to my account. I further agree and acknowledge that till such time the Bank shall continue to honor the instructions in accordance with the mode of operation agreed at the time of opening the account.
                </p><p>
                2.2	Additional benefit for Salary Account Customer - Personal Accidental Death Cover (PADC) on Salary Account
                </p><p>
                2.2.1	The following are the broad Terms & Conditions of the captioned cover on salary account and Titanium Royale Debit card
                </p>
                •	Accidental Death resulting from bodily injury due accident only
                <br />
                •	Accidental Death resulting from bodily injury which directly and independently of all other causes results in Death within twelve (12) months of the event date
                <br />
                •	On the event date, the account holder
                <br />
                •	Is a bonafide employees (aged less than 70 years ) of the organization to whom the specific offer has been extended
                <br />
                •	Is holding a Salary Account under the Corporate Salary Account Program with HDFC Bank and has received salary credit in the month or month prior
                <br />
                •	Should have carried out at least one purchase transaction using the Debit Card, within 6 months prior to the date of loss.
                <br />
                •	In case of Air Accidental Death claim ticket should have been purchased using Debit Card linked to Salary Account
                <br />
                •	Cover provided only to the primary account holder
                <p></p>
                The following are the broad Terms & Conditions of the captioned cover in case of Salary Family Account
                <br />
                •	Accidental Death resulting from bodily injury due accident only
                <br />
                •	Accidental Death resulting from bodily injury which directly and independently of all other causes results in Death within twelve (12) months of the event date
                <br />
                •	On the event date, the account holder
                <br />
                •	Is aged less than 70 years
                <br />
                •	Is holding a Salary Family Account by virtue of his/her relationship with the salary account holder and such salary account is a zero balance account and has received salary credit in the month or month prior
                <br />
                •	Should have carried out at least one purchase transaction using the debit card, within 6 months prior to the date of loss
                <br />
                •	In case of Air Accidental Death claim ticket should have been purchased using Debit Card linked to Salary Family Account
                <br />
                •	Cover provided only to the primary account holder
                <p></p>
                2.2.2	Claim Procedure:
                •	In the event of death of the account holder, the beneficiary to approach the account branch, and the branch would guide the customer on the documents required.
                <br />
                •	On the receipt of these documents by the branch, as special gesture for our salary account holders, HDFC bank would liaise with the insurance company for processing the claim. However, receipt of the documents by the branch does not construe acceptance of claim. In the event of death, the beneficiary has to inform the account branch immediately. As per policy the insurance company needs to be informed (through the bank) within 30 days of accident and all supporting documents relating to the claim needs to be submitted to the insurance company within sixty (60) days from the date of loss.
                <p></p>
                2.2.3	Disclaimer :
                •	The account holder specifically acknowledges that the Bank will not be liable in any manner whatsoever by virtue of any insurance cover provided, and that the insurance company will be solely liable, in case of a death of a Cardholder and shall not hold the Bank responsible for any matter arising out of or in connection with such insurance cover, whether for or in respect of any deficiency or defect in such insurance cover, recovery or payment of compensation, processing or settlement of claims or otherwise howsoever, and all such matters shall be addressed to and sorted out directly with the Insurance company.
                <br />
                •	The account holder further acknowledges that the insurance cover so provided will be available to the salary accounts only as per the terms of the relevant insurance policy in force, with his account maintained in good standing. On the account being closed or converted to savings regular account temporarily or permanently for whatever reason, the benefit of such insurance cover shall automatically and ipso facto cease to be available from such date of cesser of account. Further the account holder also agrees that even during continuation of his account, the Bank may at any time suspend, withdraw or cancel the benefit of such insurance cover, and there will no binding obligation on the Bank to continue this benefit.
                <br />
                •	Insurance company can be subject to change and insurance cover is subject to the terms and conditions of the policy in force
                <br />
                <Checkbox
                name={"acceptTerms"}
                value={formik.values.acceptTerms}
                onChange={formik.handleChange}
                required />
                I understand and accept the Terms and conditions 
              </Box>
            </Modal>
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


