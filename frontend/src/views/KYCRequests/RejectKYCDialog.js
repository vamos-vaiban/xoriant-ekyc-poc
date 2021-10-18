import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function RejectKYCDialog(props) {
    const { open, closeDialog, submitComment } = props;
    const [ comment, setComment ] = useState('');
    useEffect(() => {
        setComment('');
    }, [open])

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            closeDialog();
        }
    }

    const handleSubmit = () => {
        submitComment(comment);
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={"sm"}>
            <DialogTitle>Reject KYC</DialogTitle>
            <DialogContent dividers={true}>
                <DialogContentText>
                    To reject this KYC request, please enter your comment here.
                </DialogContentText>
                <textarea
                    rows="5"
                    cols="75"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    placeholder="Add comment here..."
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
}