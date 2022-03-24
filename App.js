import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import osCria from './assets/fotoDosCria.jpg';
import ganes from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image source={osCria} style={styles.crias} /> */}
      <Image source={ganes} style={styles.crias} />
      <Text>Missão</Text>
      <Text>Visão</Text>
      <Text>Valores</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width:50,
    height:50,
    marginLeft: 40,
  },
  crias:{
    width:200,
    height:200
  }
});
