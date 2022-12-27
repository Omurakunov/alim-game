import React from 'react'
import {Center, Tabs} from '@mantine/core'
import {PageTemplate} from '../../ui'
import {ActionsGrid} from '@/ui/games/games.jsx'
import {LeaderBoard} from '@/ui/games/leaderboard.jsx'

export const GamesPage = () => {
  return (
    <PageTemplate>
      <Center>
        <Tabs color="teal" defaultValue="games">
          <Tabs.List position="center">
            <Tabs.Tab value="games">Игры</Tabs.Tab>
            <Tabs.Tab value="leaderboard" color="blue">
              Таблица участников:
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="games" pt="xs">
            <ActionsGrid />
          </Tabs.Panel>

          <Tabs.Panel value="leaderboard" pt="xs">
            <LeaderBoard />
          </Tabs.Panel>
        </Tabs>
      </Center>
    </PageTemplate>
  )
}
