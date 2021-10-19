import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    gridOne: {
        height: "80%",
        marginTop: "15%",
        marginBottom: "15%",
        width: "80%",
    },
    gridSecond: {
        // backgroundColor: "blue"
    },
    paper: {
        marginLeft: "10%",
        marginRight: '20%',
        marginTop: "20%",
        marginBottom: "15%",
        width: "60%",
        borderBottom: "15px solid",
        borderBottomColor: "red",
        padding:"5%"
    },
    generateOTPButton: {
        marginTop: "10%",
        marginLeft: "35%",
        marginRight: "30%"
        // backgroundColor:"blue"
    },
    OrLabel: {
        marginLeft: "40%",
        //marginRight: "40%",
        marginBottom: "5%",
        marginTop: "5%"
    },
    signInWithGoogleButton: {
        marginLeft: "25%",
        marginRight: "20%",
    },
    submitButton: {
        marginTop: "10%",
        marginLeft: "40%",
        marginRight: "30%"
    },
    content: {
        // padding: "4%",
        marginLeft: "10%",
        // marginRight:"70%",
        width: "80%",
        textAlign: "justify",
        // marginRight:"10%"
    },
    contentText: {
        marginBottom: "5%",
        marginRight:"10%",
    },
    otp: {
        // backgroundColor:"blue",
        width: "100%",
        height: "100%",
        marginTop: "5%",
    },
    alignLabel:{
        marginBottom:"5%",
        color:theme.palette.primary.contrastText,
        fontWeight:"bold"
    },
    addMargin:{
        marginBottom:"10%"
    },
    addMarginTwo:{
        marginBottom:"5%"
    },
    resendOtp :{
        marginBottom:"5%",
        float:"left"
    }
}));

export { useStyles };
