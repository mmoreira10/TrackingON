import React, { useState, useEffect } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { CSS } from './assets/css/CSS';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, Rastreio } from './views/Index';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Bem-vindo",
            headerStyle: {backgroundColor: "#f9b233"},
            headerTintColor: "#333",
            headerTitleStyle: { fontWeight: "bold", alignSelf: "center" }
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}