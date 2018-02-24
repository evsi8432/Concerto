import React from 'react';

import NavBar from './NavBar';
import TrackView from './TrackView';

export default class App extends React.Component {
    render() {
        return (
          <div>
            <NavBar />
            <TrackView />
          </div>);
    }
}
