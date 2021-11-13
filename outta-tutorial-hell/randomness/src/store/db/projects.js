import { ProjectsIcon, ProjectsImage } from "@app-models/projects"
import { defaultIcons } from "./global"
import { uid } from "@app-utils/functions"

const actions = { SHARE: "SHARE", EXAMPLE: "EXAMPLE", GITHUB: "GITHUB" }
projects flatlist does not scroll. Then add actions[] and expand in reducer
const BASE_IMAGES_URL_PATH =
  "https://raw.githubusercontent.com/RenzoMurinaCadierno/assets/master/rn-portfolio/images"

function _getAllImages(quantityOfUploadedImages, folder, subfolder) {
  return new Array(quantityOfUploadedImages).fill(null).map(
    (_, i) =>
      new ProjectsImage({
        id: uid(),
        index: i,
        basePath: BASE_IMAGES_URL_PATH,
        folder,
        subfolder
      })
  )
}

const projects = {
  html: {
    id: uid(),
    icon: new ProjectsIcon(defaultIcons.html),
    items: [
      {
        id: uid(),
        title: "Connect 4",
        subtitle: "Vanilla Connect 4 game with HTML and CSS",
        images: _getAllImages(2, "html", "connect-4"),
        actions: [
          { id: "share", iconName: "share-social", actionText: "Tap to share" },
          {
            id: "example",
            iconName: "code-slash",
            actionText: "Tap to open example"
          },
          {
            id: "github",
            iconName: "logo-github",
            actionText: "Tap to open repo"
          }
        ]
      }
    ]
  },
  css: {
    id: uid(),
    icon: new ProjectsIcon(defaultIcons.css),
    items: [
      {
        id: uid(),
        title: "Connect 4",
        subtitle: "Vanilla Connect 4 game with HTML and CSS",
        images: _getAllImages(2, "css", "connect-4"),
        actions: [
          { id: "share", iconName: "share-social", actionText: "Tap to share" },
          {
            id: "example",
            iconName: "code-slash",
            actionText: "Tap to open example"
          },
          {
            id: "github",
            iconName: "logo-github",
            actionText: "Tap to open repo"
          }
        ]
      }
    ]
  },
  js: {
    id: uid(),
    icon: new ProjectsIcon(defaultIcons.js),
    items: [
      {
        id: uid(),
        title: "Market list",
        subtitle: "Shopping list configured as a PWA from scratch",
        images: _getAllImages(1, "js", "market-list"),
        actions: [
          { id: "share", iconName: "share-social", actionText: "Tap to share" },
          {
            id: "example",
            iconName: "code-slash",
            actionText: "Tap to open example"
          },
          {
            id: "github",
            iconName: "logo-github",
            actionText: "Tap to open repo"
          }
        ]
      }
    ]
  },
  react: {
    id: uid(),
    icon: new ProjectsIcon(defaultIcons.react),
    items: [
      {
        id: uid(),
        title: "React Fanmade Hooks",
        subtitle: "Hooks for many needs made by React enthusiasts",
        images: _getAllImages(17, "reactjs", "rfh"),
        actions: [
          { id: "share", iconName: "share-social", actionText: "Tap to share" },
          {
            id: "example",
            iconName: "code-slash",
            actionText: "Tap to open example"
          },
          {
            id: "github",
            iconName: "logo-github",
            actionText: "Tap to open repo"
          }
        ]
      },
      {
        id: uid(),
        title: "Yugi-Calculator-MAX",
        subtitle: "Multi-purpose app to assist Yu-Gi-Oh! duelists",
        images: _getAllImages(19, "reactjs", "ycm"),
        actions: [
          { id: "share", iconName: "share-social" },
          { id: "example", iconName: "code-slash" },
          { id: "github", iconName: "logo-github" }
        ]
      },
      {
        id: uid(),
        title: "React Pokedex",
        subtitle:
          "A Pokemon filter app used to teach React basics and a little more",
        images: _getAllImages(3, "reactjs", "dex"),
        actions: [
          { id: "share", iconName: "share-social" },
          { id: "example", iconName: "code-slash" },
          { id: "github", iconName: "logo-github" }
        ]
      }
    ]
  },
  nodejs: {
    id: uid(),
    icon: new ProjectsIcon(defaultIcons.nodejs),
    items: [
      {
        id: uid(),
        title: "Login authentication",
        subtitle:
          "Back-end NodeJS auth app with Express, Passport and Mongoose",
        images: _getAllImages(3, "nodejs", "login"),
        actions: [
          { id: "share", iconName: "share-social", actionText: "Tap to share" },
          {
            id: "example",
            iconName: "code-slash",
            actionText: "Tap to open example"
          },
          {
            id: "github",
            iconName: "logo-github",
            actionText: "Tap to open repo"
          }
        ]
      }
    ]
  },
  python: {
    id: uid(),
    icon: new ProjectsIcon(defaultIcons.python),
    items: [
      {
        id: uid(),
        title: "Abstract Data Sctructures",
        subtitle: "Collection of custom-made data structures",
        images: _getAllImages(1, "python", "ads"),
        actions: [
          { id: "share", iconName: "share-social", actionText: "Tap to share" },
          {
            id: "example",
            iconName: "code-slash",
            actionText: "Tap to open example"
          },
          {
            id: "github",
            iconName: "logo-github",
            actionText: "Tap to open repo"
          }
        ]
      },
      {
        id: uid(),
        title: "Games",
        subtitle: "Collection of simple UI and console games",
        images: _getAllImages(1, "python", "games"),
        actions: [
          { id: "share", iconName: "share-social", actionText: "Tap to share" },
          {
            id: "example",
            iconName: "code-slash",
            actionText: "Tap to open example"
          },
          {
            id: "github",
            iconName: "logo-github",
            actionText: "Tap to open repo"
          }
        ]
      },
      {
        id: uid(),
        title: "RNMC Videos",
        subtitle: "Personal and shareable Youtube videos gallery",
        images: _getAllImages(8, "python", "rnmc-videos"),
        actions: [
          { id: "share", iconName: "share-social", actionText: "Tap to share" },
          {
            id: "example",
            iconName: "code-slash",
            actionText: "Tap to open example"
          },
          {
            id: "github",
            iconName: "logo-github",
            actionText: "Tap to open repo"
          }
        ]
      },
      {
        id: uid(),
        title: "RNMC Movies",
        subtitle: "A React app to upload and rate movies, powered by Django",
        images: _getAllImages(6, "python", "rnmc-movies"),
        actions: [
          { id: "share", iconName: "share-social", actionText: "Tap to share" },
          {
            id: "example",
            iconName: "code-slash",
            actionText: "Tap to open example"
          },
          {
            id: "github",
            iconName: "logo-github",
            actionText: "Tap to open repo"
          }
        ]
      },
      {
        id: uid(),
        title: "RNMC Social",
        subtitle:
          "First attempt at the foundations of a social network using Django",
        images: _getAllImages(5, "python", "rnmc-movies"),
        actions: [
          { id: "share", iconName: "share-social", actionText: "Tap to share" },
          {
            id: "example",
            iconName: "code-slash",
            actionText: "Tap to open example"
          },
          {
            id: "github",
            iconName: "logo-github",
            actionText: "Tap to open repo"
          }
        ]
      }
    ]
  },
  "react-native": {
    id: uid(),
    icon: new ProjectsIcon(defaultIcons["react-native"]),
    items: [
      {
        id: uid(),
        title: "React Native Portfolio",
        subtitle: "This app you are using now",
        images: _getAllImages(5, "react-native", "rn-portfolio"),
        actions: [
          { id: "share", iconName: "share-social", actionText: "Tap to share" },
          {
            id: "example",
            iconName: "code-slash",
            actionText: "Tap to open example"
          },
          {
            id: "github",
            iconName: "logo-github",
            actionText: "Tap to open repo"
          }
        ]
      }
    ]
  }
}

export default projects
