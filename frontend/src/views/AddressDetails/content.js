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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
          </Typography>
        </Box>
  );
}
