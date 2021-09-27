import { useSelector } from "react-redux"

export default function useSelectProfile(activeIconId) {
  const { sections, iconToCategoryMap } = useSelector((state) => state.profile)
  const activeCategory = iconToCategoryMap?.[activeIconId] ?? ""
  const activeSection = sections?.[activeCategory]?.[activeIconId] ?? {}

  return { activeCategory, activeSection, sections, iconToCategoryMap }
}
