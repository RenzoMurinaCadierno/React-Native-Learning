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
import { screenNames } from "@app-constants/navigation"
import { Device } from "@app-utils/functions"

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
  const { iconSize, labelFontSize } = _conditionalStyles(vw)

  return (
    <TabNavigation.Navigator
      style={{ paddingTop: StatusBar.currentHeight }}
      screenOptions={_getTabBarScreenOptions(labelFontSize)}
      initialRouteName={screenNames.CONTACT}
    >
      <TabNavigation.Screen
        name={screenNames.PROFILE}
        component={ProfileScreen}
        options={{ tabBarIcon: _getTabBarIcon("person", iconSize) }}
      />
      <TabNavigation.Screen
        name={screenNames.PROJECTS}
        component={ProjectsScreen}
        options={{ tabBarIcon: _getTabBarIcon("briefcase", iconSize) }}
      />
      <TabNavigation.Screen
        name={screenNames.CONTACT}
        component={ContactScreen}
        options={{ tabBarIcon: _getTabBarIcon("mail", iconSize) }}
      />
    </TabNavigation.Navigator>
  )
}

function _getTabBarScreenOptions(labelFontSize) {
  return {
    tabBarActiveTintColor: colors.main.PRIMARY,
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

function _getTabBarIcon(name, size) {
  return ({ focused, color }) => (
    <Ionicons name={"md-" + name} size={size} color={color} focused={focused} />
  )
}

const _conditionalStyles = (vw) => ({
  iconSize: Device.isSmall() ? vw(7) : vw(6),
  labelFontSize: Device.isSmall() ? vw(5) : vw(4.5)
})
