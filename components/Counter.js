import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// Eigene Komponente namens Counter
// Komponente bekommt zur Laufzeit die props übergeben
// Wird standardmäßig exportiert, um in anderen Komponenten verwendet werden zu können
export default function Counter(props) {
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
    counter: {
      color: 'darkgrey',
      fontSize: 82
    }
  });