import colors from "../../constants/colors"

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
    html: {
      category: "Main technologies",
      title: "HTML5",
      subtitle: "Standard markup language for web programming",
      color: mainTechsData.icons.find((i) => i.id === "html").activeColor,
      bullets: ["5 certified courses", "2 practise projects"],
      urls: "https://asd.com"
    },
    css: {
      category: "Main technologies",
      title: "CSS3",
      subtitle: "Style sheet language for markup documents",
      color: mainTechsData.icons.find((i) => i.id === "css").activeColor,
      bullets: ["5 certified courses", "2 practise projects"],
      urls: "https://asd.com"
    }
  }
}

function mapIconIdstoCategoryId(categoryObj) {
  // { html: 'mainTechs', css: 'mainTechs', react: 'mainTechs', ... }
  const categoryId = categoryObj.id
  const iconsArray = categoryObj.icons

  return iconsArray.reduce(
    (acc, iconObj) => ({ ...acc, [iconObj.id]: categoryId }),
    {}
  )
}

export const iconIdsToCategoryIdsMap = {
  ...mapIconIdstoCategoryId(mainTechsData)
}
