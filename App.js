import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import SaldoScreen from "./Screens/SaldoScreen";
import AddScreen from "./Screens/AddScreen";
import ActivityScreen from "./Screens/ActivityScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <NativeBaseProvider>
        <StatusBar backgroundColor="#54cbff" barStyle="dark-content" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarStyle: {
                height: 60,
                backgroundColor: "#ffc125",
              },
              tabBarIcon: ({ focused, size, colour }) => {
                let iconName;

                if (route.name === "Ta Fácil") {
                  iconName = focused ? "home" : "home-outline";
                  size = focused ? size + 8 : size + 5;
                } else if (route.name === "Pesquisa") {
                  iconName = focused ? "server" : "server-outline";
                  size = focused ? size + 8 : size + 5;
                } else if (route.name === "Pedido") {
                  iconName = focused ? "add-circle" : "add-circle-outline";
                  size = focused ? size + 8 : size + 5;
                } else if (route.name === "Actividade") {
                  iconName = focused ? "heart-circle" : "heart-circle-outline";
                  size = focused ? size + 8 : size + 5;
                } else if (route.name === "Prefil") {
                  iconName = focused
                    ? "person-circle"
                    : "person-circle-outline";
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
            <Tab.Screen name="Ta Fácil" component={HomeScreen}></Tab.Screen>
            <Tab.Screen name="Pesquisa" component={SaldoScreen}></Tab.Screen>
            <Tab.Screen name="Pedido" component={AddScreen}></Tab.Screen>
            <Tab.Screen
              name="Actividade"
              component={ActivityScreen}
            ></Tab.Screen>
            <Tab.Screen name="Prefil" component={ProfileScreen}></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}
