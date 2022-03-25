import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import osCria from './assets/fotoDosCria.jpg';
import ganes from './assets/logo.png';
import nomeMarca from './assets/nomeMarca.png'

// https://docs.expo.dev/ -->documentação do expo
export default function App() {
  return (
      <View>
        <View style={styles.containerLogo}>
          <Image source={nomeMarca} style={styles.nomeMarca} />
          <Image source={ganes} style={styles.logo} />
        </View>

        <View style={styles.container}>
          <Text>Missão</Text>
          <Text>Visão</Text>
          <Text>Valores</Text>
          <StatusBar style="auto" />
        </View>
      </View>

        
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLogo: {
    justifyContent:'center',
    flexDirection: 'row'
  },

  nomeMarca: {
    width: '250px',
    height: '120px',
  },

  logo:{
    width: '100px',
    height: '100px',
    marginTop: '10px',
    marginLeft: '5px'
  }
});
