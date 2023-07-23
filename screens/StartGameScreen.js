import { useState } from "react";
import { TextInput, View, StyleSheet, Alert , Text,SafeAreaView} from "react-native";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
function StartGameScreen({onPickedNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);

    }

    function resetInputHandler(){
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ){
            Alert.alert('Invalid Number',"Number has to be a number between 1 and 99.", [{text : 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        onPickedNumber(chosenNumber );
    }

    return(
        <SafeAreaView style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card >
                <InstructionText>Enterr a Number</InstructionText>
                <TextInput style={styles.numberInput} 
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </SafeAreaView>
    )
}
export default  StartGameScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop: 100,
        alignItems: 'center'
    },
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:24,
        marginTop:36,
        padding:16,
        backgroundColor: Colors.primary800,
        borderRadius:8,
        elevation:4,
        shadowColor:'black',
        shadowOffset : {width: 0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.25 
    },
    numberInput:{
        height:50,
        fontSize:32,
        width:50,
        borderBottomColor: "#ddb52f",
        borderBottomWidth:2,
        color :'#ddb52f',
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center'
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex: 1,
    },
    instructionText:{
        color: Colors.accent500 ,
        fontSize: 24
    }
});  