import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class NavBar extends React.Component {
    render() {
        return (
          <MuiThemeProvider>
            <AppBar
              title="Concerto"
            />
          </MuiThemeProvider>);
    }
}
