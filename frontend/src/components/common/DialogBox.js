import React, {useEffect} from 'react';
import {Button,TextField} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function DialogBox({shouldOpen,onSelect,onClickHandler, dialogText,onChangeRemark}) {
  const [open, setOpen] = React.useState(shouldOpen);
  const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect( () => {
    setOpen(shouldOpen)
  },[shouldOpen])

  return (
    <div>
      <Dialog
        // fullScreen={fullScreen}
        style={{width:"80%"}}
        open={open}
        onClose={handleClose}
        disableBackdropClick={true}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            {dialogText}
            <TextField
            label="Remark"
            fullWidth
            multiline
            variant="standard"
            onChange={onChangeRemark}
          />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClickHandler} color="red">
            Yes, I'm sure
          </Button>
          <Button onClick={() => {
              onSelect(false)
          }} color="red" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}