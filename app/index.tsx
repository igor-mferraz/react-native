import { Link, router, Stack, useNavigation } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen(){

    const navigation = useNavigation()

    const handleClick = () => {
        router.navigate('/about');
    }

    const handleHeader = () => {
        navigation.setOptions({ headerShown: false })
    }


    return(
        <View style={styles.container}>
            <Stack.Screen options={{
                title: 'Inicio',
                headerRight: ()=> <Button title="Adicionar"/>
            }}/>
            <Text>Opa</Text>

            <Button onPress={handleHeader} title="Ocultar"/>

            <Link href="/about" asChild>
                <Pressable style={styles.btn}>
                    <Text style={styles.btn_text}>Sobre - Link</Text>
                </Pressable>
            </Link>

            
            <Pressable onPress={handleClick} style={styles.btn}>
                <Text style={styles.btn_text}>Sobre - fnc</Text>
            </Pressable>

            <Link href="/termos">Termos de uso</Link>
            <Link href="/auth/login">Login</Link>
            

            <Link href="/profile/1">Perfil 1</Link>
            <Link href="/profile/2">Perfil 2</Link>
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