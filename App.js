import * as React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {Login} from './src/screens/login/index-login';
import {Home} from './src/screens/home/index-home';
import {Flat} from './src/screens/flatlist/index-flat';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Flat" component={Flat}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


