import * as React from 'react';
import { Button, View, Image, StyleSheet,Text, TextInput } from 'react-native';


import {styles} from './style-login';
import ganes from '../../../assets/logo.png';

export function Login({ navigation }) {  
  return (

    <View style={styles.container}>
      <Image source={ganes} style={styles.logo} />  
      <Text style={styles.login}>LOGIN</Text>
         
      <TextInput 
      style={styles.input1}
      placeholder="Digite seu Email"
      />
      
      <TextInput
      style={styles.input2}
      placeholder="Digite sua Senha"
      />

        <Button 
        color="#a80601"
        onPress={() => navigation.navigate('Home')}
        title="Logar"
        style={styles.button}
        />
      </View>
 
  );
}
