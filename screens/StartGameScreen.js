import { useState } from "react";
import { TextInput, View, StyleSheet, Alert , Text,SafeAreaView, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView} from "react-native";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
function StartGameScreen({onPickedNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');

    const {width , height} = useWindowDimensions();
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

    const marginTopDistance = height < 450 ? 30 : 100;

    return(
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
        <SafeAreaView style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
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
        </KeyboardAvoidingView>
        </ScrollView>
    )
}
export default  StartGameScreen;

const deviceHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    screen :{
        flex:1,
    },
    rootContainer:{
        flex:1,
        //marginTop: deviceHeight< 450 ? 30 : 100,
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