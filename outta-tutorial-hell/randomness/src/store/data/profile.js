export const status = {
  CICLE_STARTUP: "CICLE_STARTUP",
  FETCH_DATABASE_INIT: "FETCH_DATABASE_INIT",
  FETCH_DATABASE_ERROR: "FETCH_DATABASE_ERROR",
  CICLE_FINISHED: "CICLE_FINISHED"
}

export const messages = {
  [status.CICLE_STARTUP]: "Initializing screen.",
  [status.FETCH_DATABASE_INIT]: "Retrieving from database...",
  [status.FETCH_DATABASE_ERROR]: "Failed to retrieve from database.",
  [status.CICLE_FINISHED]: "Ready."
}

// import colors from "@app-constants/colors"
// import { SectionItem, ProfileBullet } from "@app-models/profile"
// import { defaultIcons } from "./mockDb"

// function getTitleColor(sectionId) {
//   return mainTechsData.icons.find((i) => i.id === sectionId).activeColor
// }

// function getTechIconProperties(id) {
//   return {
//     ...defaultIcons[id],
//     inactiveColor: colors.main.PRIMARY_RGB_FORMATTED
//   }
// }

// export const mainTechsData = {
//   id: "mainTechs",
//   title: "Main Techs",
//   icons: [
//     getTechIconProperties("html"),
//     getTechIconProperties("css"),
//     getTechIconProperties("js"),
//     getTechIconProperties("react")
//   ]
// }

// export const secondaryTechsData = {
//   id: "secondaryTechs",
//   title: "Secondary Techs",
//   icons: [
//     getTechIconProperties("nodejs"),
//     getTechIconProperties("python"),
//     getTechIconProperties("github")
//   ]
// }

// export const currentlyLearningData = {
//   id: "currentlyLearning",
//   title: "Currently learning",
//   icons: [getTechIconProperties("react-native")]
// }

// export const screenBodyData = [
//   mainTechsData,
//   secondaryTechsData,
//   currentlyLearningData
// ]

// export const bannerData = {
//   mainTechs: {
//     html: new SectionItem(
//       "Main technologies",
//       "HTML5",
//       "Standard markup language for web programming",
//       getTitleColor("html"),
//       [
//         {
//           title: "Education",
//           data: [
//             {
//               iconName: "bookmark",
//               iconType: "primary",
//               text: "5 certified courses",
//               sideText: "EducacionIT",
//               descriptionText: "Certified course (12 hours)."
//             },
//             {
//               iconName: "bookmark",
//               iconType: "secondary",
//               text: "10 certified courses",
//               sideText: "Udemy",
//               descriptionText: "Certified course (12 hours)."
//             },
//             {
//               iconName: "bookmark",
//               iconType: "primary",
//               text: "5 certified courses",
//               sideText: "EducacionIT",
//               descriptionText: "Certified course (12 hours)."
//             },
//             {
//               iconName: "bookmark",
//               iconType: "secondary",
//               text: "10 certified courses",
//               sideText: "Udemy",
//               descriptionText: "Certified course (12 hours)."
//             }
//           ]
//         },
//         {
//           title: "Projects",
//           data: [
//             {
//               iconName: "briefcase",
//               iconType: "primary",
//               sideText: "React Fanmade Hooks",
//               descriptionText: "Custom Hooks for many needs."
//             },
//             {
//               iconName: "briefcase",
//               iconType: "secondary",
//               sideText: "Yugi-Calculator-MAX",
//               descriptionText: "Yu-gi-oh! multi-purpose app."
//             }
//           ]
//         }
//       ]
//     ),
//     css: new SectionItem(
//       "Main technologies",
//       "CSS3",
//       "Style sheet language for markup documents",
//       getTitleColor("css"),
//       [
//         {
//           title: "Education",
//           data: [
//             {
//               iconName: "bookmark",
//               iconType: "primary",
//               text: "5 certified courses",
//               sideText: "EducacionIT",
//               descriptionText: "Certified course (12 hours)."
//             },
//             {
//               iconName: "bookmark",
//               iconType: "secondary",
//               text: "10 certified courses",
//               sideText: "Udemy",
//               descriptionText: "Certified course (12 hours)."
//             }
//           ]
//         },
//         {
//           title: "Projects",
//           data: [
//             {
//               iconName: "bookmark",
//               iconType: "primary",
//               sideText: "https://asd.com",
//               descriptionText: "Certified course (12 hours)."
//             },
//             {
//               iconName: "bookmark",
//               iconType: "primary",
//               sideText: "https://asd.com",
//               descriptionText: "Certified course (12 hours)."
//             }
//           ]
//         }
//       ]
//     ),
//     js: new SectionItem(
//       "Main technologies",
//       "Javascript",
//       "High-level, JIT compiled and multi-paradigm programming language",
//       getTitleColor("js"),
//       [
//         {
//           title: "Education",
//           data: [
//             {
//               iconName: "bookmark",
//               iconType: "primary",
//               text: "5 certified courses",
//               sideText: "EducacionIT",
//               descriptionText: "Certified course (12 hours)."
//             },
//             {
//               iconName: "bookmark",
//               iconType: "secondary",
//               text: "10 certified courses",
//               sideText: "Udemy",
//               descriptionText: "Certified course (12 hours)."
//             }
//           ]
//         },
//         {
//           title: "Projects",
//           data: [
//             {
//               iconName: "bookmark",
//               iconType: "primary",
//               sideText: "https://asd.com",
//               descriptionText: "Certified course (12 hours)."
//             },
//             {
//               iconName: "bookmark",
//               iconType: "primary",
//               sideText: "https://asd.com",
//               descriptionText: "Certified course (12 hours)."
//             }
//           ]
//         }
//       ]
//     )
//   }
// }
