import { createAppContainer } from "react-navigation"
import { Platform } from "react-native"
import { createStackNavigator } from "react-navigation-stack"
import PlacesList from "../screens/PlacesList"
import PlaceDetails from "../screens/PlaceDetails"
import NewPlace from "../screens/NewPlace"
import Map from "../screens/Map"
import colors from "../constants/colors"

const PlacesNavigator = createStackNavigator(
  {
    PlacesList,
    PlaceDetails,
    NewPlace,
    Map
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? colors.PRIMARY : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : colors.PRIMARY
    }
  }
)

export default createAppContainer(PlacesNavigator)
