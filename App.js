import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import Random from './components/Random';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter startValue={0} />
      <Counter startValue={10} />
      <Counter startValue={100} />
      <Random />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center'
  },
});