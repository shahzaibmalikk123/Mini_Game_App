import {View, Text ,StyleSheet, SafeAreaView, Alert,FlatList} from "react-native";
import Title from "../components/Title";
import { useState , useEffect} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from '@expo/vector-icons';
import GuessLoginItem from "../components/game/GuessLoginItem";
function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    } else{
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({userNumber, onGameOver}){
  
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);


    useEffect(() => {
        if (currentGuess === userNumber){
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(()=> {
        minBoundary=1;
        maxBoundary=100;

    },[])
    function nextGuessHandler(direction){
        if(
            (direction === 'lower' && currentGuess < userNumber) || 
            (direction === 'greater' && currentGuess >userNumber)
        
        ){
            Alert.alert("Dont lie!", "You know that this is wrong...", [{ text: 'Sorry!', style :'cancel'}] );
            return;
        }
        if(direction === 'lower'){
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess + 1 ;
        }
        console.log(minBoundary, maxBoundary);
        const newRndNumber= generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundListLength = guessRounds.length;
    
    return(
        <View style={styles.screen}> 
            <Title>Opponent's Guess</Title> 
            <NumberContainer>{currentGuess }</NumberContainer>
            <Card>
                <InstructionText>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white"/>
                    </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
                        <Ionicons name="md-add" size={24} color="white"/>
                    </PrimaryButton>
                    </View>
                </View>
                
            </Card>
            <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text>)} */}
                <FlatList 
                    data={guessRounds} 
                    renderItem={(itemData) => <GuessLoginItem roundNumber={guessRoundListLength - itemData.index} 
                    guess={itemData.item} 
                    />}
                    keyExtractor={(item) => item}

                />

            </View>
        </View>
    )
}
 export default GameScreen;

 const styles= StyleSheet.create({
    screen:{
        flex : 1,
        padding : 24 , 
    },
    buttonContainer:{
        flex:1,
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    listContainer:{
        flex:1,
        padding: 16,

    }

    
 })