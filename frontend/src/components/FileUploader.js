import { Button, Grid, Box, makeStyles, Typography } from "@material-ui/core"
import React, { useState,useCallback }  from "react"
import {useDropzone} from 'react-dropzone'
const useStyles = makeStyles(theme => ({
    button: {
        borderRadius: 8,
        textTransform:"none",
        border:"1px solid",
        borderColor:theme.palette.primary.dark
    },
    dragAndDrop: {
        // backgroundColor:"red",
        border: "2px dashed black",
        height: "100%",
        width: "100%",
        marginTop:"10%"
    },
    container: {
        padding: "10%"
    }
}));
export default function FileUploader({ changeHandler, fileName, id, accept, fileSize, supportedFormats, maxFileSize,label }) {
    const [error, setError] = React.useState()
    const [fileSelectedName, setFileSelectedName] = React.useState(fileName)
    const onDrop = useCallback(acceptedFiles => {
        checkValidations(acceptedFiles[0])
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    const fileChangeHandler = event => {
        if (event.target.files[0]) {
            checkValidations(event.target.files[0])
        }
    }

    const checkValidations =(file)=>{
        if (supportedFormats.includes(file.type)) {
            if (file && file.size <= fileSize) {
                // let file = file
                let fileName = file.name
                changeHandler(file, fileName)
                setError("")
                setFileSelectedName(fileName)
            } else {
                // setError("Selected File : " + event.target.files[0] && event.target.files[0].name + " should be less than " + maxFileSize)
                setFileSelectedName(null)
                changeHandler(null, null,"Selected File : " + file && file.name + " should be less than " + maxFileSize)
            }
        } else {
            // setError("Selected File : " + event.target.files[0] && event.target.files[0].name + " is not supported. ")
            setFileSelectedName(null)
            changeHandler(null, null,"Selected File : " + file && file.name + " is not supported. ")
        }
    }
    const classes = useStyles();
    let file = null;
    return (
        <form>
            <Grid container xs={12} justifyContent="center">
                <Grid item xs={9} style={{}}>
                    <input
                        style={{ display: "none" }}
                        id={"contained-button-file" + id}
                        type="file"
                        accept={accept}
                        onChange={fileChangeHandler} />
                    <label htmlFor={"contained-button-file" + id}>
                        <div className={classes.dragAndDrop} >
                            <div className={classes.container}>
                            <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <Typography align={"center"}>Drop the file here ...</Typography> :
          <Typography align={"center"}>{label}</Typography>
      }
    </div>
                                <Typography align={"center"}>{"or"}</Typography>
                                <Typography align={"center"}><Button className={classes.button} variant="contained" color={"primary"} component="span">Browse on your device</Button></Typography>
                            </div>
                        </div>
                    </label>
                </Grid>
            </Grid>
            {
                fileName ?
                <Typography  align={"center"} style={{marginTop:"8%" }}>{fileName ? "Selected File : " + fileName:null}</Typography>

                    :null            }

        </form>
    )
}