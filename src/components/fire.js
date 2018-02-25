import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyAyRJOXIWgun7chnoWgitEKOS61c-caMvo",
    authDomain: "concerto-firebase.firebaseapp.com",
    databaseURL: "https://concerto-firebase.firebaseio.com",
    projectId: "concerto-firebase",
    storageBucket: "concerto-firebase.appspot.com",
    messagingSenderId: "559746172093"
};
var fire = firebase.initializeApp(config);

export const setMusicComponent = (trackNum, colNum, compNum, toggled) => {
  const compPath = '/track' + trackNum + '/col' + colNum + '/comp' + compNum;
  fire.database().ref(`${compPath}`).set(toggled);
}

export default fire;
