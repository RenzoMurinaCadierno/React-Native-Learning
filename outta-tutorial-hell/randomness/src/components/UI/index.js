import React from "react"
import Spring from "./Animation/Spring"
import Color from "./Animation/Color"
import Hover from "./Animation/Spring"
import TextBase from "./Text/Base"
import TextWithShrinkTransition from "./Text/TextWithShrinkTransition"
import TextWithScaleTransition from "./Text/TextWithScaleTransition"
import ArrowBase from "./Arrow/Base"
import ArrowMultipleWithPulsation from "./Arrow/MultipleWithPulsation"
import ArrowMultipleWithShow from "./Arrow/MutipleWithShow"
import BulletRoot from "./Bullet/Root"
import BulletIcon from "./Bullet/Icon"
import CardRoot from "./Card/Root"
import CardAnimatedRoot from "./Card/AnimatedRoot"
import CardText, {
  Title as CardTitle,
  Subtitle as CardSubtitle
} from "./Card/Text"
import CardActions from "./Card/ActionsContainer"
import CardActionIcon from "./Card/ActionIcon"
import CarouselRoot from "./Carousel/Root"
import CarouselChip from "./Carousel/Chip"
import CarouselImageList from "./Carousel/ImageList"
import CarouselImage from "./Carousel/Image"
import ImageBase from "./Image/Base"
import ImageWithTransition from "./Image/ImageWithTransition"
import Icon from "./Icon/Icon"
import Aura from "./Icon/Aura"
import IconBase from "./Icon/Base"
import Shadow from "./Icon/Shadow"
import IconWithScale from "./Icon/IconWithScale"
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
ComposedIcon.WithScale = IconWithScale

function ComposedArrow(props) {
  return <ArrowBase {...props} />
}

ComposedArrow.MultipleWithPulsation = ArrowMultipleWithPulsation
ComposedArrow.MultipleWithShow = ArrowMultipleWithShow

function ComposedBullet(props) {
  return <BulletRoot {...props} />
}

ComposedBullet.Icon = BulletIcon

function ComposedImage(props) {
  return <ImageBase {...props} />
}

ComposedImage.WithTransition = ImageWithTransition

function ComposedText(props) {
  return <TextBase {...props} />
}

ComposedText.WithShrinkTransition = TextWithShrinkTransition
ComposedText.WithScaleTransition = TextWithScaleTransition

function ComposedCard(props) {
  return <CardRoot {...props} />
}

function ComposedCardText(props) {
  return <CardText {...props} />
}

function ComposedCardActions(props) {
  return <CardActions {...props} />
}

ComposedCard.WithAnimation = CardAnimatedRoot
ComposedCard.Text = ComposedCardText
ComposedCard.Actions = ComposedCardActions

ComposedCardText.Title = CardTitle
ComposedCardText.Subtitle = CardSubtitle

ComposedCardActions.Icon = CardActionIcon

function ComposedCarousel(props) {
  return <CarouselRoot {...props} />
}

ComposedCarousel.Chip = CarouselChip
ComposedCarousel.ImageList = CarouselImageList
ComposedCarousel.Image = CarouselImage

const UI = {
  Animation: { Spring, Color, Hover },
  Arrow: ComposedArrow,
  Bullet: ComposedBullet,
  Card: ComposedCard,
  Carousel: ComposedCarousel,
  Icon: ComposedIcon,
  Image: ComposedImage,
  Text: ComposedText
}

export default UI
