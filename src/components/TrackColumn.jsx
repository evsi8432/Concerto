import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  block: {
    maxWidth: 250,
    display: 'inline-block',
  },
  radioButton: {
    marginBottom: 16,
    width: 20,
    height: 20,
  },
};

export default class TrackColumn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOn: ['not_light', 'not_light', 'not_light'],
      };
    }

    componentDidMount() {
      // Create listener for track id found in props.
    }

    radioClick(radioNum) {
      return (radioNum) => {
        console.log(this.state.isOn[radioNum]);
        if (this.state.isOn[radioNum] == 'light') {
          this.state.isOn[radioNum] = 'not_light';
        } else {
          this.state.isOn[radioNum] = 'light';
        }
      }
    }

    render() {
      const radios = [];
      for (var i = 0; i < this.state.isOn.length; i++) {
        radios.push(<RadioButton
                        value={this.state.isOn[i]}
                        style={styles.radioButton}
                        onClick={this.radioClick(i)}
                      />)
      }
        return (
          <MuiThemeProvider >
            <div style={styles.block}>
            { radios }
            </div>
          </MuiThemeProvider>);
    }
}
