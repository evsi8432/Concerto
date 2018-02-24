import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import TrackColumn from './TrackColumn';


const style = {
  height: 125,
  width: '90vw',
  margin: 40,
  textAlign: 'center',
  display: 'inline-block',
};

export default class Track extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      // Create listener for track id found in props.
    }

    render() {
        return (
          <MuiThemeProvider>
            <Paper style={style} zDepth={3}>
              <TrackColumn/>
              <TrackColumn/>
              <TrackColumn/>
              <TrackColumn/>
              <TrackColumn/>
            </Paper>
          </MuiThemeProvider>);
    }
}
