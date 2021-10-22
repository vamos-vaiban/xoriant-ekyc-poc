import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    approvedKYC: {
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