import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <Text>Open up App.js to start working on your app!</Text>
      <Button title='Klick' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box1: {
    backgroundColor: 'cyan',
    width: '100%',
    height: '20%'
  }
});
