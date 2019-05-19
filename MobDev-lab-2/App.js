import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './screens/MainScreen';

export default class App extends React.Component {
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
