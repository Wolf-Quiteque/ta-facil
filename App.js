import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";

import BottomTabNavigator from "./src/navigation/TabNavigator";
import AppRoute from "./src/navigation/Navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider, extendTheme } from "native-base";
import axios from "axios";

import { MainStackNavigator } from "./src/navigation/StackNavigator";

axios.defaults.baseURL = "https://tafacil-api.herokuapp.com/api/";
// axios.defaults.baseURL = "http://localhost:8800/api/";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
const customTheme = extendTheme({ config });

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor="#54cbff" barStyle="dark-content" />
        <NativeBaseProvider theme={customTheme}>
          <AppRoute />
        </NativeBaseProvider>
      </NavigationContainer>
    </>
  );
}
