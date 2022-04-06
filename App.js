import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BottomTabNavigator from "./navigation/TabNavigator";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import axios from "axios";

import { MainStackNavigator } from "./navigation/StackNavigator";

// axios.defaults.baseURL = "https://emainvest.herokuapp.com/api";
axios.defaults.baseURL = "http://localhost:8800/api/";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <NativeBaseProvider>
        <StatusBar backgroundColor="#54cbff" barStyle="dark-content" />
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}
