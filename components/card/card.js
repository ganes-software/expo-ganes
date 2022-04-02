import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

export function Card(props) {
  return (
    <View style={styles.card}>
    <Text style={styles.card_title}> {props.title} </Text>
    {props.children}
    
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    width: '70%',
    padding:'15px', 
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#939393',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#FFF',
    textAlign: 'center',

  },
  card_title:{
    fontWeight: 'bold',
    fontSize: 20
  }


  
});