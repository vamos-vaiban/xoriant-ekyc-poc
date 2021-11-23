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
contentText:{
    width:"29vw",
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '32px',
    
    /* identical to box height */
    
    /* Text */
    color: '#353535'

},
contentHead:{
width:"29vw",
fontFamily: 'Roboto',
fontStyle: 'normal',
fontWeight: '500',
fontSize: '32px',
lineHeight: '37.5px',

/* identical to box height */

/* Text */
color: '#353535'
},
content:{
    height:'40vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
},
contentNote:{
width:"29vw",
fontFamily: 'Roboto',
fontStyle: 'normal',
fontWeight: '700',
fontSize: '29px',
lineHeight: '32px',
color:'#BBBBBB'
}
}));

export { useStyles };
