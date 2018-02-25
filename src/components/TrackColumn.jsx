import React from 'react';

import MusicComponent from './MusicComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const NUM_COMPS = 3;

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
    }

    render() {
      const radios = [];
      for (let i = 1; i <= NUM_COMPS; i++) {
        radios.push(<MusicComponent taskNum={this.props.trackNum}
                      colNum={this.props.colNum}
                      compNum={i}
                      isOn={false} />);
      }
        return (
          <div style={styles.block}>
          { radios }
          </div>);
    }
}
