import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
    render() {
        return (
          <div>
          <MuiThemeProvider>
            <AppBar
              title="Concerto"
            />
          </MuiThemeProvider>
            <div style={{textAlign: 'center'}}>
                <h1>Hello World</h1>
            </div>
          </div>);
    }
}
