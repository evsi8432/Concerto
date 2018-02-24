import React from 'react';
import NewTrackButton from './NewTrackButton';

export default class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <NewTrackButton />
                <h1>Hello World</h1>
            </div>);
    }
}
