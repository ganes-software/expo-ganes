import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {Login} from './src/screens/login/index-login.js';
import {Home} from './src/screens/home/index-home.js';
import {Flat} from './src/screens/flatlist/index-flat.js';


const Drawer = createDrawerNavigator();
 export function MyStack(){
  return(
  <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Flat" component={Flat} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    // <Login />
    <Home />
    // <Flat /> 

    // <NavigationContainer>
	  //   <MyStack />
    // </NavigationContainer>
  );
}


