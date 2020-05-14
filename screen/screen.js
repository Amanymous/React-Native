import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


const GameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Start a New Game!</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  }
});

export default GameScreen;