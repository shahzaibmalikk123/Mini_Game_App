import { View , Text , StyleSheet} from "react-native";
import Colors from "../../constants/colors";
function GuessLoginItem ({roundNumber, guess}){
    return(

        <View style={styles.listItems}>
            <Text>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent Guess : {guess}</Text>
        </View>
    )

}
export default GuessLoginItem;

const styles = StyleSheet.create({
    listItems:{
        borderColor: Colors.primary800,
        borderWidth:1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        shadowColor: 'black',
        shadowOffset : {width: 0, height:0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,

    },
    itemText:{
        fontFamily: 'open-sans',
    }
})