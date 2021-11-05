import withCreateAnimatedComponent from "@app-hoc/withCreateAnimationComponent"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"
import BaseIcon from "../UI/Icon/Base"
import CardRoot from "../UI/Card/Root"

const Animated = {
  Ionicons: withCreateAnimatedComponent(Ionicons),
  BaseIcon: withCreateAnimatedComponent(BaseIcon),
  Card: withCreateAnimatedComponent(CardRoot),
  LinearGradient: withCreateAnimatedComponent(LinearGradient)
}

export default Animated
