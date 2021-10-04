import withCreateAnimatedComponent from "@app-hoc/withCreateAnimationComponent"
import { Ionicons } from "@expo/vector-icons"
import BaseIcon from "@app-components/UI/Icon/Base"
import BaseText from "@app-components/UI/Text/Base"

const Animated = {
  Ionicons: withCreateAnimatedComponent(Ionicons),
  BaseIcon: withCreateAnimatedComponent(BaseIcon),
  BaseText: withCreateAnimatedComponent(BaseText)
}

export default Animated
