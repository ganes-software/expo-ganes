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
    width: '270px',
    padding:'6px', 
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#a80601',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: '#FFF',
    textAlign: 'center',
    marginBottom: '5px',

    

  },
  card_title:{
    fontWeight: 'bold',
    fontSize: 20
  }


  
});