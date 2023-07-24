import { Text,View,Image,StyleSheet,SafeAreaView, Dimensions, useWindowDimensions, ScrollView } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
function GameOver({roundsNumber, userNumber, onStartNewGame}){
    const {width, height} = useWindowDimensions();

    let imageSize = 300;

    if(width < 380){
        imageSize = 150;

    }
    if(height < 420){
        imageSize = 80;
    }
    const imageStyles = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }
    return(
        <ScrollView style={{flex:1 }} >
        <SafeAreaView style={styles.container}>
            <Title>GAME OVER!</Title>
            <View style={[styles.imgCont, imageStyles]}>
                <Image style={styles.image} source={require("../assets/images/success.png")}/>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </SafeAreaView>
        </ScrollView>
    );
}
 export default GameOver;

 //const deviceWidth = Dimensions.get('window').width;
 const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        justifyContent:'center ',
        alignItems:'center'
    },
    imgCont:{
        // width: deviceWidth < 380 ? 150 : 300,
        // height : deviceWidth < 380 ? 150 : 300,
        // borderRadius: deviceWidth < 380 ? 75 : 150 ,
        borderWidth: 3,
        borderColor : Colors.primary800,
        overflow: 'hidden',
        margin: 36,

    },
    image:{
        width:'100%',
        height:"100%"

    },
    summaryText:{
        fontFamily: 'open-sans',
        fontSize:24,
        textAlign:'center',
        marginVertical:24,
        marginBottom:24
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color: Colors.primary500
    }

 })