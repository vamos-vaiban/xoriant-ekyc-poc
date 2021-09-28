import { Button, Grid, Box, makeStyles, Typography } from "@material-ui/core"
import React, { useState } from "react"
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
    const fileChangeHandler = event => {
        if (event.target.files[0]) {
            debugger
            if (supportedFormats.includes(event.target.files[0] && event.target.files[0].type)) {
                if (event.target.files[0] && event.target.files[0].size <= fileSize) {
                    let file = event.target.files
                    let fileName = event.target.files[0].name
                    changeHandler(file, fileName)
                    setError("")
                    setFileSelectedName(fileName)
                } else {
                    // setError("Selected File : " + event.target.files[0] && event.target.files[0].name + " should be less than " + maxFileSize)
                    setFileSelectedName(null)
                    changeHandler(null, null,"Selected File : " + event.target.files[0] && event.target.files[0].name + " should be less than " + maxFileSize)
                }
            } else {
                // setError("Selected File : " + event.target.files[0] && event.target.files[0].name + " is not supported. ")
                setFileSelectedName(null)
                changeHandler(null, null,"Selected File : " + event.target.files[0] && event.target.files[0].name + " is not supported. ")
            }
        }
    }

    const classes = useStyles();
    let file = null;
    return (
        <form>
            <Grid container xs={12} justifyContent="center">
                {/* <Grid item xs={6}>
                    {
                        (fileSelectedName != null)
                            ? (<span>File Selected - {fileSelectedName}</span>)
                            : (<span>Choose a file... </span>)
                    }
                </Grid> */}
                <Grid item xs={9} style={{}}>
                    <input
                        style={{ display: "none" }}
                        id={"contained-button-file" + id}
                        type="file"
                        accept={accept}
                        onChange={fileChangeHandler} />
                    <label htmlFor={"contained-button-file" + id}>
                        <div className={classes.dragAndDrop}>
                            <div className={classes.container}>
                                <Typography align={"center"}>{label}</Typography>
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