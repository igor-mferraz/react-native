import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen(){

    const handleClick = () => {
        router.navigate('/about');
    }


    return(
        <View style={styles.container}>
            <Text>
                Oopa
            </Text>
            <Link href="/about" asChild>
                <Pressable style={styles.btn}>
                    <Text style={styles.btn_text}>Sobre - Link</Text>
                </Pressable>
            </Link>

            
            <Pressable onPress={handleClick} style={styles.btn}>
                <Text style={styles.btn_text}>Sobre - fnc</Text>
            </Pressable>
            
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