import profile from "./profile"
import projects from "./projects"
import contact from "./contact"

export default async function initializeDb({ forceCrash, timeout = 0 } = {}) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      forceCrash
        ? reject({ ok: false, data: null })
        : resolve({
            ok: true,
            data: JSON.stringify({ profile, projects, contact })
          })
    }, timeout)
  })
}
