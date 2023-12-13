import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, View } from 'react-native';

import { NativeBaseProvider, Text, Box } from "native-base";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

import LoginScreen from "./src/screens/Login";
import SelectFactory from "./src/screens/SelectFactory";

export default function App() {
  let [fontsLoaded] = useFonts({
    SemiBold: Quicksand_600SemiBold,
    Bold: Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider>
        <LoginScreen />
        {/* <SelectFactory /> */}
      </NativeBaseProvider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
