import React from "react";
import { Text, StyleSheet, View } from "react-native";

//Screen Componenet
const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
    </View>
  );
};

//Styles for the component
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;
