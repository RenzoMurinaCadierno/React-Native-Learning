import withCreateAnimatedComponent from "@app-hoc/withCreateAnimationComponent"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"
import BaseIcon from "@app-components/UI/Icon/Base"
import CardRoot from "@app-components/UI/Card/Root"

const Animated = {
  Ionicons: withCreateAnimatedComponent(Ionicons),
  BaseIcon: withCreateAnimatedComponent(BaseIcon),
  Card: withCreateAnimatedComponent(CardRoot),
  LinearGradient: withCreateAnimatedComponent(LinearGradient)
}

export default Animated
