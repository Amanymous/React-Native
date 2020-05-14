import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


const GameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View  style={styles.input}>
        <TextInput/>
        <View style={styles.button}>
            <Button title="Reset" onPress={()=>{}}/>
            <Button title="Confirm" onPress={()=>{}}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title:{
      fontSize:20,
      marginVertical:10
  },
  button:{
     flexDirection:'row',
     width:"100%",
     justifyContent:"space-between",
     paddingHorizontal:15,
  },
  input:{
    width:300,
    maxWidth:"80%",
    alignItems:"center",
    borderColor:"black"

  }
});

export default GameScreen;