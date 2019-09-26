import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return <Text style = { styles.text } > Hi There </Text>;
};

//Stles for the componenet 
const styles = StyleSheet.create({
    text: {
        fontSize: 35
    }
});

export default HomeScreen;