import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, TextField, Typography } from '@material-ui/core';

const userMetadataRows = [
  { columns: [{ title: "Request ID", key: "reqId" }, { title: "CRN Number", key: "crnNumber" }, { title: "Account Number", key: "accountNumber" }] },
  { columns: [{ title: "PAN Number", key: "panNumber" }, { title: "Mobile Number", key: "mobileNumber" }, { title: "Registered Mobile Number", key: "registeredMobile" }] },
  { columns: [{ title: "AADHAR Number", key: "adharNumber" }, { title: "House Number", key: "house_no" }, { title: "Address Line 1", key: "address_line_1" }] },
  { columns: [, { title: "Address Line 2", key: "address_line_2" }, { title: "City", key: "city" }, { title: "Landmark", key: "landmark" }] },
]
export default function KYCDetailsDialog(props) {
  const { open, userData, closeDialog } = props;

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      closeDialog();
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={"md"}>
      <DialogTitle>
        <Typography variant="h5" component="div" gutterBottom>KYC Details</Typography>
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