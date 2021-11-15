import { ProjectsIcon, ProjectsImage } from "@app-models/projects"
import { defaultIcons } from "./global"
import * as projectsConstants from "@app-constants/sections/projects"
import { uid } from "@app-utils/functions"

const { WEB_APP, ALLOW_SHARE, REPOSITORY } = projectsConstants.card.actions
const BASE_REPO_URL_PATH = "https://github.com/RenzoMurinaCadierno/"
const BASE_IMAGES_URL_PATH =
  "https://raw.githubusercontent.com/RenzoMurinaCadierno/assets/master/rn-portfolio/images/"

function _getActions(repoSlug, webAppUrl, allowShare = true) {
  const sharedActions = {
    [ALLOW_SHARE]: allowShare,
    [REPOSITORY]: BASE_REPO_URL_PATH + repoSlug
  }

  return webAppUrl
    ? { ...sharedActions, [WEB_APP]: "https://" + webAppUrl }
    : sharedActions
}

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
  js: {
    id: uid(),
    icon: new ProjectsIcon(defaultIcons.js),
    items: [
      {
        id: uid(),
        title: "Connect 4",
        subtitle: "Vanilla Connect 4 game with HTML, CSS and JS",
        images: _getAllImages(2, "css", "connect-4"),
        actions: _getActions("VanillaConnect4")
      },
      {
        id: uid(),
        title: "Market list",
        subtitle: "Shopping list configured as a PWA from scratch",
        images: _getAllImages(1, "js", "market-list"),
        actions: _getActions(
          "RenzoMurinaCadierno.github.io",
          "RenzoMurinaCadierno.github.io"
        )
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
        actions: _getActions(
          "React-Fanmade-Hooks",
          "react-fanmade-hooks.netlify.app"
        )
      },
      {
        id: uid(),
        title: "Yugi-Calculator-MAX",
        subtitle: "Multi-purpose app to assist Yu-Gi-Oh! duelists",
        images: _getAllImages(19, "reactjs", "ycm"),
        actions: _getActions("Yugi-Calculator-Max", "ycm.netlify.app/calc")
      },
      {
        id: uid(),
        title: "React Pokedex",
        subtitle:
          "A Pokemon filter app used to teach React basics and a little more",
        images: _getAllImages(3, "reactjs", "dex"),
        actions: _getActions("React-Pokedex", "rnmc-react-pokedex.netlify.app")
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
        actions: _getActions("NodeJSLoginAuthentication")
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
        actions: _getActions(
          "PythonToolbox/tree/master/Abstract Data Structures"
        )
      },
      {
        id: uid(),
        title: "Games",
        subtitle: "Collection of simple UI and console games",
        images: _getAllImages(1, "python", "games"),
        actions: _getActions(
          "PythonToolbox/tree/master/Games (full games and tools)"
        )
      },
      {
        id: uid(),
        title: "RNMC Videos",
        subtitle: "Personal and shareable Youtube videos gallery",
        images: _getAllImages(8, "python", "rnmc-videos"),
        actions: _getActions("Django-RNMCVideos", "rnmcvideos.herokuapp.com")
      },
      {
        id: uid(),
        title: "RNMC Movies",
        subtitle: "A React app to upload and rate movies, powered by Django",
        images: _getAllImages(6, "python", "rnmc-movies"),
        actions: _getActions("Django-RNMCMovies", "rnmcmovies.web.app")
      },
      {
        id: uid(),
        title: "RNMC Social",
        subtitle:
          "First attempt at the foundations of a social network using Django",
        images: _getAllImages(5, "python", "rnmc-social"),
        actions: _getActions("Django-RNMCSocial", "rnmcsocial.herokuapp.com")
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
        actions: _getActions(
          "React-Native-Learning/tree/master/outta-tutorial-hell/randomness"
        )
      }
    ]
  }
}

export default projects
