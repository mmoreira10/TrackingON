import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Page from './views/Page';

export default function App() {
  const props = {
    empresa: 'TrackingON',
    name: 'Matheus'
  };

  return (
    <View style={styles.container}>
      <Text>Bem-vindo!</Text>
      <Page {...props} />
      {/* <Page empresa='Programação'/>
      <Page empresa='Development'/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
