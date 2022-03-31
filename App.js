import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import {Home} from './src/screens/home/index-home.js';
import {Flat} from './src/screens/flatlist/index.js'
import {Login} from './src/screens/login/index.js'

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    // <Login />
    // <Home />
    // <Flat />

    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="flat" component={Flat} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}


