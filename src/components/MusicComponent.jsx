import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
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

export default class MusicComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: this.props.isOn,
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(onClickEvent) {
    this.setState(() => {
      return {isOn: !(this.state.isOn)}
    });
  }

  render() {
    const color = this.state.isOn ? 'green' : 'blue';
    console.log(this.state.isOn);
    return (
      <FloatingActionButton backgroundColor={color}
          onClick={() => this.onClick()}/>
    );
  }
}
