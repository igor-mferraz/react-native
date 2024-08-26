import { Stack } from "expo-router";

export default function HomeLayout(){
    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="tela3"/>
            <Stack.Screen name="tela4"/>
        </Stack>
    )
}