import React from "react"
import BannerRoot from "./banner/Root"
import BannerHeader from "./banner/Header"
import BannerPlaceholder from "./banner/Placeholder"
import BannerBody from "./banner/Body"
import BannerBodyContent from "./banner/BodyContent"
import BannerBodyBullet from "./banner/BodyBullet"
import BodyRoot from "./body/Root"
import BodySections from "./body/Sections"
import BodySectionListHeader from "./body/SectionListHeader"
import BodySectionListItem from "./body/SectionListItem"

function ComposedBanner(props) {
  return <BannerRoot {...props} />
}

function ComposedBannerBody(props) {
  return <BannerBody {...props} />
}

ComposedBannerBody.Content = BannerBodyContent
ComposedBannerBody.Bullet = BannerBodyBullet

ComposedBanner.Placeholder = BannerPlaceholder
ComposedBanner.Header = BannerHeader
ComposedBanner.Body = ComposedBannerBody

function ComposedBody(props) {
  return <BodyRoot {...props} />
}

ComposedBody.Sections = BodySections
ComposedBody.SectionListHeader = BodySectionListHeader
ComposedBody.SectionListItem = BodySectionListItem

const Profile = {
  Banner: ComposedBanner,
  Body: ComposedBody
}

export default Profile
