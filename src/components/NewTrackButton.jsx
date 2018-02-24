import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

class NewTrackButton extends React.component{

  constructor(props){
    super(props);
    this.state = {
      label: "Create New Track"
    };
  }

  render(){
    return(
      <RaisedButton
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}>
        
        {this.state.label}
        
      </RaisedButton>
    );
  }
}
