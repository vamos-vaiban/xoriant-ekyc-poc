import React, { useState } from 'react';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import { useStyles } from "./styles"
import FileUploader from "../../components/FileUploader"
import {DoCompareTheDocumentAction} from "../../redux/actions/aadharValidationActions"
import { useDispatch } from 'react-redux';
export default function AadharValidation() {
  const classes = useStyles();
  const dispatch = useDispatch()
  
  const [aadharFile, setAadharFile] = useState()
  const [userPic, setUserPic] = useState()
  const [errorAdhar, setErrorAdhar] =useState()
  const [errorUser, setErrorUser] =useState()

  const aadharChangeHandler = (file, fileName,error) => {
    setAadharFile({
      file: file,
      fileName: fileName
    })
    setErrorAdhar(error)
  }
  const userPicChangeHandler = (file, fileName,error) => {
    setUserPic({
      file: file,
      fileName: fileName
    })
    setErrorUser(error)
  }
  const saveImageHandler=()=>{
    let document = aadharFile && aadharFile.file
    let user = userPic && userPic.file
    let data ={
      "document photo": document,
      "user photo" : user
    }
    dispatch(DoCompareTheDocumentAction(data))
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
                accept={".jpeg", ".jpg"}
                fileSize={1024000}
                supportedFormats={["image/jpeg","image/jpg","image/png"]}
                maxFileSize={"1024kb"}
                label={"Drag and drop your Adhaar image here"}
              />
            </Grid>
            <Grid style={{marginTop:"3%"}}>
              <FileUploader
                id={"profile"}
                changeHandler={userPicChangeHandler}
                fileName={userPic && userPic.fileName}
                accept={".jpeg", ".jpg"}
                fileSize={1024000}
                supportedFormats={["image/jpeg","image/jpg","image/png"]}
                maxFileSize={"1024kb"}
                label={"Drag and drop your Photo here"}
              />
            </Grid>
            {
                errorAdhar || errorUser ?
                    <Typography  align={"center"} style={{ color: "red",marginTop:"8%" }}>{errorAdhar || errorUser}</Typography>
                    : null
            }

          </form>
          <Button style={{marginLeft:"40%",backgroundColor:"grey",marginTop:"10%"}} onClick={saveImageHandler}>Next</Button>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}
        className={classes.contentGrid}
      >
        {/* <Content /> */}
      </Grid>
    </Grid>
  );
}


