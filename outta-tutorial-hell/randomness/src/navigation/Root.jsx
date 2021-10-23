import React from "react"
import { StatusBar } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import ProfileScreen from "@app-screens/Profile/Profile"
import ProjectsScreen from "@app-screens/Projects/Projects"
// import ContactScreen from "@app-screens/Projects/Projects"
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

  return (
    <TabNavigation.Navigator
      style={{ paddingTop: StatusBar.currentHeight }}
      screenOptions={getTabBarScreenOptions(vw)}
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
      {/*<TabNavigation.Screen
        name="Contact"
        component={ContactScreen}
        options={{ tabBarIcon: getTabBarIcon("mail", vw(6)) }}
      /> */}
    </TabNavigation.Navigator>
  )
}

function getTabBarScreenOptions(vw) {
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
      fontSize: vw(4.5)
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
