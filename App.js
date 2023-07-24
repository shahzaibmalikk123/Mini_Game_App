import { useState } from 'react';
import { StyleSheet , ImageBackground,View, SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import { useFonts } from 'expo-font';
import Colors from './constants/colors';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const [userNumber , setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);


  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
   
  if (!fontsLoaded){
    return <AppLoading/>

  }


  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);  
  }
  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  }
  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);  

  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if(gameIsOver && userNumber){
    screen = <GameOver userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
  }
  

  return (
    <>
    <StatusBar style='dark'/>
    <View colors={["#ddb52f", "#4e0329"]} style={styles.rootColor}>
      <ImageBackground source={require("./assets/images/dices2.jpg")} 
      resizeMode='cover'
      style={styles.rootColor}
      imageStyle={styles.backgroundImage}
      >
        
          {screen}
        
      </ImageBackground>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootColor:{
    backgroundColor:"#ddb52f",
    flex:1,
  },
  backgroundImage:{
    opacity : 0.45,
  }
});
 