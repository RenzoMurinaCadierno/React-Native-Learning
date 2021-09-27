import withCreateAnimatedComponent from "@app-hoc/withCreateAnimationComponent"
import { Ionicons } from "@expo/vector-icons"
import Base from "@app-components/UI/Icon/Base"

const Animated = {
  Ionicons: withCreateAnimatedComponent(Ionicons),
  BaseIcon: withCreateAnimatedComponent(Base)
}

export default Animated
