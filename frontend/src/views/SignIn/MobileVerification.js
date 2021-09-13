import React from 'react';
import NumberFormat from 'react-number-format';
import { useFormik } from "formik";
import * as yup from 'yup';
import { useStyles } from './styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            format="##########"
        />
    );
}

function MobileVerification(props) {
    const classes = useStyles(props);

    const validationSchema = yup.object({
        mobile: yup.string()
            .min(10)
            .required()
    });
    const formik = useFormik({
        initialValues: {
            mobile: ''
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            props.validateMobileNumber(formik.values.mobile);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box>
                <Box className={classes.addMargin}>
                    <Typography variant={"h5"} className={classes.alignLabel} >
                        <IconButton size="small" onClick={props.cancelMobileVerification}>
                            <KeyboardBackspaceIcon />
                        </IconButton>
                        Verify Mobile Number
                    </Typography>
                    <Typography>Please enter mobile number registered with bank account</Typography>
                </Box>
                <Box >
                    <TextField
                        fullWidth
                        name="mobile"
                        id="mobile"
                        label="mobile"
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                        helperText={formik.touched.mobile && formik.errors.mobile}
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                            startAdornment: <InputAdornment position="start"><strong>+91 -</strong></InputAdornment>,
                        }}
                        placeholder="Enter your mobile no"
                    />
                    <Button
                        color="secondary"
                        variant="contained"
                        type="submit"
                        className={classes.generateOTPButton}
                        disabled={!formik.values.mobile || Boolean(formik.errors.mobile)}
                    >
                        Generate OTP
                    </Button>
                </Box>
            </Box>
        </form>
    )
}

export default MobileVerification
