import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
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