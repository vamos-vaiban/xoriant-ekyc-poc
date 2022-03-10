import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Modal, Grid, Paper, Box } from '@mui/material';
import { Button, Typography } from '@material-ui/core';
import { useStyles } from "./styles"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import close from '../../assets/close.png';

export default function MoreInfo({ open, handleClose, userSpecificData }, props) {
    const classes = useStyles(props);
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",


        }}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper sx={{
                    paddingTop: "5vh",
                    width: "56vw",
                    height: "65vh",
                    marginLeft: "23vw",
                    marginTop: "15vh"
                }}>
                    <Grid container>

                        <Grid item xs={3} style={{padding:'3%'}}>
                            {userSpecificData && userSpecificData.photopath && userSpecificData.photopath.indexOf('/users/documents') == -1 ?
                                <img style={{ borderRadius: '50%', height: "22.4vh" }} src={userSpecificData && userSpecificData.photopath} />
                                : <><AccountBoxIcon sx={{ fontSize: 150 }} /></>}
                            <a href={userSpecificData && userSpecificData.s3url} target="_blank">
                                <Button variant='outlined'>{"View Uploaded Video"}</Button>
                            </a>
                            {/* <div><img style={{ borderRadius: '50%' }} height={150} width={150} src={userSpecificData && userSpecificData.photopath} />  </div> */}
                        </Grid>
                        <Grid item xs={7} style={{ marginLeft: "5%" }}>
                            <Box >
                                <Typography variant={"h4"}>{" Requested Information"}</Typography>
                            </Box>
                            <Box >
                                <Typography>{"Name : "}{userSpecificData && userSpecificData.fullName}</Typography>
                                <Typography>{"Date of Birth : "}{userSpecificData && userSpecificData.dateOfBirth}</Typography>
                                <Typography>{"Address : "}{userSpecificData && userSpecificData.house_no} {userSpecificData && userSpecificData.address_line_1} {userSpecificData && userSpecificData.address_line_2} {userSpecificData && userSpecificData.landmark}, {userSpecificData && userSpecificData.city}</Typography>
                                <Typography>{"Mob No : "}{userSpecificData && userSpecificData.mobile_number}</Typography>
                                <Typography>{"Validated Adhar Number : "}{userSpecificData && userSpecificData.aadhar_number}</Typography>
                                <Typography>{"Validated Pan Number : "}{userSpecificData && userSpecificData.pan_number}</Typography>
                                {/* <Typography>{"Uploaded Video : "}<a href={userSpecificData && userSpecificData.s3url} target="_blank">{userSpecificData && userSpecificData.s3url}</a></Typography> */}
                                <Typography>{"Uploaded Document : "}<a href={userSpecificData && userSpecificData.aadhaarpath} target="_blank">{userSpecificData && userSpecificData.aadhaarpath}</a></Typography>
                                <Typography>{"Similarity Percentage : "}{userSpecificData && userSpecificData.similarity}</Typography>            
                                {/* <Typography variant={"h5"} style={{ marginTop: "2%" }}>{"Please note down these numbers "}</Typography> */}
                                <Typography>{"Account Number : "}{userSpecificData && userSpecificData.accountNumber}</Typography>
                                <Typography>{"CRN number : "}{userSpecificData && userSpecificData.crn}</Typography>
                                <Typography>{"Request Id : "}{userSpecificData && userSpecificData.request_id}</Typography>

                            </Box>
                        </Grid>
                        <Grid item xs={1} style={{ float: 'left' }}>
                            <Button onClick={handleClose}>X</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Modal>
        </div>
    );
}
