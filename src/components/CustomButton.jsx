import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var positionInBottom = {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 0,
    left: 0,
    backgroundColor: 'red',
    zIndex: 100,
}

export default class CustomButton extends React.Component{

  render(){
    return(
      <MuiThemeProvider>
        <FlatButton
          className="btn btn-default"
          style = {{positionInBottom}}
          onClick={this.props.handleClick}>
          {this.props.name}
        
        </FlatButton>
      </MuiThemeProvider>
    );
  }
}
