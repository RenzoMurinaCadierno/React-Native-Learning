import React from "react"
import Initialize from "./initialize/Root"
import BannerRoot from "./banner/Root"
import BannerContent from "./banner/Content"
import BannerHeader from "./banner/Header"
import BannerPlaceholder from "./banner/Placeholder"
import BannerBody from "./banner/Body"
import BannerBodyContent from "./banner/BodyContent"
import BannerBodyBullet from "./banner/BodyBullet"
import BodyRoot from "./body/Root"
import BodySections from "./body/Sections"
import BodyIconList from "./body/IconList"
import SwipeArrows from "./shared/SwipeArrows"
import SectionHeader from "./shared/SectionHeader"

function ComposedBanner(props) {
  return <BannerRoot {...props} />
}

function ComposedBannerBody(props) {
  return <BannerBody {...props} />
}

ComposedBannerBody.Content = BannerBodyContent
ComposedBannerBody.Bullet = BannerBodyBullet

ComposedBanner.Content = BannerContent
ComposedBanner.Placeholder = BannerPlaceholder
ComposedBanner.Header = BannerHeader
ComposedBanner.Body = ComposedBannerBody

function ComposedBody(props) {
  return <BodyRoot {...props} />
}

ComposedBody.Sections = BodySections
ComposedBody.IconList = BodyIconList

const Profile = {
  Initialize,
  Banner: ComposedBanner,
  Body: ComposedBody,
  Shared: { SectionHeader, SwipeArrows }
}

export default Profile
