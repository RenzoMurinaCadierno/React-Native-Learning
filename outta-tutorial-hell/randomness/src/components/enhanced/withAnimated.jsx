import withCreateAnimatedComponent from "@app-hoc/withCreateAnimationComponent"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import AppPressable from "../UI/Pressable/Root"
import CardRoot from "../UI/Card/Root"

const Animated = {
  Pressable: withCreateAnimatedComponent(AppPressable),
  Ionicons: withCreateAnimatedComponent(Ionicons),
  MaterialCommunityIcons: withCreateAnimatedComponent(MaterialCommunityIcons),
  Card: withCreateAnimatedComponent(CardRoot),
  LinearGradient: withCreateAnimatedComponent(LinearGradient)
}

export default Animated
