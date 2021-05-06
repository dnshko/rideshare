import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient'
import LandingScrn from './Screens/LandingScrn'
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
      <LinearGradient colors={['#46D5C7','#6D337E']} style={styles.screen}>
          <LandingScrn/>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%"
  }
})