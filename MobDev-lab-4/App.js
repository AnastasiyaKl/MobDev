import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Video from './components/Video';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lab 4</Text>
        <Video />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
