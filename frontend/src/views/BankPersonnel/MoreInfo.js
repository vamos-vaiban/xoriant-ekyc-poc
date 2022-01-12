import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Modal, Grid, Paper, Box } from '@mui/material';
import { Button, Typography } from '@material-ui/core';
import { useStyles } from "./styles"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export default function MoreInfo({ open, handleClose, userSpecificData }, props) {
    const classes = useStyles(props);
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{height:"60%",width:"60%",marginLeft:"20%",marginRight:"20%",marginTop:"5%",marginBottom:"5%"}}
            >
                <Paper>
                    <Box style={{ padding: "5%" }}>
                        <Typography variant={"h4"}>{"Requested Information"}</Typography>
                        <Button style={{ float: "right" }} onClick={handleClose}>{"X"}</Button>
                        <Grid container spacing={2} style={{ padding: "5%" }}>
                            <Grid item xs={4}>
                                <Box>
                                    {userSpecificData && userSpecificData.userPicUrl ?
                                        <img style={{ borderRadius: '50%' }}  src={userSpecificData && userSpecificData.userPicUrl} />
                                        : <><AccountBoxIcon sx={{ fontSize: 150 }} /></>}
                                </Box>
                            </Grid>
                            <Grid item xs={8}>
                                <Box>
                                    <Typography>{"Address : "}{userSpecificData && userSpecificData.house_no} {userSpecificData && userSpecificData.address_line_1} {userSpecificData && userSpecificData.address_line_2} {userSpecificData && userSpecificData.landmark}, {userSpecificData && userSpecificData.city}</Typography>
                                    <Typography>{"Mob No : "}{userSpecificData && userSpecificData.mobileNumber}</Typography>

                                    <Typography>{"Account Number : "}{userSpecificData && userSpecificData.accountNumber}</Typography>
                                    <Typography>{"CRN number : "}{userSpecificData && userSpecificData.crnNumber}</Typography>
                                    <Typography>{"Request Id : "}{userSpecificData && userSpecificData.reqId}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box>
                                    <Typography>{"Validated Adhar Number : "}{userSpecificData && userSpecificData.adharNumber}</Typography>
                                    <Typography>{"Validated Pan Number : "}{userSpecificData && userSpecificData.panNumber}</Typography>
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
                        </Grid>
                    </Box>
                </Paper>
            </Modal>
        </div>
    );
}
