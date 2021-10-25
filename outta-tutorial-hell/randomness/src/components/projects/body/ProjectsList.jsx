import React from "react"
import { FlatList } from "react-native"
import { useSelector } from "react-redux"
import ProjectsCard from "./ProjectCard"

export default function ProjectsList({ items }) {
  const activeSectionId = useSelector((state) => state.projects.activeSectionId)

  const renderItem = (data) => (
    <ProjectsCard
      active={activeSectionId === data.item.section}
      index={data.index}
      {...data.item}
    />
  )

  return (
    <FlatList
      data={items[activeSectionId]}
      extraData={activeSectionId}
      renderItem={renderItem}
    />
  )
}

// import React from "react"
// import { FlatList } from "react-native"
// import { useSelector } from "react-redux"
// import ProjectsCard from "./ProjectCard"

// export default function ProjectsList({ items }) {
//   const activeSectionId = useSelector((state) => state.projects.activeSectionId)

//   const renderItem = (data) => <ProjectsCard {...data.item} />

//   return (
//     <FlatList
//       data={items[activeSectionId]}
//       extraData={activeSectionId}
//       renderItem={renderItem}
//     />
//   )
// }
