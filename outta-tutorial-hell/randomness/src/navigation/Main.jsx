import React from "react"
import { StatusBar } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import ProfileScreen from "../screens/Profile/Profile"
import ProjectsScreen from "../screens/Projects/Projects"
import ContactScreen from "../screens/Projects/Projects"
import colors from "../constants/colors"
import useViewPort from "../hooks/useViewPort"

const TabNavigation = createMaterialTopTabNavigator()

export const TabNavigator = () => {
  const { vw } = useViewPort()

  return (
    <TabNavigation.Navigator
      style={{
        paddingTop: StatusBar.currentHeight
        // backgroundColor: colors.background.CONTRAST
      }}
      screenOptions={{
        tabBarActiveTintColor: colors.main.PRIMARY,
        // tabBarInactiveTintColor: colors.SECONDARY,
        tabBarIndicatorStyle: { backgroundColor: colors.main.SECONDARY },
        tabBarStyle: {
          backgroundColor: colors.background.CONTRAST,
          elevation: 3
        },
        tabBarLabelStyle: {
          fontFamily: "livvic-semi-bold",
          fontSize: vw(4.5)
        },
        tabBarItemStyle: { flexDirection: "row" }
      }}
      initialRouteName="Projects"
    >
      <TabNavigation.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: getTabBarIcon("person", vw(6)) }}
      />
      <TabNavigation.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{ tabBarIcon: getTabBarIcon("briefcase", vw(6)) }}
      />
      <TabNavigation.Screen
        name="Contact"
        component={ContactScreen}
        options={{ tabBarIcon: getTabBarIcon("mail", vw(6)) }}
      />
    </TabNavigation.Navigator>
  )
}

function getTabBarIcon(name, size) {
  return ({ focused, color }) => (
    <Ionicons name={"md-" + name} size={size} color={color} focused={focused} />
  )
}
