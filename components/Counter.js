import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// Eigene Komponente namens Counter
// Komponente bekommt zur Laufzeit die props übergeben
// Wird standardmäßig exportiert, um in anderen Komponenten verwendet werden zu können
export default function Counter(props) {
    const { startValue } = props; // Destrukturierung des Objekts props (über Name des Props)
    const [counterValue, setCounterValue] = useState(startValue);

    // Liefert JSX Code zurück -> Kann direkt aufgerufen werden
    return (
        <View style={styles.wrapper}>
            <Text style={styles.counter}>{counterValue}</Text>
            <Button title='Counter +1' onPress={() => setCounterValue(counterValue + 1)} />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#9affff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        margin: 5,
        borderRadius: 10

    },
    counter: {
        color: '#261926',
        fontSize: 82
    }
});