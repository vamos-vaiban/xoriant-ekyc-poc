import React from 'react';
import PropTypes from 'prop-types';
import { RadioButtonChecked, RadioButtonUnchecked } from '@material-ui/icons';

import { withStyles, Typography,List, ListItem, ListItemText, ListItemIcon, useTheme } from '@material-ui/core';
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  vertical: {
    borderLeft: '2px solid lightgrey',
    height: '3em',
    marginLeft: '2.3em',
  }
});

function Slider(props) {
  const { classes } = props;
  const theme = useTheme()
  const length = props.data && props.data.length
  return (
    <div className={classes.root}>
      <List>
        {
          props.data && props.data.map((step, index) => (
            <React.Fragment key={index}>
              <ListItem onClick={() => { }}>
                <ListItemIcon>
                  {step.status === 'complete' ? <RadioButtonChecked style={{fill:theme.palette.primary.contrastText}} /> : <RadioButtonUnchecked />}
                </ListItemIcon>
                <ListItemText  disableTypography
        primary={<Typography variant="h6"  >{step.label}</Typography>} />

              </ListItem>

              {length > index + 1 ? <div className={classes.vertical}></div> : null}
            </React.Fragment>
          ))
        }

      </List>
    </div>
  );
}

Slider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Slider);
