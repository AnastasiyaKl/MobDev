import React, {Component} from 'react';
import { StyleSheet, View, Platform, Button, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './screens/MainScreen';
import SavedDataList from './screens/SavedDataList';
import ApiKeys from './constants/APIKeys';
import * as firebase from 'firebase';


const AppNavigator = createStackNavigator(
  {
    MainScreen: {screen: MainScreen},
    Data: {screen: SavedDataList},
  },
    {
      initialRouteName: "MainScreen"
    });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoadingComplete: false,
    };

    if(!firebase.apps.length){
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  };


  render() {
    return (
        <AppContainer/>
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
