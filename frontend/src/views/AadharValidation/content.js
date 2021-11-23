import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { useStyles } from "./styles"
export default function Content(props) {
    const classes = useStyles(props);
  return (
        <Grid className={classes.content}> 
          <Box>
            <Box className={classes.contentHead}>
              <Typography className={classes.contentText}>Upload Instructions</Typography>
            </Box>
            <Typography className={classes.contentText}>
              <ul>
                <li>File must be in JPEG/JPG or PNG format</li>
                <li>File size should not be larger than 2 MB</li>
              </ul>
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.contentNote}> 
              Note : Add/Alter Instructions suggested by Dev Team 
            </Typography>
          </Box>
          </Grid>
  );
}

