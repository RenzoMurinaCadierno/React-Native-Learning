import { DefaultIcon } from "@app-models/shared"
import { SectionItem, ProfileIcon, ProfileBullet } from "@app-models/profile"

export default async function initDb(forceCrash) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      forceCrash ? reject() : resolve({ profile })
    }, 1000)
  })
}

function getProfileSectionItem(id, title, subtitle) {
  return new SectionItem(
    title || "mocktitle " + id,
    subtitle || "mocksubtitle " + id,
    defaultIcons[id]?.color,
    profileBullets[id]
  )
}

const defaultIcons = {
  html: new DefaultIcon("html", "logo-html5", "rgb(227, 76, 38)"),
  css: new DefaultIcon("css", "logo-css3", "rgb(38, 77, 228)"),
  js: new DefaultIcon("js", "logo-javascript", "rgb(232, 206, 39)"),
  // js original color: "rgb(240, 219, 79)"
  react: new DefaultIcon("react", "logo-react", "rgb(97, 219, 251)"),
  nodejs: new DefaultIcon("nodejs", "logo-nodejs", "rgb(104, 160, 99)"),
  python: new DefaultIcon("python", "logo-python", "rgb(48, 105, 152)"),
  github: new DefaultIcon("github", "logo-github", "rgb(23, 21, 21)"),
  "react-native": new DefaultIcon(
    "react-native",
    "logo-react",
    "rgb(97, 219, 251)"
  )
}

const profileBullets = {
  html: [
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
  ],
  css: [
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
  ],
  js: [
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
  ],
  react: [],
  nodejs: [],
  python: [],
  github: [],
  "react-native": []
}

const profile = {
  sections: {
    mainTechs: {
      id: "mainTechs",
      title: "Main Technologies",
      icons: [
        new ProfileIcon(...defaultIcons.html),
        new ProfileIcon(...defaultIcons.css),
        new ProfileIcon(...defaultIcons.js),
        new ProfileIcon(...defaultIcons.react)
      ],
      content: {
        html: getProfileSectionItem(
          "html",
          "HTML5",
          "Standard markup language for web programming"
        ),
        css: getProfileSectionItem(
          "css",
          "CSS3",
          "Style sheet language for markup documents"
        ),
        js: getProfileSectionItem(
          "js",
          "Javascript",
          "High-level, JIT compiled and multi-paradigm programming language"
        ),
        react: getProfileSectionItem("react")
      }
    },
    secondaryTechs: {
      id: "secondaryTechs",
      title: "Secondary Technologies",
      icons: [
        new ProfileIcon(...defaultIcons.nodejs),
        new ProfileIcon(...defaultIcons.python),
        new ProfileIcon(...defaultIcons.github)
      ],
      content: {
        nodejs: getProfileSectionItem("nodejs"),
        python: getProfileSectionItem("python"),
        github: getProfileSectionItem("github")
      }
    },
    currentlyLearning: {
      id: "currentlyLearning",
      title: "Currently learning",
      icons: [new ProfileIcon(...defaultIcons["react-native"])],
      content: {
        "react-native": getProfileSectionItem("react-native")
      }
    }
  }
}
