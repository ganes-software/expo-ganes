import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import osCria from './assets/fotoDosCria.jpg';
import ganes from './assets/logo.png';
import nomeMarca from './assets/nomeMarca.png'

// https://docs.expo.dev/ -->documentação do expo
export default function App() {
  return (
    <View style={styles.container}>
        <Image source={nomeMarca} style={{width: '400px', height: '100px',}} />
        <Text>Missão</Text>
        <Text>Visão</Text>
        <Text>Valores</Text>
        <StatusBar style="auto" />
      </View>

        // <View style={styles.containerLogo}>
        //   <Image source={ganes} style={styles.logo} />
        // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // containerLogo: {
  //   justifyContent:'center',
  //   alignItems:'center',
  // },

  logo:{
    width:200,
    height: 200
  }
});
