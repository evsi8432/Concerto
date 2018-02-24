import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class NewTrackButton extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      label: "Create New Track"
    };
  }

  render(){
    return(
      <MuiThemeProvider>
        <RaisedButton
          className="btn btn-default"
          onClick={this.props.handleClick}>
        
          {this.state.label}
        
        </RaisedButton>
      </MuiThemeProvider>
    );
  }
}
