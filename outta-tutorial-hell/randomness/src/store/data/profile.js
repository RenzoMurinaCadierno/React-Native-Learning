import colors from "@app-constants/colors"
import { SectionItem } from "@app-models/profile"

export const mainTechsData = {
  id: "mainTechs",
  title: "Main Techs",
  icons: [
    {
      id: "html",
      name: "logo-html5",
      activeColor: "rgb(227, 76, 38)",
      inactiveColor: colors.PRIMARY_RGB_FORMATTED
    },
    {
      id: "css",
      name: "logo-css3",
      activeColor: "rgb(38, 77, 228)",
      inactiveColor: colors.PRIMARY_RGB_FORMATTED
    },
    {
      id: "js",
      name: "logo-javascript",
      activeColor: "rgb(240, 219, 79)",
      inactiveColor: colors.PRIMARY_RGB_FORMATTED
    },
    {
      id: "react",
      name: "logo-react",
      activeColor: "rgb(97, 219, 251)",
      inactiveColor: colors.PRIMARY_RGB_FORMATTED
    }
  ]
}

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
          items: [
            {
              iconName: "bookmark",
              iconType: "primary",
              text: "5 certified courses",
              sideText: "EducacionIT"
            },
            {
              iconName: "bookmark",
              iconType: "secondary",
              text: "10 certified courses",
              sideText: "Udemy"
            }
          ]
        },
        {
          title: "Projects",
          items: [
            {
              iconName: "bookmark",
              iconType: "primary",
              sideText: "https://asd.com"
            },
            {
              iconName: "bookmark",
              iconType: "primary",
              sideText: "https://asd.com"
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
          items: [
            {
              iconName: "bookmark",
              iconType: "primary",
              text: "5 certified courses",
              sideText: "EducacionIT"
            },
            {
              iconName: "bookmark",
              iconType: "secondary",
              text: "10 certified courses",
              sideText: "Udemy"
            }
          ]
        },
        {
          title: "Projects",
          items: [
            {
              iconName: "bookmark",
              iconType: "primary",
              sideText: "https://asd.com"
            },
            {
              iconName: "bookmark",
              iconType: "primary",
              sideText: "https://asd.com"
            }
          ]
        }
      ]
    )
  }
}

function getTitleColor(sectionId) {
  return mainTechsData.icons.find((i) => i.id === sectionId).activeColor
}
