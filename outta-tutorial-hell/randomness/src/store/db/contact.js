import { defaultIcons } from "./global"
import { ContactIcon } from "@app-models/contact"
import { uid } from "@app-utils/functions"

const contact = {
  bullets: {
    email: {
      id: uid(),
      icon: new ContactIcon(defaultIcons.email),
      title: "Email",
      description: "nmcadierno@gmail.com",
      toastData: { text: "Glad to read from you! ;)" }
    },
    github: {
      id: uid(),
      icon: new ContactIcon(defaultIcons.github),
      title: "Github",
      description: "github.com/renzomurinacadierno",
      toastData: {
        text: "Tap me to open the repo",
        url: "https://github.com/renzomurinacadierno"
      }
    },
    linkedin: {
      id: uid(),
      icon: new ContactIcon(defaultIcons.linkedin),
      title: "Linkedin",
      description: "linkedin.com/in/renzomurinacadierno",
      toastData: {
        text: "Tap me to open LinkedIn",
        url: "https://linkedin.com/in/renzomurinacadierno"
      }
    }
  }
}

export default contact
