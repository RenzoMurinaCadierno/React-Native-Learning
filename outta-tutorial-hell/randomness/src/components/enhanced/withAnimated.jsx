import withCreateAnimatedComponent from "@app-hoc/withCreateAnimationComponent"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons, EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import CardRoot from "../UI/Card/Root"

const Animated = {
  Ionicons: withCreateAnimatedComponent(Ionicons),
  MaterialCommunityIcons: withCreateAnimatedComponent(MaterialCommunityIcons),
  Card: withCreateAnimatedComponent(CardRoot),
  LinearGradient: withCreateAnimatedComponent(LinearGradient)
}

export default Animated
