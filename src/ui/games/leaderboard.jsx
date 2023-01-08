import {Table, Center} from '@mantine/core'
import {useSelector} from 'react-redux'

const elements = [
  {position: 1, score: 100, symbol: 'C', name: 'Carbon'},
  {position: 2, score: 80, symbol: 'N', name: 'Nitrogen'},
  {position: 3, score: 55, symbol: 'Y', name: 'Yttrium'},
  {position: 4, score: 32, symbol: 'Ba', name: 'Barium'},
  {position: 5, score: 12, symbol: 'Ce', name: 'Cerium'}
]

export function LeaderBoard() {
  const language = useSelector(state => state.language.language.pages.games)
  const rows = elements.map(element => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>
        <Center>{element.score}</Center>
      </td>
    </tr>
  ))

  return (
    <Table>
      <thead>
        <tr>
          <th>№</th>
          <th>{language.leaderboard.name}</th>
          <th>{language.leaderboard.score}</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}
