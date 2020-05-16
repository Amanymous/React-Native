import React,{useState} from 'react';
import Header from './components/header';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './screen/screen';
import Game from './screen/Game';
import GameOver from './screen/GameOver';

export default function App() {

  const [userNumber,setUserNumber]=useState();
  const [guessRound,setGuessRound]=useState(0);

  const gameOverHandler=numOfRounds=>{
    setGuessRound(numOfRounds);
  }
  const StartGameHandler=(selectedNumber)=>{
    setUserNumber(selectedNumber)
    setGuessRound(0);
  }

  let content =<Game onStartGame={StartGameHandler} onGameOver={gameOverHandler}/>
  if(userNumber && guessRound<=0){
    content=<GameScreen userChoice={userNumber}/>
  }else if(guessRound > 0){
    content=<GameOver/>
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
