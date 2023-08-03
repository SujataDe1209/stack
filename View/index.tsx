import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';
import Singup from './Singup';

const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Singup" component={Singup} />
         
         
       </Stack.Navigator>
  )
}

export default Main