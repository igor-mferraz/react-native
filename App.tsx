import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const handleClick = () => {
    alert('Parabesn')
  }


  return (
    <View style={styles.container}>
      <Text>Igor</Text>
    
      <Pressable onPress={handleClick} style={styles.btn}>
        <Text style={styles.text_btn}>Clique aqui</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  btn:{
    justifyContent: 'center',
    alignItems:'center',
    width:200,
    height:40,
    borderRadius: 20,
    backgroundColor: '#000'
  },
  text_btn:{
    color:'#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
