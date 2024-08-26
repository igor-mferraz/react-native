import { Link, router, Stack, useNavigation } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen(){

    return(
        <View style={styles.container}>
            <Text>Tela 3 - Home</Text>

            <Link href="/tela4">Redirect Tela 4</Link>
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