import React from 'react';

import NavBar from './NavBar';

export default class App extends React.Component {
    render() {
        return (
          <div>
            <NavBar />
            <div style={{textAlign: 'center'}}>
                <h1>Hello World</h1>
            </div>
          </div>);
    }
}
