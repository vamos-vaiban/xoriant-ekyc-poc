import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{

        "& .Mui-focused ": {
            borderBottom:"2px solid rgba(0,0,0.89)",
            color:'revert'  
        },
        '& label.Mui-focused': {
            border:"none"
        }
    }
    ,approvedKYC: {
        color: "#fff",
        backgroundColor: "#2e7d32"
    },
    rejectedKYC: {
        color: "#fff",
        backgroundColor: "#ff3300"
    },
    pendingKYC: {
        color: "#fff",
        backgroundColor: "#1976d2"
    }
}));

export { useStyles };