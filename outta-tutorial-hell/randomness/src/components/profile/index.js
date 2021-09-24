import React from "react"
import BannerRoot from "./banner/Root"
import BannerContent from "./banner/Content"
import BannerHeader from "./banner/Header"
import BannerBody from "./banner/Body"
import BannerBodyContent from "./banner/BodyContent"
import BannerBodyBullet from "./banner/BodyBullet"
import BannerSwipeArrow from "./banner/SwipeArrow"
import MainTechsRoot from "./mainTechs/Root"
import MainTechsIconList from "./mainTechs/IconList"
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
ComposedBanner.Header = BannerHeader
ComposedBanner.Body = ComposedBannerBody
ComposedBanner.SwipeArrow = BannerSwipeArrow

function ComposedMainTechs(props) {
  return <MainTechsRoot {...props} />
}

ComposedMainTechs.IconList = MainTechsIconList

const Profile = {
  Banner: ComposedBanner,
  MainTechs: ComposedMainTechs,
  Shared: { SectionHeader }
}

export default Profile
