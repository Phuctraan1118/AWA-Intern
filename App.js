import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, View } from 'react-native';

import { NativeBaseProvider, Text, Box } from "native-base";



import LoginScreen from "./src/screens/Login";

export default function App() {
  return (
    <NativeBaseProvider>
      <LoginScreen />
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
