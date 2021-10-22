import { SectionItem, ProfileIcon } from "@app-models/profile"
import { ProjectsIcon } from "@app-models/projects"
import { uid } from "@app-utils/functions"

export default async function initDb(forceCrash) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      forceCrash
        ? reject({ ok: false })
        : resolve({ ok: true, data: JSON.stringify({ profile, projects }) })
    }, 1000)
  })
}

/*******************************************************************************
 * SHARED
 /*****************************************************************************/
const defaultIcons = {
  html: { id: "html", name: "logo-html5", activeColor: "rgb(227, 76, 38)" },
  css: { id: "css", name: "logo-css3", activeColor: "rgb(38, 77, 228)" },
  js: { id: "js", name: "logo-javascript", activeColor: "rgb(232, 206, 39)" },
  // js original color: "rgb(240, 219, 79)"
  react: { id: "react", name: "logo-react", activeColor: "rgb(97, 219, 251)" },
  nodejs: {
    id: "nodejs",
    name: "logo-nodejs",
    activeColor: "rgb(104, 160, 99)"
  },
  python: {
    id: "python",
    name: "logo-python",
    activeColor: "rgb(48, 105, 152)"
  },
  github: { id: "github", name: "logo-github", activeColor: "rgb(23, 21, 21)" },
  "react-native": {
    id: "react-native",
    name: "logo-react",
    activeColor: "rgb(97, 219, 251)"
  }
}

/*******************************************************************************
 * PROFILE
 /*****************************************************************************/
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
        new ProfileIcon(defaultIcons.html),
        new ProfileIcon(defaultIcons.css),
        new ProfileIcon(defaultIcons.js),
        new ProfileIcon(defaultIcons.react)
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
        new ProfileIcon(defaultIcons.nodejs),
        new ProfileIcon(defaultIcons.python),
        new ProfileIcon(defaultIcons.github)
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
      icons: [new ProfileIcon(defaultIcons["react-native"])],
      content: {
        "react-native": getProfileSectionItem("react-native")
      }
    }
  }
}

function getProfileSectionItem(id, title, subtitle) {
  return new SectionItem(
    title || "mocktitle " + id,
    subtitle || "mocksubtitle " + id,
    defaultIcons[id].activeColor,
    profileBullets[id]
  )
}

/*******************************************************************************
 * PROJECTS
 /*****************************************************************************/
const projects = {
  html: {
    icon: new ProjectsIcon(defaultIcons.html),
    items: [
      {
        id: uid(),
        title: "React Fanmade Hooks",
        subtitle: "Hooks for many needs made by React enthusiasts",
        images: [
          {
            id: uid(),
            uri: "https://www.gamerfocus.co/wp-content/uploads/2021/07/Eeve.jpg"
          },
          {
            id: uid(),
            uri: "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/09/02/1049582.jpg"
          }
        ]
      },
      {
        id: uid(),
        title: "Yugi-Calculator-MAX",
        subtitle: "Multi-purpose app to assist Yu-Gi-Oh! duelists.",
        images: [
          {
            id: uid(),
            uri: "https://www.gamerfocus.co/wp-content/uploads/2021/07/Eeve.jpg"
          },
          {
            id: uid(),
            uri: "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/09/02/1049582.jpg"
          }
        ]
      }
    ]
  },
  css: {
    id: uid(),
    icon: new ProjectsIcon(defaultIcons.css),
    items: []
  },
  js: {
    id: uid(),
    icon: new ProjectsIcon(defaultIcons.js),
    items: []
  },
  react: {
    id: uid(),
    icon: new ProjectsIcon(defaultIcons.react),
    items: []
  },
  nodejs: {
    id: uid(),
    icon: new ProjectsIcon(defaultIcons.nodejs),
    items: []
  },
  python: {
    id: uid(),
    icon: new ProjectsIcon(defaultIcons.python),
    items: []
  },
  github: {
    id: uid(),
    icon: new ProjectsIcon(defaultIcons.github),
    items: []
  },
  "react-native": {
    id: uid(),
    icon: new ProjectsIcon(defaultIcons["react-native"]),
    items: []
  }
}
