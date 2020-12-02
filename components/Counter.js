import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Counter(props) {
    // Destrukturierung des Objekts props (über Name des Props)
    const { startValue } = props;
    //Destrukturierung eines Arrays (useState liefert ein Array mit zwei Elmenten zurück)
    const [counterValue, setCounterValue] = useState(startValue);

    // Liefert JSX Code zurück -> Kann direkt aufgerufen werden
    return (
        <View style={styles.wrapper} >
            <Text style={styles.counter}>{counterValue}</Text>
            <Button title='Counter +1' onPress={() => setCounterValue(counterValue + 1)} />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#7f66ff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        margin: 5,
        borderRadius: 10

    },
    counter: {
        color: '#fff',
        fontSize: 82
    }
});