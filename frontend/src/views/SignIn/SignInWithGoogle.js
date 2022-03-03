import React from 'react'
import { Grid, Paper, Button, Box, TextField, Typography, useTheme } from '@material-ui/core';
import { useStyles } from "./styles"
import GoogleIcon from '@mui/icons-material/Google';
export default function SignInWithGoogle(props) {
    const classes = useStyles(props);
    return (
        <Box>
            <Button color={"secondary"}
                className={classes.signInWithGoogleButton}
                // onClick={() => setEmailVerification(false)}
                startIcon={<GoogleIcon />}
                variant={"contained"}>Login with Gmail</Button>
        </Box>
    )
}
