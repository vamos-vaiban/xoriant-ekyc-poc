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
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingLeft: "1.57vw",
                            paddingRight: "1.57vw"
                        }}>
                            <Box sx={{
                                fontFamily: "Hind Vadodara",
                                fontStyle: "normal",
                                fontWeight: "bold",
                                fontSize: "3.24vh",
                            }}>

                                Requested Information

                            </Box>
                            <Button style={{ float: "right" }} onClick={handleClose}>
                                <img style={{
                                    height: "4.1vh"
                                }} src={close}></img>
                            </Button>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            paddingTop: "3.79vh",
                            paddingLeft: "1.7vw"

                        }}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                flexDirection: "column",
                                alignItems: "center",
                                paddingRight: "1.7vw",
                                height: "44.2vh"
                            }}>
                                <Box sx={{

                                }}>
                                    {userSpecificData && userSpecificData.photopath && userSpecificData.photopath.indexOf('/users/documents') == -1 ?
                                        <img style={{ height: "22.4vh" }} src={userSpecificData && userSpecificData.photopath} />
                                        : <><AccountBoxIcon sx={{ fontSize: 150 }} /></>}
                                </Box>
                                {/* <Box>
                                        Document Uploaded
                                </Box> */}

                                {/* <Button variant='outlined' >{"Accept"}</Button>
                                <Button variant='outlined' >{"Reject"}</Button> */}
                                {console.log(userSpecificData)}
                                <a href={userSpecificData && userSpecificData.s3url} target="_blank">
                                    <Button style={{ width: '100%' }} variant='outlined'>{"View Uploaded Video"}</Button>
                                </a>
                                <a href={userSpecificData && userSpecificData.aadhaarpath} target="_blank">
                                    <Button variant='outlined'>{"View Uploaded Document"}</Button>
                                </a>
                            </Box>
                            <Box sx={{
                                fontFamily: "Hind Vadodara",
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "2.0vh",
                                lineHeight: "36px",
                                display: "flex",
                                flexDirection: "column",
                                height: "44vh",
                                justifyContent: "space-between"
                            }}>
                                <Box>{"Name : "}{userSpecificData && userSpecificData.fullName}</Box>
                                <Box>{"Date of Birth : "}{userSpecificData && userSpecificData.dateOfBirth}</Box>
                                <Box>
                                    {"Address : "}{userSpecificData && userSpecificData.house_no} {userSpecificData && userSpecificData.address_line_1} {userSpecificData && userSpecificData.address_line_2} {userSpecificData && userSpecificData.landmark}, {userSpecificData && userSpecificData.city}
                                </Box>
                                <Box>
                                    {"Mob No : "}{userSpecificData && userSpecificData.mobile_number}
                                </Box>
                                <Box>
                                    {"Account Number : "}{userSpecificData && userSpecificData.accountNumber}
                                </Box>
                                <Box>
                                    {"CRN number : "}{userSpecificData && userSpecificData.crn}
                                </Box>
                                <Box>
                                    {"Request Id : "}{userSpecificData && userSpecificData.request_id}
                                </Box>
                                <Box>{"Adhar Number : "}{userSpecificData && userSpecificData.aadhar_number}</Box>
                                <Box>{"Pan Number : "}{userSpecificData && userSpecificData.pan_number}</Box>
                                <Box>{"Similarity Percentage : "}{userSpecificData && userSpecificData.similarity}</Box>
                            </Box>
                        </Box>
                        {/* <Grid container spacing={2} style={{ padding: "5%" }}>
                            <Grid item xs={4}>
                                <Box>
                                    {userSpecificData && userSpecificData.photopath ?
                                        <img style={{ borderRadius: '50%',height:"22.4vh" }}  src={userSpecificData && userSpecificData.photopath} />
                                        : <><AccountBoxIcon sx={{ fontSize: 150 }} /></>}
                                </Box>
                            </Grid>
                            <Grid item xs={8}>
                                <Box>
                                    <Typography>{"Address : "}{userSpecificData && userSpecificData.house_no} {userSpecificData && userSpecificData.address_line_1} {userSpecificData && userSpecificData.address_line_2} {userSpecificData && userSpecificData.landmark}, {userSpecificData && userSpecificData.city}</Typography>
                                    <Typography>{"Mob No : "}{userSpecificData && userSpecificData.mobile_number}</Typography>

                                    <Typography>{"Account Number : "}{userSpecificData && userSpecificData.accountNumber}</Typography>
                                    <Typography>{"CRN number : "}{userSpecificData && userSpecificData.crnNumber}</Typography>
                                    <Typography>{"Request Id : "}{userSpecificData && userSpecificData.request_id}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box>
                                    <Typography>{"Validated Adhar Number : "}{userSpecificData && userSpecificData.aadhar_number}</Typography>
                                    <Typography>{"Validated Pan Number : "}{userSpecificData && userSpecificData.pan_number}</Typography>
                                    <Typography>{"Similarity Percentage : "}{userSpecificData && userSpecificData.similarity}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box>
                                    Document Uploaded</Box>
                            </Grid>
                            <Grid item xs={8}>
                                <Box style={{marginLeft:"40%",marginRight:"20%"}}>
                                    <Button variant='outlined' style={{marginRight:"20%"}}>{"Accept"}</Button>
                                    <Button variant='outlined'>{"Reject"}</Button>
                                </Box>
                            </Grid>
                        </Grid> */}
                    </Box>
                </Paper>
            </Modal>
        </div>
    );
}
