import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import {styles} from './style.js'
import osCria from '../../../assets/fotoDosCria.jpg';
import ganes from '../../../assets/logo.png';
import nomeMarca from '../../../assets/nomeMarca.png'


export function Home() {
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
