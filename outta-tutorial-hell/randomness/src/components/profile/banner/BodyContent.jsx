import React from "react"
import { View, StyleSheet, SectionList } from "react-native"
import BodyBullet from "./BodyBullet"
import UI from "@app-components/UI"
import colors from "@app-constants/colors"
import { default as sharedStyles } from "@app-constants/styles"

export default function BodyContent({ bullets, fontScale }) {
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={_styles.title}>
      <UI.Text
        color={colors.PRIMARY}
        size={fontScale * 1.3}
        elevation={3.5}
        shadowColor={colors.ACCENT_PRIMARY}
        style={_styles.title}
      >
        {title}
      </UI.Text>
    </View>
  )

  const renderItem = ({
    item: { iconName, iconType, text, sideText },
    index
  }) => (
    <BodyBullet
      type={index % 2 === 0 ? "primary" : "secondary"}
      {...{ iconName, iconType, text, sideText }}
      fontScale={fontScale * 0.8}
    />
  )

  const SectionSeparatorComponent = () => (
    <View style={_styles.titleElevation} />
  )

  return (
    <SectionList
      sections={bullets}
      renderSectionHeader={renderSectionHeader}
      SectionSeparatorComponent={SectionSeparatorComponent}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      style={{ width: "100%" }}
      onEndReached={() => console.log("asd")}
      onEndReachedThreshold={0.01}
      stickySectionHeadersEnabled
    />
  )
}

BodyContent.defaultProps = { bullets: [] }

const _styles = StyleSheet.create({
  // container: {
  // flexGrow: 1
  // alignSelf: "stretch",
  // justifyContent: "space-between"
  // borderWidth: 1
  // },
  title: {
    backgroundColor: `rgba(${colors.background.CONTRAST_RGB}, 0.4)`,
    textAlign: "right",
    paddingRight: "1%"
  },
  titleElevation: {
    width: "100%",
    ...sharedStyles.ELEVATION_SUBTLE
  }
})
change colors constants to be read primary.RGB, primary.RGB_FORMATTED
add colors utils to get opacity with function so as not to do above
// import React from "react"
// import { View, StyleSheet, FlatList } from "react-native"
// import UI from "@app-components/UI"
// import colors from "@app-constants/colors"
// import { default as sharedStyles } from "@app-constants/styles"
// import BodyBullet from "./BodyBullet"

// export default function BodyContent({ title, items, fontScale }) {
//   const renderItem = ({
//     item: { iconName, iconType, text, sideText },
//     index
//   }) => (
//     <BodyBullet
//       type={index % 2 === 0 ? "primary" : "secondary"}
//       {...{ iconName, iconType, text, sideText }}
//       fontScale={fontScale * 0.8}
//     />
//   )

//   return (
//     <View style={_styles.container}>
//       <View style={_styles.title}>
//         <UI.Text
//           color={colors.PRIMARY}
//           size={fontScale * 1.3}
//           elevation={3.5}
//           shadowColor={colors.ACCENT_PRIMARY}
//           style={_styles.title}
//         >
//           {title}
//         </UI.Text>
//       </View>
//       <View style={_styles.titleElevation} />
//       <FlatList
//         data={items}
//         renderItem={renderItem}
//         keyExtractor={(_, index) => index.toString()}
//         style={{ flex: 1 }}
//         onEndReached={() => console.log("asd")}
//         onEndReachedThreshold={0.01}
//       />
//     </View>
//   )
// }

// BodyContent.defaultProps = { items: [] }

// const _styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     alignSelf: "stretch",
//     justifyContent: "space-between"
//     // borderWidth: 1
//   },
//   title: {
//     textAlign: "right",
//     paddingRight: "1%"
//   },
//   titleElevation: {
//     width: "100%",
//     ...sharedStyles.ELEVATION_SUBTLE
//   }
// })
