import React from "react"
import { StatusBar } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import ProfileScreen from "@app-screens/Profile/Profile"
import ProjectsScreen from "@app-screens/Projects/Projects"
import ContactScreen from "@app-screens/Contact/Contact"
import { ViewPortContextProvider } from "@app-context/viewPort"
import useViewPortContext from "@app-hooks/useViewPortContext"
import colors from "@app-constants/colors"

export default function RootNavigation() {
  return (
    <ViewPortContextProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ViewPortContextProvider>
  )
}

const TabNavigation = createMaterialTopTabNavigator()

const TabNavigator = () => {
  const { vw } = useViewPortContext()
  const iconSize = vw(6)

  return (
    <TabNavigation.Navigator
      style={{ paddingTop: StatusBar.currentHeight }}
      screenOptions={getTabBarScreenOptions(vw(4.5))}
      initialRouteName="Profile"
    >
      <TabNavigation.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: getTabBarIcon("person", iconSize) }}
      />
      <TabNavigation.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{ tabBarIcon: getTabBarIcon("briefcase", iconSize) }}
      />
      <TabNavigation.Screen
        name="Contact"
        component={ContactScreen}
        options={{ tabBarIcon: getTabBarIcon("mail", iconSize) }}
      />
    </TabNavigation.Navigator>
  )
}

function getTabBarScreenOptions(labelFontSize) {
  return {
    tabBarActiveTintColor: colors.main.PRIMARY,
    // tabBarInactiveTintColor: colors.SECONDARY,
    tabBarIndicatorStyle: { backgroundColor: colors.main.SECONDARY },
    tabBarStyle: {
      backgroundColor: colors.background.CONTRAST,
      elevation: 3
    },
    tabBarLabelStyle: {
      fontFamily: "livvic-semi-bold",
      fontSize: labelFontSize
    },
    tabBarItemStyle: { flexDirection: "row" },
    swipeEnabled: false
  }
}

function getTabBarIcon(name, size) {
  return ({ focused, color }) => (
    <Ionicons name={"md-" + name} size={size} color={color} focused={focused} />
  )
}
