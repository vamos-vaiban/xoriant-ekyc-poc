import React, { useEffect, useState } from 'react';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import { useStyles } from "./styles"
import FileUploader from "../../components/FileUploader"
import { DoCompareTheDocumentAction, DoGetNameOfUserAction } from "../../redux/actions/aadharValidationActions"
import { CHANGE_STATUS,SAVE_USER_DETAILS,SAVE_USER_NAME } from '../../redux/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { findLast } from "lodash"
import Storage from "../../utils/Storage"
import Content from './content'; 

export default function AadharValidation() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const [aadharFile, setAadharFile] = useState()
  const [userPic, setUserPic] = useState()
  const [errorAdhar, setErrorAdhar] = useState()
  const [errorUser, setErrorUser] = useState()
  const uiData = useSelector(data => data.ui)
  const userData = useSelector(data => data.auth && data.auth.nameAndDOB)
  const aadharChangeHandler = (file, fileName, error) => {
    setAadharFile({
      file: file,
      fileName: fileName
    })
    setErrorAdhar(error)
  }
  const userPicChangeHandler = (file, fileName, error) => {
    setUserPic({
      file: file,
      fileName: fileName
    })
    setErrorUser(error)
  }
  useEffect(()=>{
    debugger
dispatch(DoGetNameOfUserAction())
  },[])
  useEffect(() => {
    if (uiData["messages"]) {
      let refObj = findLast(uiData["messages"], { key: "adhar_upload" })
      if (refObj && refObj.type === "success") {
        dispatch({
          type: CHANGE_STATUS,
          payload: {
            label: "Review",
            status: "complete"
          }
        })
        navigation('/home/review')
        let adharreader = new FileReader();
        let picreader = new FileReader();
       
        let adharPhotoUrl = URL.createObjectURL(aadharFile.file);
        let userPicUrl = URL.createObjectURL(userPic.file)
        // let user = localStorage.getItem('user');
        // let userInfo = JSON.parse(user)
        
        // let userSpecificData ={ 
        //   ...userInfo,
        //   adharPhotoUrl: adharPhotoUrl,
        //   userPicUrl: userPicUrl
        // }
        // localStorage.setItem("user", JSON.stringify(userSpecificData))
        // Storage.storeUserData(user)
        // dispatch({
        //   type:SAVE_USER_DETAILS,
        //   payload:userSpecificData
        // })
      }
    }
  }, [uiData])
  const saveImageHandler = () => {
    let document = aadharFile && aadharFile.file
    let user = userPic && userPic.file
    let data = {
      "Document_Photo": document,
      "User_Photo": user,
      "name":userData.fullName,
    }
    dispatch(DoCompareTheDocumentAction({ data: data, key: "adhar_upload" }))

  }
  return (
    <Grid container alignItems={"center"} justifyContent={"center"} style={{ overflow: "none" }}>
      <Grid item xs={12} sm={6} className={classes.grid}>
        <Paper elevation={3} className={classes.paper}>
          <form>
            <Typography variant={"h4"} className={classes.title}>Upload Aadhar</Typography>
            <Typography variant={"h6"} >{"Please upload your Adhar Card and Photo in JPG/JPEG or PNG format"}</Typography>
            <Grid>
              <FileUploader
                id={"Aadhar"}
                changeHandler={aadharChangeHandler}
                fileName={aadharFile && aadharFile.fileName}
                accept={".jpeg"|| ".jpg"}
                fileSize={4024000}
                supportedFormats={["image/jpeg", "image/jpg", "image/png"]}
                maxFileSize={"4024kb"}
                label={"Drag and drop your Adhaar image here"}
              />
            </Grid>
            <Grid style={{ marginTop: "3%" }}>
              <FileUploader
                id={"profile"}
                changeHandler={userPicChangeHandler}
                fileName={userPic && userPic.fileName}
                accept={".jpeg"|| ".jpg"}
                fileSize={4024000}
                supportedFormats={["image/jpeg", "image/jpg", "image/png"]}
                maxFileSize={"4024kb"}
                label={"Drag and drop your Photo here"}
              />
            </Grid>
            {
              errorAdhar || errorUser ?
                <Typography align={"center"} style={{ color: "red", marginTop: "8%" }}>{errorAdhar || errorUser}</Typography>
                : null
            }

          </form>
          <Button style={{ marginLeft: "40%", backgroundColor: "grey", marginTop: "10%" }} onClick={saveImageHandler}>Submit</Button>
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


