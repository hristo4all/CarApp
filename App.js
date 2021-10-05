import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './components/Nav';


//====================================================================================================
//====================================================================================================
export default function App() {
  return (
    <NavigationContainer>
    <StatusBar backgroundColor="#36393E" barStyle="light-content" />
      <Nav />
    </NavigationContainer>
  );
}