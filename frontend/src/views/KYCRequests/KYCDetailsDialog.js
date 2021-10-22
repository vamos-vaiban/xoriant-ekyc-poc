import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Chip, Grid, TextField, Typography } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HourGlassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import { useStyles } from './styles';

const userMetadataRows = [
  { columns: [{ title: "Request ID", key: "reqId" }, { title: "CRN Number", key: "crnNumber" }, { title: "Account Number", key: "accountNumber" }] },
  { columns: [{ title: "PAN Number", key: "panNumber" }, { title: "Mobile Number", key: "mobileNumber" }, { title: "Registered Mobile Number", key: "registeredMobile" }] },
  { columns: [{ title: "AADHAR Number", key: "adharNumber" }, { title: "House Number", key: "house_no" }, { title: "Address Line 1", key: "address_line_1" }] },
  { columns: [, { title: "Address Line 2", key: "address_line_2" }, { title: "City", key: "city" }, { title: "Landmark", key: "landmark" }] },
]
export default function KYCDetailsDialog(props) {
  const classes = useStyles();
  const { open, userData, closeDialog } = props;

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      closeDialog();
    }
  }

  const KYCStatus = () => {
    switch(userData.status) {
      case "Approved":
        return <Chip icon={<CheckCircleIcon style={{ fill: "#fff" }} />} className={classes.approvedKYC} label={userData.status} />
      case "Rejected":
        return <Chip icon={<CancelIcon style={{ fill: "#fff" }} />} className={classes.rejectedKYC}  label={userData.status} />
      case "Pending":
        return <Chip icon={<HourGlassEmptyIcon style={{ fill: "#fff" }}/>} className={classes.pendingKYC}  label={userData.status} />
      default:
        return <Chip label="Draft" />
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={"md"}>
      <DialogTitle>
        <Typography variant="h5" component="div" gutterBottom>KYC Details</Typography>
        { KYCStatus() }
      </DialogTitle>
      <DialogContent dividers={true}>
        {
          userMetadataRows.map((row, index) => {
            return (
              <Grid container wrap="nowrap" spacing={2} key={index}>
                {
                  row.columns.map(column => (
                    <Grid item md={6} key={column.key}>
                      <TextField
                      fullWidth
                        id={`textfield_${column.key}`}
                        label={column.title}
                        variant="standard"
                        defaultValue={userData[column.key]}
                        InputProps={{
                          readOnly: true,
                        }} />
                    </Grid>
                  ))
                }
              </Grid>
            )
          })
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}