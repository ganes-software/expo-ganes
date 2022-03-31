import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import {styles} from './style-home.js'

import osCria from '../../../assets/tavio_careca.png';
import ganes from '../../../assets/logo.png';
import nomeMarca from '../../../assets/nomeMarca.png'


export function Home() {
  return (
      <View>
      
        <View style={styles.containerLogo}>
          <Image source={nomeMarca} style={styles.nomeMarca} />
          <Image source={ganes} style={styles.logo} />
          {/* <Image source={osCria} style={{width: '500px', height:'500px', borderRadius: '50%'}}/> */}
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
