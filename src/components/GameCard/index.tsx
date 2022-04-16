import React, { ReactElement } from 'react'
import windowsIcon from 'assets/icons/windows.svg'
import browserIcon from 'assets/icons/browser.svg'
import { Game } from 'types'
import { StyledLink, Img, Title, Details, Description, Genre, Icon } from './styles'
import { BROWSER, WINDOWS } from './constants'

interface Props {
  content: Game
}

const GameCard = ({ content }: Props): ReactElement => {
  const { 
    id,
    title,
    thumbnail,
    short_description,
    genre,
    platform
  } = content
  
  const icons = platform.split(',').map(platform => {
    let icon = null

    switch(platform.trim()) {
      case BROWSER:
        icon = (<Icon key={`${id}-browser`} alt="browser icon" src={browserIcon} />)
        break
      case WINDOWS:
        icon = (<Icon key={`${id}-window`} alt="window icon" src={windowsIcon} />)
        break
      default:
        break
    }
    return icon
  })

  return (
    <StyledLink>
      <Img src={thumbnail} alt={`${title} logo`} />
      <Details>
        <Title>{title}</Title>
        <Description>{short_description}</Description>
        <Genre>{genre}</Genre>
        {icons}
      </Details>
    </StyledLink>
  )
}

export default GameCard
