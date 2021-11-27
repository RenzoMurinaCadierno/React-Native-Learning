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
        create.course({
          text: "HTML5: Web page fundamentals",
          descriptionText: "Certified (12 hours)",
          sideText: "EducacionIT",
          url: "https://www.educacionit.com/curso-de-html",
          doResetType: true
        })
      ]
    }
  ],
  css: [
    {
      id: uid(),
      title: sectionNames.EDUCATION,
      data: [
        create.course({
          text: "Intro to web layout with HTML5 and CSS3",
          descriptionText: "Certified (18 hours)",
          sideText: "EducacionIT",
          url: "https://www.educacionit.com/curso-de-css-divs",
          doResetType: true
        }),
        create.course({
          text: "Advanced web layout with HTML5 and CSS3",
          descriptionText: "Certified (15 hours)",
          sideText: "EducacionIT",
          url: "https://www.educacionit.com/curso-de-html5-y-css3"
        }),
        create.course({
          text: "Responsive web design and Bootstrap",
          sideText: "Certified (12 hours)",
          descriptionText: "EducacionIT",
          url: "https://www.educacionit.com/curso-de-responsive-design"
        })
      ]
    }
  ],
  js: [
    {
      id: uid(),
      title: sectionNames.EDUCATION,
      data: [
        create.course({
          text: "Intro to JS programming",
          descriptionText: "Certified (15 hours)",
          sideText: "EducacionIT",
          url: "https://www.educacionit.com/curso-de-javascript",
          doResetType: true
        }),
        create.course({
          text: "JS Advanced Development",
          descriptionText: "Certified (36 hours)",
          sideText: "EducacionIT",
          url: "https://www.educacionit.com/curso-de-javascript-avanzado"
        }),
        create.course({
          text: "JQuery for designers",
          descriptionText: "Certified (15 hours)",
          sideText: "EducacionIT",
          url: "https://www.educacionit.com/curso-de-jquery"
        })
      ]
    },
    {
      id: uid(),
      title: sectionNames.PROJECTS,
      data: [
        create.project({
          primaryKey: "js-connect-4",
          text: "Connect 4",
          descriptionText: "Vanilla HTML+CSS+JS Connect 4 game",
          doResetType: true
        }),
        create.project({
          primaryKey: "js-market-list",
          text: "Market list",
          descriptionText: "Shopping list configured as a PWA from scratch"
        })
      ]
    }
  ],
  react: [
    {
      id: uid(),
      title: sectionNames.EDUCATION,
      data: [
        create.course({
          text: "Intro to ReactJS",
          descriptionText: "Certified (15 hours)",
          sideText: "EducacionIT",
          url: "https://www.educacionit.com/curso-de-reactjs",
          doResetType: true
        }),
        create.course({
          text: "React & Django Full Stack",
          descriptionText: "Completed (17 hours)",
          sideText: "Udemy",
          url: "https://www.educacionit.com/curso-de-reactjs-avanzado"
        }),
        create.course({
          text: "React & Firebase for beginners",
          descriptionText: "Completed (6 hours)",
          sideText: "Udemy",
          url: "https://www.udemy.com/course/new-react-firebase-real-time-serverless-apps/"
        }),
        create.course({
          text: "Complete React Developer in 2020",
          descriptionText: "Completed (39.5 hours)",
          sideText: "Udemy",
          url: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"
        }),
        create.course({
          text: "React - The complete guide",
          descriptionText: "Completed (40.5 hours)",
          sideText: "Udemy",
          url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
        }),
        create.course({
          text: "The Modern React Bootcamp",
          descriptionText: "Completed (39 hours)",
          sideText: "Udemy",
          url: "https://www.udemy.com/course/modern-react-bootcamp/"
        }),
        create.course({
          text: "Complete React Hooks course 2020",
          descriptionText: "Completed (8 hours)",
          sideText: "Udemy",
          url: "https://www.udemy.com/course/react-hooks-course/"
        })
      ]
    },
    {
      id: uid(),
      title: sectionNames.PROJECTS,
      data: [
        create.project({
          primaryKey: "react-react-fanmade-hooks",
          text: "React Fanmade Hooks",
          descriptionText: "Hooks for many needs made by React enthusiasts",
          doResetType: true
        }),
        create.project({
          primaryKey: "react-yugi-calculator-max",
          text: "Yugi-Calculator-MAX",
          descriptionText: "Multi-purpose app to assist Yu-Gi-Oh! duelists"
        }),
        create.project({
          primaryKey: "react-react-pokedex",
          text: "React Pokedex",
          descriptionText: "Basic Pokemon filter app"
        })
      ]
    }
  ],
  nodejs: [
    {
      id: uid(),
      title: sectionNames.EDUCATION,
      data: [
        create.course({
          text: "NodeJS and MongoDB",
          descriptionText: "Certified (18 hours)",
          sideText: "EducacionIT",
          url: "https://www.educacionit.com/curso-de-nodejs-y-mongodb",
          doResetType: true
        }),
        create.course({
          text: "MongoDB fundamentals",
          descriptionText: "Certified (6 hours)",
          sideText: "EducacionIT",
          url: "https://www.educacionit.com/curso-de-mongodb-fundamentos"
        }),
        create.course({
          text: "MongoDB fundamentals",
          descriptionText: "Certified (12 hours)",
          sideText: "EducacionIT",
          url: "https://www.educacionit.com/curso-de-mongodb"
        })
      ]
    },
    {
      id: uid(),
      title: sectionNames.PROJECTS,
      data: [
        create.project({
          primaryKey: "nodejs-login-authentication",
          text: "Login Authentication",
          descriptionText: "Node + Passport + Mongoose basic login",
          doResetType: true
        })
      ]
    }
  ],
  python: [
    {
      id: uid(),
      title: sectionNames.EDUCATION,
      data: [
        create.course({
          text: "Python Programming",
          descriptionText: "Certified (21 hours)",
          sideText: "EducacionIT",
          url: "https://www.educacionit.com/curso-de-programacion-en-python",
          doResetType: true
        }),
        create.course({
          text: "Python Programming Masterclass",
          descriptionText: "Completed (42 hours)",
          sideText: "Udemy",
          url: "https://www.udemy.com/course/python-the-complete-python-developer-course/"
        }),
        create.course({
          text: "Python and Django Developer Bootcamp",
          descriptionText: "Completed (32 hours)",
          sideText: "Udemy",
          url: "https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/"
        }),
        create.course({
          text: "Django 2.2 & Python, Ultimate Developer Bootcamp",
          descriptionText: "Completed (10 hours)",
          sideText: "Udemy",
          url: "https://www.udemy.com/course/the-ultimate-beginners-guide-to-django-django-2-python-web-dev-website/"
        })
      ]
    },
    {
      id: uid(),
      title: sectionNames.PROJECTS,
      data: [
        create.project({
          primaryKey: "python-abstract-data-structures",
          text: "Array",
          descriptionText: "C Array with extended functionality",
          doResetType: true
        }),
        create.project({
          primaryKey: "python-abstract-data-structures",
          text: "Multi-Dimensional Array",
          descriptionText: "Custom Abstract Data Structure"
        }),
        create.project({
          primaryKey: "python-abstract-data-structures",
          text: "Queue",
          descriptionText: "Custom Abstract Data Structure"
        }),
        create.project({
          primaryKey: "python-abstract-data-structures",
          text: "Bounded Priority Queue",
          descriptionText: "Custom Abstract Data Structure"
        }),
        create.project({
          primaryKey: "python-abstract-data-structures",
          text: "Singly-Sorted Linked List",
          descriptionText: "Custom Abstract Data Structure"
        }),
        create.project({
          primaryKey: "python-abstract-data-structures",
          text: "Multi-Sorted Circular Linked List",
          descriptionText: "Custom Abstract Data Structure"
        }),
        create.project({
          primaryKey: "python-abstract-data-structures",
          text: "Stack",
          descriptionText: "Custom Abstract Data Structure"
        }),
        create.project({
          primaryKey: "python-abstract-data-structures",
          text: "Set",
          descriptionText: "Custom Abstract Data Structure"
        }),
        create.project({
          primaryKey: "python-games",
          text: "Black Jack full game",
          descriptionText: "Desktop game"
        }),
        create.project({
          primaryKey: "python-games",
          text: "Code guess",
          descriptionText: "Console game"
        }),
        create.project({
          primaryKey: "python-games",
          text: "Sudoku",
          descriptionText: "Desktop game"
        }),
        create.project({
          primaryKey: "python-games",
          text: "Sudoku generator",
          descriptionText: "Customizable sudoku generator"
        }),
        create.project({
          primaryKey: "python-games",
          text: "Card War",
          descriptionText: "Console game"
        }),
        create.project({
          primaryKey: "python-rnmc-videos",
          text: "RNMC Videos",
          descriptionText: "Personal and shareable Youtube videos gallery"
        }),
        create.project({
          primaryKey: "python-rnmc-movies",
          text: "RNMC Movies",
          descriptionText: "Upload and rate movies, powered by Django"
        }),
        create.project({
          primaryKey: "python-rnmc-social",
          text: "RNMC Social",
          descriptionText: "Foundations of a social network using Django"
        })
      ]
    }
  ],
  github: [
    {
      id: uid(),
      title: sectionNames.EDUCATION,
      data: [
        create.course({
          text: "GIT: collaborative development",
          descriptionText: "Certified (12 hours)",
          sideText: "EducacionIT",
          url: "https://www.educacionit.com/curso-de-git",
          doResetType: true
        })
      ]
    }
  ],
  "react-native": [
    {
      id: uid(),
      title: sectionNames.EDUCATION,
      data: [
        create.course({
          text: "React Native 2021 - The practical guide",
          descriptionText: "Certified (33 hours)",
          sideText: "Udemy",
          url: "https://www.udemy.com/course/react-native-the-practical-guide/",
          doResetType: true
        })
      ]
    },
    {
      id: uid(),
      title: sectionNames.PROJECTS,
      data: [
        create.project({
          primaryKey: "react-native-react-native-portfolio",
          text: "React Native Portfolio app",
          descriptionText: "This app you are using now",
          doResetType: true
        })
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
