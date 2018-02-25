import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import TrackColumn from './TrackColumn';

const NUM_COLS = 16;

const style = {
  height: 135,
  width: '320',
  margin: 40,
  marginLeft: '25%',
  marginRight: '25%',
  textAlign: 'center',
  display: 'inline-block',
  padding: 15
};

export default class Track extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      // Create listener for track id found in props.
    }

    render() {
        const cols = [];
        for (let i = 1; i <= NUM_COLS; i++) {
          cols.push(<TrackColumn trackNum={this.props.trackNum}
                      colNum={i}
                    />);
        }
        return (
          <MuiThemeProvider>
            <Paper style={style} zDepth={3}>
              { cols }
            </Paper>
          </MuiThemeProvider>);
    }
}
