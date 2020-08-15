import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { CSS } from './assets/css/CSS';
import Page from './views/Page';

export default function App() {
  const props = {
    empresa: 'TrackingON',
    name: 'Matheus'
  };

  return (
    <View style={CSS.container}>
      <Text style={CSS.textPage}>Bem-vindo!</Text>
      <Page {...props} />
      {/* <Page empresa='Programação'/>
      <Page empresa='Development'/> */}
      <StatusBar style="auto" />
    </View>
  );
}