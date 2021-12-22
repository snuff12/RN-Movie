import React from "react";
import { View, Text, useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import TV from "../screens/Tv";
import {
  COLOR_BLACK,
  COLOR_DARK_GRAY,
  COLOR_LIGHT_GRAY,
  COLOR_YELLOW,
} from "../colors";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? COLOR_BLACK : "white",
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? COLOR_BLACK : "white",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: -5,
        },
        tabBarActiveTintColor: isDark ? COLOR_YELLOW : COLOR_BLACK,
        tabBarInactiveTintColor: isDark ? COLOR_LIGHT_GRAY : COLOR_DARK_GRAY,
        headerStyle: {
          backgroundColor: isDark ? COLOR_BLACK : "white",
        },
        headerTitleStyle: {
          color: isDark ? COLOR_LIGHT_GRAY : COLOR_BLACK,
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="film-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Tv"
        component={TV}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="tv-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="search-outline" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
