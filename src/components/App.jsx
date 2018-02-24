import React from 'react';
import NewTrackButton from './NewTrackButton';

import NavBar from './NavBar';

export default class App extends React.Component {
    render() {
        return (
          <div>
            <NavBar />
            <div style={{textAlign: 'center'}}>
                <NewTrackButton />
                <h1>Hello World</h1>
            </div>
          </div>);
    }
}
  
