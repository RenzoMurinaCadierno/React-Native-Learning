import { defaultIcons } from "./global"
import { SectionItem, ProfileIcon } from "@app-models/profile"
import { uid } from "@app-utils/functions"

const profileBullets = {
  html: [
    {
      id: uid(),
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
      id: uid(),
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
      id: uid(),
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
      id: uid(),
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
      id: uid(),
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
      id: uid(),
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
        new ProfileIcon(defaultIcons.html),
        new ProfileIcon(defaultIcons.css),
        new ProfileIcon(defaultIcons.js),
        new ProfileIcon(defaultIcons.react)
      ],
      content: {
        html: _createProfileSectionItem(
          "html",
          "HTML5",
          "Standard markup language for web programming"
        ),
        css: _createProfileSectionItem(
          "css",
          "CSS3",
          "Style sheet language for markup documents"
        ),
        js: _createProfileSectionItem(
          "js",
          "Javascript",
          "High-level, JIT compiled and multi-paradigm programming language"
        ),
        react: _createProfileSectionItem("react")
      }
    },
    secondaryTechs: {
      id: "secondaryTechs",
      title: "Secondary Technologies",
      icons: [
        new ProfileIcon(defaultIcons.nodejs),
        new ProfileIcon(defaultIcons.python),
        new ProfileIcon(defaultIcons.github)
      ],
      content: {
        nodejs: _createProfileSectionItem("nodejs"),
        python: _createProfileSectionItem("python"),
        github: _createProfileSectionItem("github")
      }
    },
    currentlyLearning: {
      id: "currentlyLearning",
      title: "Currently learning",
      icons: [new ProfileIcon(defaultIcons["react-native"])],
      content: {
        "react-native": _createProfileSectionItem("react-native")
      }
    }
  }
}

function _createProfileSectionItem(id, title, subtitle) {
  return new SectionItem(
    title || "mocktitle " + id,
    subtitle || "mocksubtitle " + id,
    defaultIcons[id].activeColor,
    profileBullets[id]
  )
}

export default profile
