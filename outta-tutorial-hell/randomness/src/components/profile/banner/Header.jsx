import React from "react"
import { StyleSheet, View } from "react-native"
import UI from "@app-components/UI"
import Layout from "@app-components/layout"
import colors from "@app-constants/colors"
import { castRgbToRgba } from "@app-utils/functions"

export default function Content({
  title,
  subtitle,
  category,
  titleColor,
  flexValue,
  fontScale
}) {
  return (
    <Layout.Overlay
      colors={[colors.background.PRIMARY, castRgbToRgba(titleColor, 0.4)]}
      style={[_styles.container, { flex: flexValue }]}
    >
      <View style={_styles.titleAndCategoryContainer}>
        <UI.Text
          size={fontScale * 1.5}
          color={titleColor}
          type="semi-bold"
          elevation={fontScale / 7}
          shadowColor={colors.background.DARK}
        >
          {title}
        </UI.Text>
        <UI.Text
          size={fontScale}
          color={colors.main.SECONDARY}
          type="regular-italic"
          elevation={fontScale / 7}
          shadowColor={colors.main.PRIMARY}
        >
          {category}
        </UI.Text>
      </View>
      <UI.Text
        type="regular-italic"
        size={fontScale * 0.95}
        color={colors.main.SECONDARY}
        style={_styles.subtitle}
      >
        {subtitle}
      </UI.Text>
    </Layout.Overlay>
  )
}

Content.defaultProps = { titleColor: "rgb(255,255,255)" }

const _styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: "1%"
  },
  titleAndCategoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "1.5%"
  },
  subtitle: {
    paddingHorizontal: "1.5%"
  }
})

// import React from "react"
// import { StyleSheet, View } from "react-native"
// import UI from "@app-components/UI"
// import colors from "@app-constants/colors"

// export default function Content({
//   title,
//   subtitle,
//   category,
//   titleColor,
//   flexValue,
//   fontScale
// }) {
//   return (
//     <View style={[_styles.container, { flex: flexValue }]}>
//       <View style={[_styles.titleAndCategoryContainer]}>
//         <UI.Text size={fontScale * 1.5} color={titleColor} type="semi-bold">
//           {title}
//         </UI.Text>
//         <UI.Text
//           size={fontScale}
//           color={colors.main.SECONDARY}
//           type="regular-italic"
//           elevation={fontScale / 7}
//           shadowColor={colors.main.PRIMARY}
//         >
//           {category}
//         </UI.Text>
//       </View>
//       <UI.Text size={fontScale} color={colors.main.SECONDARY}>
//         {subtitle}
//       </UI.Text>
//     </View>
//   )
// }

// const _styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     paddingHorizontal: "1.5%",
//     paddingVertical: "0.5%"
//   },
//   titleAndCategoryContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between"
//   }
// })
