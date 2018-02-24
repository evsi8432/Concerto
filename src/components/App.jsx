import React from 'react';
import CustomButton from './CustomButton';

import NavBar from './NavBar';
import TrackView from './TrackView';

export default class App extends React.Component {
    render() {
        return (
          <div>
            <NavBar />
            <TrackView />
            <div style={{textAlign: 'center'}}>
                <CustomButton name="New Track"/>
                <CustomButton name="Play Concerto"/>
            </div>
          </div>);
    }
}
