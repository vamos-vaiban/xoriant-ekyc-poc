import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    grid: {
        height: "80%",
        marginTop: "7%",
        marginBottom: "5%",
        width: "60%",
        },
    paper: {
        marginLeft: "10%",
        marginRight: '10%',
        marginTop: "0%",
        marginBottom: "10%",
        width: "75%",
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
