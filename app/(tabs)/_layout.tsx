import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from "expo-router";

export default function TabLayout(){
    return(
        <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: 'green'}}>
            <Tabs.Screen
                name="(home)"
                options={{
                    title:'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='home' color={color}/>
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title:'Sobre',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='user' color={color}/>
                }}
            />

        </Tabs>
    )
}