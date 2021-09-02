import React from 'react';
import PropTypes from 'prop-types';
import { RadioButtonChecked, RadioButtonUnchecked } from '@material-ui/icons';

import { withStyles, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
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
  const length = props.data && props.data.length
  return (
    <div className={classes.root}>
      <List>
        {
          props.data && props.data.map((step, index) => (
            <>
              <ListItem onClick={() => { }}>
                <ListItemIcon>
                  {step.status === 'complete' ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
                </ListItemIcon>
                <ListItemText primary={step.label} />

              </ListItem>

              {length > index + 1 ? <div className={classes.vertical}></div> : null}
            </>
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
