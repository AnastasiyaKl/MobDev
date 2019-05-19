import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CalculatorScreen from './Screens/CalculatorScreen.js';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <CalculatorScreen/>
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
