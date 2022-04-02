import * as React from 'react';
import { Button, View, Image, StyleSheet,Text, TextInput } from 'react-native';


import {styles} from './style-login.js';


export function Login({ navigation }) {  
  return (
    
    <View style={styles.sim} >
    <Text style={styles.rikka}>{"LOGIN"}</Text>

                
    <TextInput
    style={{height: 40, width: 200, justifyContent: 'center' , color: '#000080'}}
    placeholder="Digite seu Email"
    />
    
    <TextInput
    style={{height: 40, width: 200, justifyContent: 'center' , color: '#000080'}}
    placeholder="Digite sua Senha"
    />

      <Button 
       onPress={() => navigation.navigate('Home')}
       title="Logar"
      />
    </View>
    
  );
}
