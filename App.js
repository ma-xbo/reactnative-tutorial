import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter startValue='0' />
      <Counter startValue='10' />
      <Counter startValue='100' />
    </View>
  );
}

// Eigene Komponente namens Counter, bekommt zur Laufzeit die props übergeben 
function Counter(props) {
  const startValue = props.startValue; // Zugriff auf die props

  // Liefert JSX Code zurück -> Kann direkt aufgerufen werden
  return (
    <View>
      <Text style={styles.counter}>{startValue}</Text>
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