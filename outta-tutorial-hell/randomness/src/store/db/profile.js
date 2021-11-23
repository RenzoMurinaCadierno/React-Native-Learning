import { defaultIcons } from "./global"
import { SectionItem, ProfileIcon, create } from "@app-models/profile"
import { uid } from "@app-utils/functions"
import { sectionNames } from "@app-constants/sections/profile"

const profileBullets = {
  html: [
    {
      id: uid(),
      title: sectionNames.EDUCATION,
      data: [
        create.course(
          "HTML5: Web page fundamentals",
          "Certified (12 hours)",
          "EducacionIT",
          true
        )
      ]
    }
  ],
  css: [
    {
      id: uid(),
      title: sectionNames.EDUCATION,
      data: [
        create.course(
          "Intro to web layout with HTML5 and CSS3",
          "Certified (18 hours)",
          "EducacionIT",
          true
        ),
        create.course(
          "Advanced web layout with HTML5 and CSS3",
          "Certified (15 hours)",
          "EducacionIT"
        ),
        create.course(
          "Responsive web design and Bootstrap",
          "Certified (12 hours)",
          "EducacionIT"
        )
      ]
    }
  ],
  js: [
    {
      id: uid(),
      title: sectionNames.EDUCATION,
      data: [
        create.course(
          "Intro to JS programming",
          "Certified (15 hours)",
          "EducacionIT",
          true
        ),
        create.course(
          "JS Advanced Development",
          "Certified (36 hours)",
          "EducacionIT"
        ),
        create.course(
          "JQuery for designers",
          "Certified (15 hours)",
          "EducacionIT"
        )
      ]
    },
    {
      id: uid(),
      title: sectionNames.PROJECTS,
      data: [
        create.project(
          "js-connect-4",
          "Connect 4",
          "Vanilla HTML+CSS+JS Connect 4 game",
          "",
          true
        ),
        create.project(
          "js-market-list",
          "Market list",
          "Shopping list configured as a PWA from scratch"
        )
      ]
    }
  ],
  react: [
    {
      id: uid(),
      title: sectionNames.EDUCATION,
      data: [
        create.course(
          "Intro to ReactJS",
          "Certified (15 hours)",
          "EducacionIT",
          true
        ),
        create.course(
          "React & Django Full Stack",
          "Completed (17 hours)",
          "Udemy"
        ),
        create.course(
          "React & Firebase for beginners",
          "Completed (6 hours)",
          "Udemy"
        ),
        create.course(
          "Complete React Developer in 2020",
          "Completed (39.5 hours)",
          "Udemy"
        ),
        create.course(
          "React - The complete guide",
          "Completed (40.5 hours)",
          "Udemy"
        ),
        create.course(
          "The Modern React Bootcamp",
          "Completed (39 hours)",
          "Udemy"
        ),
        create.course(
          "Complete React Hooks course 2020",
          "Completed (8 hours)",
          "Udemy"
        )
      ]
    },
    {
      id: uid(),
      title: sectionNames.PROJECTS,
      data: [
        create.project(
          "react-react-fanmade-hooks",
          "React Fanmade Hooks",
          "Hooks for many needs made by React enthusiasts",
          "",
          true
        ),
        create.project(
          "react-yugi-calculator-max",
          "Yugi-Calculator-MAX",
          "Multi-purpose app to assist Yu-Gi-Oh! duelists"
        ),
        create.project(
          "react-react-pokedex",
          "React Pokedex",
          "Basic Pokemon filter app"
        )
      ]
    }
  ],
  nodejs: [
    {
      id: uid(),
      title: sectionNames.EDUCATION,
      data: [
        create.course(
          "NodeJS and MongoDB",
          "Certified (18 hours)",
          "EducacionIT",
          true
        ),
        create.course(
          "MongoDB fundamentals",
          "Certified (6 hours)",
          "EducacionIT"
        )
      ]
    },
    {
      id: uid(),
      title: sectionNames.PROJECTS,
      data: [
        create.project(
          "nodejs-login-authentication",
          "Login Authentication",
          "Node + Passport + Mongoose basic login",
          "",
          true
        )
      ]
    }
  ],
  python: [
    {
      id: uid(),
      title: sectionNames.EDUCATION,
      data: [
        create.course(
          "Python Programming",
          "Certified (21 hours)",
          "EducacionIT",
          true
        ),
        create.course(
          "Python Programming Masterclass",
          "Completed (42 hours)",
          "Udemy"
        ),
        create.course(
          "Python and Django Developer Bootcamp",
          "Completed (32 hours)",
          "Udemy"
        ),
        create.course(
          "Django 2.2 & Python, Ultimate Developer Bootcamp",
          "Completed (10 hours)",
          "Udemy"
        )
      ]
    },
    {
      id: uid(),
      title: sectionNames.PROJECTS,
      data: [
        create.project(
          "python-abstract-data-structures",
          "Array",
          "C Array with extended functionality",
          "",
          true
        ),
        create.project(
          "python-abstract-data-structures",
          "Multi-Dimensional Array",
          "Custom Abstract Data Structure"
        ),
        create.project(
          "python-abstract-data-structures",
          "Queue",
          "Custom Abstract Data Structure"
        ),
        create.project(
          "python-abstract-data-structures",
          "Bounded Priority Queue",
          "Custom Abstract Data Structure"
        ),
        create.project(
          "python-abstract-data-structures",
          "Singly-Sorted Linked List",
          "Custom Abstract Data Structure"
        ),
        create.project(
          "python-abstract-data-structures",
          "Multi-Sorted Circular Linked List",
          "Custom Abstract Data Structure"
        ),
        create.project(
          "python-abstract-data-structures",
          "Stack",
          "Custom Abstract Data Structure"
        ),
        create.project(
          "python-abstract-data-structures",
          "Set",
          "Custom Abstract Data Structure"
        ),
        create.project("python-games", "Black Jack full game", "Desktop game"),
        create.project("python-games", "Code guess", "Console game"),
        create.project("python-games", "Sudoku", "Desktop game"),
        create.project(
          "python-games",
          "Sudoku generator",
          "Customizable sudoku generator"
        ),
        create.project("python-games", "Card War", "Console game"),
        create.project(
          "python-rnmc-videos",
          "RNMC Videos",
          "Personal and shareable Youtube videos gallery"
        ),
        create.project(
          "python-rnmc-movies",
          "RNMC Movies",
          "Upload and rate movies, powered by Django"
        ),
        create.project(
          "python-rnmc-social",
          "RNMC Social",
          "Foundations of a social network using Django"
        )
      ]
    }
  ],
  github: [
    {
      id: uid(),
      title: sectionNames.EDUCATION,
      data: [
        create.course(
          "GIT: collaborative development",
          "Certified (12 hours)",
          "EducacionIT",
          true
        )
      ]
    }
  ],
  "react-native": [
    {
      id: uid(),
      title: sectionNames.EDUCATION,
      data: [
        create.course(
          "React Native 2021 - The practical guide",
          "Certified (33 hours)",
          "Udemy",
          true
        )
      ]
    },
    {
      id: uid(),
      title: sectionNames.PROJECTS,
      data: [
        create.project(
          "react-native-react-native-portfolio",
          "React Native Portfolio app",
          "This app you are using now",
          "",
          true
        )
      ]
    }
  ]
}

function _createProfileSectionItem(id, title, subtitle) {
  return new SectionItem(
    title || "mocktitle " + id,
    subtitle || "mocksubtitle " + id,
    defaultIcons[id].activeColor,
    profileBullets[id]
  )
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
        react: _createProfileSectionItem(
          "react",
          "ReactJS",
          "JavaScript library for building user interfaces"
        )
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
        nodejs: _createProfileSectionItem(
          "nodejs",
          "NodeJS",
          "Runtime built on Chrome's V8 JavaScript engine"
        ),
        python: _createProfileSectionItem(
          "python",
          "Python",
          "Python (Programming language) and Django (Web-building framework)"
        ),
        github: _createProfileSectionItem(
          "github",
          "Git(hub)",
          "Open source version control software and web-based interface"
        )
      }
    },
    currentlyLearning: {
      id: "currentlyLearning",
      title: "Currently learning",
      icons: [new ProfileIcon(defaultIcons["react-native"])],
      content: {
        "react-native": _createProfileSectionItem(
          "react-native",
          "React Native",
          "React-based Native development library"
        )
      }
    }
  }
}

export default profile
