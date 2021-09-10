import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './components/Nav';

//====================================================================================================

//====================================================================================================
export default function App() {
  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  );
}