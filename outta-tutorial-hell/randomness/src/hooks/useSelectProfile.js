import { useSelector } from "react-redux"

export default function useSelectProfile() {
  const { sections, iconToCategoryMap, activeSubSectionId } = useSelector(
    (state) => state.profile
  )
  const activeCategory = iconToCategoryMap?.[activeSubSectionId] ?? ""
  const activeSection = sections?.[activeCategory]?.[activeSubSectionId] ?? {}

  return {
    activeCategory,
    activeSection,
    sections,
    iconToCategoryMap,
    activeSubSectionId
  }
}
