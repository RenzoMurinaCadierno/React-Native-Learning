import { Animated, Easing } from "react-native"
import { animationConfigs } from "@app-utils/functions"

const easings = {
  IN: Easing.in(Easing.ease),
  OUT: Easing.out(Easing.ease),
  IN_OUT: Easing.inOut(Easing.ease),
  LINEAR: Easing.linear
}

const effects = {
  default: {
    IN: (value) =>
      Animated.timing(value, animationConfigs.timing(1, 350, easings.IN)),
    OUT: (value) =>
      Animated.timing(value, animationConfigs.timing(0, 350, easings.OUT))
  },
  spring: {
    IN: (value) =>
      Animated.spring(value, animationConfigs.springBounce(1, 1000)),
    OUT: (value) =>
      Animated.spring(value, animationConfigs.springBounce(0, 1000))
  },
  hover: {
    ACTIVE_SEQUENCE: (value) => [
      Animated.timing(value, animationConfigs.timing(1, 1000, easings.IN)),
      Animated.timing(value, animationConfigs.timing(0, 1000, easings.OUT))
    ],
    OUT: (value) =>
      Animated.timing(value, animationConfigs.timing(0, 500, easings.OUT))
  },
  color: {
    IN: (value) =>
      Animated.timing(
        value,
        animationConfigs.timing(1, 1000, easings.IN, 0, false)
      ),
    OUT: (value) =>
      Animated.timing(
        value,
        animationConfigs.timing(0, 1000, easings.OUT, 0, false)
      )
  }
}

const animations = {
  effects,
  easings,
  arrows: {
    swipe: {
      IN: (value) => Animated.spring(value, animationConfigs.springFriction(1)),
      OUT: (value) => Animated.spring(value, animationConfigs.springFriction(0))
    },
    directional: {
      ACTIVE_SEQUENCE: [
        (val) =>
          Animated.loop(
            Animated.sequence([
              Animated.delay(200),
              Animated.timing(
                val,
                animationConfigs.timing(2, 2000, easings.IN_OUT, 200)
              ),
              Animated.timing(
                val,
                animationConfigs.timing(0, 2000, easings.IN_OUT, 200)
              )
            ])
          ),
        (val) =>
          Animated.loop(
            Animated.sequence([
              Animated.delay(400),
              Animated.timing(
                val,
                animationConfigs.timing(2, 2000, easings.IN_OUT, 200)
              ),
              Animated.timing(
                val,
                animationConfigs.timing(0, 2000, easings.IN_OUT, 200)
              )
            ])
          ),
        (val) =>
          Animated.loop(
            Animated.sequence([
              Animated.delay(600),
              Animated.timing(
                val,
                animationConfigs.timing(2, 2000, easings.IN_OUT, 200)
              ),
              Animated.timing(
                val,
                animationConfigs.timing(0, 2000, easings.IN_OUT, 200)
              )
            ])
          )
      ]
    }
  },
  icons: {
    color: {
      IN: (value) =>
        Animated.timing(
          value,
          animationConfigs.timing(1, 125, easings.LINEAR, 0, false)
        ),
      OUT: (value) =>
        Animated.timing(
          value,
          animationConfigs.timing(0, 125, easings.LINEAR, 0, false)
        )
    },
    shadow: {
      ACTIVE_SEQUENCE: (value) => [
        Animated.timing(value, animationConfigs.timing(1, 1000, easings.IN)),
        Animated.timing(value, animationConfigs.timing(0.6, 1000, easings.OUT))
      ],
      OUT: (value) =>
        Animated.timing(value, animationConfigs.timing(0.6, 500, easings.OUT))
    },
    aura: {
      ACTIVE_SEQUENCE: (value) => [
        Animated.timing(
          value,
          animationConfigs.timing(1, 2000, easings.LINEAR)
        ),
        Animated.timing(value, animationConfigs.timing(0, 0, easings.LINEAR))
      ]
    },
    dragNDrop: {
      scale: {
        IN: (value) =>
          Animated.spring(value, animationConfigs.springBounce(1, 125)),
        OUT: (value) =>
          Animated.spring(value, animationConfigs.springBounce(0, 125))
      },
      example: {
        ACTIVE_SEQUENCE: (value) => [
          Animated.delay(500),
          Animated.timing(value, animationConfigs.timing(1, 2000, easings.OUT)),
          Animated.timing(value, animationConfigs.timing(0, 0, easings.LINEAR))
        ],
        OUT: (value) =>
          Animated.timing(value, animationConfigs.timing(1, 1000, easings.OUT))
      }
    }
  },
  images: {
    opacity: {
      IN: (value) =>
        Animated.timing(
          value,
          animationConfigs.timing(1, 2000, easings.LINEAR)
        ),
      OUT: (value) =>
        Animated.timing(value, animationConfigs.timing(0, 2000, easings.LINEAR))
    }
  },
  card: {
    actionIcon: {
      scale: {
        IN: (value) =>
          Animated.spring(value, animationConfigs.springBounce(1, 350)),
        OUT: (value) =>
          Animated.spring(value, animationConfigs.springBounce(0, 350))
      },
      color: {
        IN: (value) =>
          Animated.timing(
            value,
            animationConfigs.timing(1, 350, easings.IN, 0, false)
          ),
        OUT: (value) =>
          Animated.timing(
            value,
            animationConfigs.timing(0, 350, easings.OUT, 0, false)
          )
      }
    },
    actionText: {
      appear: {
        IN: (value) =>
          Animated.timing(value, animationConfigs.timing(1, 350, easings.IN)),
        OUT: (value) =>
          Animated.timing(value, animationConfigs.timing(0, 350, easings.OUT))
      }
    },
    transition: {
      IN: (value, delay) =>
        Animated.timing(
          value,
          animationConfigs.timing(1, 200, easings.IN, delay)
        ),
      OUT: (value, delay) =>
        Animated.timing(
          value,
          animationConfigs.timing(1, 200, easings.OUT, delay)
        )
    }
  }
}

export default animations
