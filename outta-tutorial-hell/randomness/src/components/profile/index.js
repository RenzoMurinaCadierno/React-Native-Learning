import React from "react"
import BannerRoot from "./banner/Root"
import BannerContent from "./banner/Content"
import BannerHeader from "./banner/Header"
import BannerPlaceholder from "./banner/Placeholder"
import BannerBody from "./banner/Body"
import BannerBodyContent from "./banner/BodyContent"
import BannerBodyBullet from "./banner/BodyBullet"
import BannerSwipeArrows from "./banner/SwipeArrows"
import BodyRoot from "./body/Root"
import BodyIconList from "./body/IconList"
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
ComposedBanner.SwipeArrow = BannerSwipeArrows

function ComposedBody(props) {
  return <BodyRoot {...props} />
}

ComposedBody.IconList = BodyIconList

const Profile = {
  Banner: ComposedBanner,
  Body: ComposedBody,
  Shared: { SectionHeader }
}

export default Profile
