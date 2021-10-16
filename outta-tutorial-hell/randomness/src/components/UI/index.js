import React from "react"
import Spring from "./Animation/Spring"
import Color from "./Animation/Color"
import Hover from "./Animation/Spring"
import TextBase from "./Text/Base"
import TextWithTransition from "./Text/TextWithTransition"
import DirectionalArrows from "./DirectionalArrows/DirectionalArrows"
import CardContext, { CardContextProvider } from "./Card/context"
import CardRoot from "./Card/Root"
import CardContainer from "./Card/Container"
import CardCarousel from "./Card/Carousel"
import CardImage from "./Card/Image"
import CardText, {
  Title as CardTitle,
  Subtitle as CardSubtitle
} from "./Card/Text"
import ImageBase from "./Image/Base"
import ImageWithTransition from "./Image/ImageWithTransition"
import Icon from "./Icon/Icon"
import Aura from "./Icon/Aura"
import IconBase from "./Icon/Base"
import Shadow from "./Icon/Shadow"
import IconWithSpring from "./Icon/IconWithSpring"
import IconWithHover from "./Icon/IconWithHover"
import IconWithCircle from "./Icon/IconWithCircle"
import IconWithAura from "./Icon/IconWithAura"
import IconWithColorTransition from "./Icon/IconWithColorTransition"

function ComposedIcon(props) {
  return <Icon {...props} />
}

ComposedIcon.Aura = Aura
ComposedIcon.Base = IconBase
ComposedIcon.Shadow = Shadow
ComposedIcon.WithCircle = IconWithCircle
ComposedIcon.WithAura = IconWithAura
ComposedIcon.WithColorTransition = IconWithColorTransition
ComposedIcon.WithHover = IconWithHover
ComposedIcon.WithSpring = IconWithSpring

function ComposedImage(props) {
  return <ImageBase {...props} />
}

ComposedImage.WithTransition = ImageWithTransition

function ComposedText(props) {
  return <TextBase {...props} />
}

ComposedText.WithTransition = TextWithTransition

function ComposedCard(props) {
  return <CardRoot {...props} />
}

function ComposedCardText(props) {
  return <CardText {...props} />
}

ComposedCard.Context = CardContext
ComposedCard.ContextProvider = CardContextProvider
ComposedCard.Container = CardContainer
ComposedCard.Carousel = CardCarousel
ComposedCard.Image = CardImage
ComposedCard.Text = ComposedCardText

ComposedCardText.Title = CardTitle
ComposedCardText.Subtitle = CardSubtitle

const UI = {
  Animation: { Spring, Color, Hover },
  Text: ComposedText,
  Icon: ComposedIcon,
  Image: ComposedImage,
  DirectionalArrows,
  Card: ComposedCard
}

export default UI
