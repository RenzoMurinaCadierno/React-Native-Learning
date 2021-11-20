import React from "react"
import { FlatList, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import ProjectsCard from "./ProjectsCard"
import ProjectsListEmpty from "./ProjectsListEmpty"

export default function ProjectsList({ items }) {
  const activeSectionId = useSelector((state) => state.projects.activeSectionId)
  const activeItemPrimaryKey = useSelector(
    (state) => state.projects.activeItemPrimaryKey
  )

  const renderItem = (data) => (
    <ProjectsCard
      active={activeSectionId === data.item.section}
      showPointer={data.item.primaryKey === activeItemPrimaryKey}
      index={data.index}
      {...data.item}
    />
  )

  return (
    <FlatList
      data={items[activeSectionId]}
      extraData={activeSectionId}
      renderItem={renderItem}
      contentContainerStyle={_styles.contentContainerStyle}
      ListEmptyComponent={ProjectsListEmpty}
    />
  )
}

const _styles = StyleSheet.create({ contentContainerStyle: { flexGrow: 1 } })
