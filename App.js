import React,{useState} from 'react';
import Header from './components/header';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './screen/screen';
import Game from './screen/Game';
export default function App() {
  const [userNumber,setUserNumber]=useState();

  const StartGameHandler=(selectedNumber)=>{
    setUserNumber(selectedNumber)
  }

  let content =<Game onStartGame={StartGameHandler}/>
  if(userNumber){
    content=<GameScreen userChoice={userNumber}/>
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
