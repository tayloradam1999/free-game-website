import React, { ReactElement } from 'react'
import GameList from 'components/GameList'
import withErrorBoundary from 'HOC/withErrorBoundary'

const Home = (): ReactElement => (
  <main>
    <GameList />
  </main>
)

export default withErrorBoundary(Home)
