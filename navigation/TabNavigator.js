import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SaldoScreen from "../Screens/SaldoScreen";
import AddScreen from "../Screens/AddScreen";
import ActivityScreen from "../Screens/ActivityScreen";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import ProfileScreen from "../Screens/ProfileScreen";
import { MainStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 60,
          backgroundColor: "#ffc125",
        },

        tabBarIcon: ({ focused, size, colour }) => {
          let iconName;

          if (route.name === "Tá Fácil") {
            iconName = focused ? "home" : "home-outline";
            size = focused ? size + 8 : size + 5;
          } else if (route.name === "Saldo") {
            iconName = focused ? "server" : "server-outline";
            size = focused ? size + 8 : size + 5;
          } else if (route.name === "Estados") {
            iconName = focused ? "add-circle" : "add-circle-outline";
            size = focused ? size + 8 : size + 5;
          } else if (route.name === "Actividade") {
            iconName = focused ? "heart-circle" : "heart-circle-outline";
            size = focused ? size + 8 : size + 5;
          } else if (route.name === "Minha Conta") {
            iconName = focused ? "person-circle" : "person-circle-outline";
            size = focused ? size + 8 : size + 5;
          }
          return <Ionic name={iconName} size={size} colour={colour} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "black",
        showLabel: false,
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#fff",
        },
      }}
    >
      <Tab.Screen name="Tá Fácil" component={MainStackNavigator}></Tab.Screen>
      <Tab.Screen name="Saldo" component={SaldoScreen}></Tab.Screen>
      <Tab.Screen name="Estados" component={AddScreen}></Tab.Screen>
      <Tab.Screen name="Actividade" component={ActivityScreen}></Tab.Screen>
      <Tab.Screen name="Minha Conta" component={ProfileScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
