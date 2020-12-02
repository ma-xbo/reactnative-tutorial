import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Random() {
    const maxValue = 99;
    const [counterValue, setCounterValue] = useState(getRandomInt(maxValue))

    return (
        <View style={styles.wrapper}>
            <Text style={styles.counter}>{counterValue}</Text>
            <Button title='Gernerate Random' onPress={() => setCounterValue(getRandomInt(maxValue))} />
        </View>
    );
}

// Gernerieren einer Zufallszahl
// Math.random --> Zufallszahl zwischen 0 und <1
// Math.floor --> 
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#f25e65',
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