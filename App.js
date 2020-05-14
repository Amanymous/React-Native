import React from 'react';
import Header from './components/header';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
