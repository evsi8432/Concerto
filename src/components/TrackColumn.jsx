import React from 'react';

import MusicComponent from './MusicComponent';
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
      this.radioClick = this.radioClick.bind(this);
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
      for (let i = 0; i < this.state.isOn.length; i++) {
        const clickFunc = this.radioClick(i);
        radios.push(<MusicComponent isOn={false} />);
      }
        return (
          <div style={styles.block}>
          { radios }
          </div>);
    }
}
