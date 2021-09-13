import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux'
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function CustomSnakbar({key,message,type}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    // dispatch({type:HIDE_MESSAGE,payload:{key,message}})
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity={type}>
         {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
export default function AppSnakbar(props){
    const uiData = useSelector((data)=>(data.ui && data.ui.messages) || [])
    return(
        <div>
            {
                uiData.map((messages)=>(
                    <CustomSnakbar {...messages} />
                ))
            }
        </div>
    )
}
