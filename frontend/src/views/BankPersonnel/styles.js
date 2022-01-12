import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    grid: {
    },
        paper: {
            marginLeft: "10%",
            marginRight: '20%',
            marginTop: "10%",
            marginBottom: "15%",
            width: "60%",
            borderBottom: "15px solid",
            borderBottomColor: "red",
            padding:"5%"
        },
title:{
    color:theme.palette.primary.contrastText,
    marginBottom:"1%"
},

}));

export { useStyles };
