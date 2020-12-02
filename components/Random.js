import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Random() {
    let startValue = getRandomInt(99);

    return (
        <View>
            <Text style={styles.counter}>{startValue}</Text>
            <Button title='Gernerate Random' onPress={() => alert('clicked')} />
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
    counter: {
        color: 'lightgrey',
        fontSize: 82
    }
});