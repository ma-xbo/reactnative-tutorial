import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
}

// Eigene Komponente namens Counter
function Counter() {
  // Liefert JSX Code zurück -> Kann direkt aufgerufen werden
  return (
    <View>
      <Text style={styles.counter}>{1}</Text>
      <Button title='Klick' onPress={() => alert('clicked')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  counter: {
    color: 'darkgrey',
    fontSize: 82
  }
});
