import { Link, router, Stack, useNavigation } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen(){

    return(
        <View style={styles.container}>
            <Text>Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 36,
        borderRadius: 12
    },
    btn_text:{
        color: '#fff'
    },
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap: 8
    }
})