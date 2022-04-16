import React, { ReactElement } from 'react'
import { Game } from 'types'
import { List, ListItem, Error, ErrorButton } from './styles'
import GameCard from 'components/GameCard'
import GameFilter from 'components/GameFilter'

interface Props {
  err: string | undefined
  games: Game[]
  onFilterChange: (e: React.ChangeEvent<HTMLFormElement>) => void
}

const GameListRender = ({ err, games, onFilterChange }: Props): ReactElement => {
  if (err) return (
    <Error className="error">
      <p>Unable to fetch games</p>
      <ErrorButton type="button" onClick={() => {
        window.location.reload()
      }}>
        Refresh
      </ErrorButton>
    </Error>
  )

  if (!games.length) return (
    <Error className="error">
      <p>No games matched your query</p>
      <ErrorButton type="button" onClick={() => {
        window.location.reload()
      }}>
        Refresh
      </ErrorButton>
    </Error>
  )

  return (
    <>
      <GameFilter onChange={onFilterChange} />
      <List>
        {games.map((game) => (
          <ListItem key={game.id}>
            <GameCard content={game} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GameListRender