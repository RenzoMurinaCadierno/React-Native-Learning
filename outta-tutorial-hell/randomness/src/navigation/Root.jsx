import React from "react"
import { StatusBar } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import {
  NavigationContainer,
  createNavigationContainerRef
} from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Screens from "@app-screens"
import Context from "@app-context"
import { useViewPortContext, useBreakpoints } from "@app-hooks"
import { colors } from "@app-constants"

export const navigationRef = createNavigationContainerRef()

export default function RootNavigation() {
  return (
    <Context.ViewPort.Provider>
      <NavigationContainer ref={navigationRef}>
        <TabNavigator />
      </NavigationContainer>
    </Context.ViewPort.Provider>
  )
}

const TabNavigation = createMaterialTopTabNavigator()

const TabNavigator = () => {
  const { vw } = useViewPortContext()
  const breakpoints = useBreakpoints()
  const iconSize = breakpoints.select({ sm: vw(7), any: vw(6) })
  const labelFontSize = breakpoints.select({ sm: vw(5), any: vw(4.5) })

  return (
    <TabNavigation.Navigator
      style={{ paddingTop: StatusBar.currentHeight }}
      screenOptions={_getTabBarScreenOptions(labelFontSize)}
      initialRouteName={Screens.names.PROFILE}
    >
      <TabNavigation.Screen
        name={Screens.names.PROFILE}
        component={Screens.Profile}
        options={{ tabBarIcon: _getTabBarIcon("person", iconSize) }}
      />
      <TabNavigation.Screen
        name={Screens.names.PROJECTS}
        component={Screens.Projects}
        options={{ tabBarIcon: _getTabBarIcon("briefcase", iconSize) }}
      />
      <TabNavigation.Screen
        name={Screens.names.CONTACT}
        component={Screens.Contact}
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
