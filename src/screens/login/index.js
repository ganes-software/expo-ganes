import * as React from 'react';
import { Button, View, Image, StyleSheet,Text, TextInput } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, ArchitectsDaughter_400Regular } from '@expo-google-fonts/architects-daughter';

import {styles} from '.style.js'

export function HomeScreen({navigation}) {
   let [fontsLoaded] = useFonts({
    ArchitectsDaughter_400Regular,
  });

  return (
    
    <View style={styles.sim} >
    <Text style={styles.rikka}>{"LOGIN"}</Text>
      <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
  
              
          <Image style={styles.logo} source={require('./assets/rikka-takanashi-takanashi-rikka.gif')}  />
                <Text>{"\n"}</Text>
                
    <TextInput
    style={{height: 40, width: 200, justifyContent: 'center' , color: '#000080'}}
    placeholder="Digite seu Email"
    />
    
    <TextInput
    style={{height: 40, width: 200, justifyContent: 'center' , color: '#000080'}}
    placeholder="Digite sua Senha"
    />

                <Text>{"\n"}</Text>
      <Button 
        onPress={() => navigation.navigate('Home')}
        title="Logar"
      />
    </View>
    
  );
}

function NotificationsScreen({ navigation }) {
   let [fontsLoaded] = useFonts({
    ArchitectsDaughter_400Regular,
  });



  return (
    
    <View style={styles.nao} >
          <Image style={styles.logo} source={require('./assets/mai.gif')}  />
                <Text>{"\n"}</Text>
                <Text style={styles.rikka}>{"Você foi beneficiado com o poder da dúvida , parabéns!!!"}</Text>
                <Text>{"\n"}</Text>
     
    </View>
  );
}

function SobreScreen({ navigation }) {
  return (
    <View style={styles.maybe} >
          <Image style={styles.logo} source={require('./assets/mirai.gif')}  />
                <Text>{"\n"}</Text>
                <Text style={styles.rikka}>{"Mirai Kuriyama"}</Text>
                <Text>{"\n"}</Text>
      <Button onPress={() => navigation.goBack()} title="Próximo" />
    </View>
  );
}

const styles = StyleSheet.create({
logo: {
    height: 120,
    width: 128,
  },

sim: {
    backgroundColor: '#B0E0E6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

nao: {
    backgroundColor: '#F1D3FF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  
maybe: {
    backgroundColor: '#FFDFDF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

rikka: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'ArchitectsDaughter_400Regular',
    fontSize: 25,
  }
  });

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
  
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={HomeScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Home" component={NotificationsScreen} />

      </Drawer.Navigator>

    </NavigationContainer>
  );
}
