import React,{useState} from 'react';
import { StyleSheet, Text, View, StatusBar, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './components/Nav';


//====================================================================================================
//====================================================================================================
export default function App() {

  return (
    <NavigationContainer>
      {Platform.OS === 'ios' ? (<StatusBar backgroundColor="#36393E" barStyle="light-content" />):null}
      <Nav />
    </NavigationContainer>
  );
}