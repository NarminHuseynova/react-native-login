import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../screens/SignIn';
import Home from '../screens/Home'
import Register from '../screens/Register/Register';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen options={{headerShown: false}} name='SignIn' component={SignIn} />
        <Stack.Screen options={{headerShown: true}} name='Register' component={Register} />
        <Stack.Screen options={{headerShown: true}} name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
