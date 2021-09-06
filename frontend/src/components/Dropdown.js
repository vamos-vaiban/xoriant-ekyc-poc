import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: "100%",
        marginBottom: '5%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Dropdown({ onChangeListner, name, data=[], label, prevData, MenuProps, error, helperText, objKey },props) {
    const classes = useStyles();
    const [selectedData, setSelectedData] = React.useState();

    const handleChange = (event) => {
        setSelectedData(event.target.value);
        onChangeListner(event.target.value)
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id={label}>{label}</InputLabel>
            <Select
                name={name}
                placeholder={name}
                onChange={handleChange}
                labelId="demo-simple-select-outlined-label"
                value={selectedData}
                defaultValue={prevData}
                // input={selectedData}
                MenuProps={MenuProps}
                fullWidth
                error={error}
                helperText={helperText}
                id="demo-simple-select-outlined"
                 >
                {
                    data && data.map((item, index) => {
                        let dataToShow = item[objKey];
                        return (
                            <MenuItem key={dataToShow} value={dataToShow}>
                                <ListItemText primary={dataToShow} />
                            </MenuItem>
                        )
                    })
                }

               
            </Select>
        </FormControl>
    );
}
