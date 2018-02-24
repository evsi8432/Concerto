import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

export default class TrackColumn extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      // Create listener for track id found in props.
    }

    render() {
        return (
          <MuiThemeProvider>
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
              <RadioButton
                value="light"
                style={styles.radioButton}
              />
              <RadioButton
                value="light"
                style={styles.radioButton}
              />
              <RadioButton
                value="light"
                style={styles.radioButton}
              />
            </RadioButtonGroup>
          </MuiThemeProvider>);
    }
}
