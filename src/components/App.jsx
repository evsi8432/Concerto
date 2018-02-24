import React from 'react';
import CustomButton from './CustomButton';

import NavBar from './NavBar';

export default class App extends React.Component {
    render() {
        return (
          <div>
            <NavBar />
            <div style={{textAlign: 'center'}}>
                <CustomButton name="New Track"/>
                <CustomButton name="Play Concerto"/>
            </div>
          </div>);
    }
}
  
