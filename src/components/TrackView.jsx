import React from 'react';
import Track from './Track';

// const styling = {
//
// }

export default class TrackView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tracks: ['tmp'] // This will be populated once component mounts.
      };
    }

    componentDidMount() {
      // Logic to fetch information from firebase here! In particular,
      // we want to make tracks a list of paths to firebase which we can
      // listen to.
    }

    render() {
        const trackComps = [];
        this.state.tracks.forEach((trackId) => {
          trackComps.push(<Track trackId={trackId}/>);
        });
        return (
          <div>
            { trackComps }
          </div>);
    }
}
