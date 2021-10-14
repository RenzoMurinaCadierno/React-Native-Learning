import colors from "@app-constants/colors"
import { SectionItem } from "@app-models/profile"

function getTitleColor(sectionId) {
  return mainTechsData.icons.find((i) => i.id === sectionId).activeColor
}

function getTechIconProperties(
  id,
  name,
  activeColor,
  inactiveColor = colors.main.PRIMARY_RGB_FORMATTED
) {
  return { id, name, activeColor, inactiveColor }
}

export const mainTechsData = {
  id: "mainTechs",
  title: "Main Techs",
  icons: [
    getTechIconProperties("html", "logo-html5", "rgb(227, 76, 38)"),
    getTechIconProperties("css", "logo-css3", "rgb(38, 77, 228)"),
    // getTechIconProperties("js", "logo-javascript", "rgb(240, 219, 79)"),
    getTechIconProperties("js", "logo-javascript", "rgb(232, 206, 39)"),
    getTechIconProperties("react", "logo-react", "rgb(97, 219, 251)")
  ]
}

export const secondaryTechsData = {
  id: "secondaryTechs",
  title: "Secondary Techs",
  icons: [
    getTechIconProperties("nodejs", "logo-nodejs", "rgb(104, 160, 99)"),
    getTechIconProperties("python", "logo-python", "rgb(48, 105, 152)"),
    getTechIconProperties("github", "logo-github", "rgb(23, 21, 21)")
  ]
}

export const currentlyLearningData = {
  id: "currentlyLearning",
  title: "Currently learning",
  icons: [
    getTechIconProperties("react-native", "logo-react", "rgb(97, 219, 251)")
  ]
}

export const screenBodyData = [
  mainTechsData,
  secondaryTechsData,
  currentlyLearningData
]

export const bannerData = {
  mainTechs: {
    html: new SectionItem(
      "Main technologies",
      "HTML5",
      "Standard markup language for web programming",
      getTitleColor("html"),
      [
        {
          title: "Education",
          data: [
            {
              iconName: "bookmark",
              iconType: "primary",
              text: "5 certified courses",
              sideText: "EducacionIT",
              descriptionText: "Certified course (12 hours)."
            },
            {
              iconName: "bookmark",
              iconType: "secondary",
              text: "10 certified courses",
              sideText: "Udemy",
              descriptionText: "Certified course (12 hours)."
            },
            {
              iconName: "bookmark",
              iconType: "primary",
              text: "5 certified courses",
              sideText: "EducacionIT",
              descriptionText: "Certified course (12 hours)."
            },
            {
              iconName: "bookmark",
              iconType: "secondary",
              text: "10 certified courses",
              sideText: "Udemy",
              descriptionText: "Certified course (12 hours)."
            }
          ]
        },
        {
          title: "Projects",
          data: [
            {
              iconName: "briefcase",
              iconType: "primary",
              sideText: "React Fanmade Hooks",
              descriptionText: "Custom Hooks for many needs."
            },
            {
              iconName: "briefcase",
              iconType: "secondary",
              sideText: "Yugi-Calculator-MAX",
              descriptionText: "Yu-gi-oh! multi-purpose app."
            }
          ]
        }
      ]
    ),
    css: new SectionItem(
      "Main technologies",
      "CSS3",
      "Style sheet language for markup documents",
      getTitleColor("css"),
      [
        {
          title: "Education",
          data: [
            {
              iconName: "bookmark",
              iconType: "primary",
              text: "5 certified courses",
              sideText: "EducacionIT",
              descriptionText: "Certified course (12 hours)."
            },
            {
              iconName: "bookmark",
              iconType: "secondary",
              text: "10 certified courses",
              sideText: "Udemy",
              descriptionText: "Certified course (12 hours)."
            }
          ]
        },
        {
          title: "Projects",
          data: [
            {
              iconName: "bookmark",
              iconType: "primary",
              sideText: "https://asd.com",
              descriptionText: "Certified course (12 hours)."
            },
            {
              iconName: "bookmark",
              iconType: "primary",
              sideText: "https://asd.com",
              descriptionText: "Certified course (12 hours)."
            }
          ]
        }
      ]
    ),
    js: new SectionItem(
      "Main technologies",
      "Javascript",
      "High-level, JIT compiled and multi-paradigm programming language",
      getTitleColor("js"),
      [
        {
          title: "Education",
          data: [
            {
              iconName: "bookmark",
              iconType: "primary",
              text: "5 certified courses",
              sideText: "EducacionIT",
              descriptionText: "Certified course (12 hours)."
            },
            {
              iconName: "bookmark",
              iconType: "secondary",
              text: "10 certified courses",
              sideText: "Udemy",
              descriptionText: "Certified course (12 hours)."
            }
          ]
        },
        {
          title: "Projects",
          data: [
            {
              iconName: "bookmark",
              iconType: "primary",
              sideText: "https://asd.com",
              descriptionText: "Certified course (12 hours)."
            },
            {
              iconName: "bookmark",
              iconType: "primary",
              sideText: "https://asd.com",
              descriptionText: "Certified course (12 hours)."
            }
          ]
        }
      ]
    )
  }
}
