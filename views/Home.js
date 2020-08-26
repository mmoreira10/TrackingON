import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { CSS } from '../assets/css/CSS';

export default function Home({ navigation }) {

  return (
    <View style={CSS.container2}>
      <TouchableOpacity style={CSS.button__home} onPress={() => navigation.navigate('Login')} >
        <Image style={CSS.image__login} source={require('../assets/img/login.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Rastreio')} >
        <Image style={CSS.image__rastreio} source={require('../assets/img/rastreio.png')} />
      </TouchableOpacity>
    </View>
  );
}