import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import ApiKeys from './constants/APIKeys';
import * as firebase from 'firebase';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoadingComplete: false,
    };

    if(!firebase.apps.length){
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MainScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: 'lightgrey',
  },
});
