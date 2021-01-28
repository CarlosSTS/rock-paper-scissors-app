import React from 'react';
import {  NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './pages/Profile'; 

const Stack = createStackNavigator();

function Routes(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerShown: true,
        headerBackTitleVisible: false,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#3d9be9',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 19
        },
      }}>

        <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          title: 'Escolha entre Pedra, Papel e Tesoura',
        }}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;