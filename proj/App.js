import React from 'react';
import CalculatorScreen from '../MobDev-lab-1/Screens/CalculatorScreen';
import {Button, Text, View} from "react-native";

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>
            calculator
          </Text>
          <View styles={styles.operations}>
            <Button styles={styles.operation} title='+'/>
            <Button styles={styles.operation} title='-'/>
            <Button styles={styles.operation} title='*'/>
            <Button styles={styles.operation} title='/'/>
            <Button styles={styles.operation} title='Clear'/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  operation: {
    width: '90px',
    height: '40px',
    backgroundColor: 'blue'
  },
  operations: {
    backgroundColor: 'lightblue',
  }
});
