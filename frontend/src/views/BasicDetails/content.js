import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from "./styles"
export default function Content(props) {
    const classes = useStyles(props);
  return (
        <Box className={classes.content}>
          <Box className={classes.contentText}>
            <Typography variant={"h4"} className={classes.contentText}>Need Help?</Typography>
            <Typography variant={"h4"}>See how to find PAN Number</Typography>
          </Box>
          <Typography className={classes.contentText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.          </Typography>
        </Box>
  );
}
