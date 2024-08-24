import { Link} from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Screen(){


    return(
        <View style={styles.container}>

            <Text>Termos de uso</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap: 8
    }
})