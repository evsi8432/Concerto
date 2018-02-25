import React from 'react';
import Track from './Track';
import fire from './fire';

// const styling = {
//
// }

export default class TrackView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numTracks: 2, // This will be populated once component mounts.
    };
  }

  componentDidMount() {
    // Logic to fetch information from firebase here! In particular,
    // we want to make tracks a list of paths to firebase which we can
    // listen to.
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('track').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }

  render() {
    const trackComps = [];
    for (let i = 1; i <= this.state.numTracks; i++) {
      trackComps.push(<Track trackNum={i} />);
    }
    return (
      <div>
        {trackComps}
      </div>);
  }
}
