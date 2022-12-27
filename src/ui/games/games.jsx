import {createStyles, Card, Text, SimpleGrid, UnstyledButton, Group} from '@mantine/core'
import {
  IconCreditCard,
  IconBuildingBank,
  IconRepeat,
  IconReceiptRefund,
  IconReceipt,
  IconReceiptTax,
  IconReport
} from '@tabler/icons'
import {NavLink} from 'react-router-dom'

const mockdata = [
  {title: 'Игра камни', icon: IconCreditCard, color: 'violet', link: '/stones-game'},
  {title: 'Игра про квартиры', icon: IconBuildingBank, color: 'indigo', link: '/apartments-game'},
  {title: 'Игра Быки и коровы', icon: IconRepeat, color: 'blue', link: '/guess-number-game'},
  {title: 'Игра числа Ним', icon: IconReceiptRefund, color: 'green', link: '/nim-numbers-game'},
  {title: 'Игра системы счисления', icon: IconReceipt, color: 'teal', link: '/number-systems-game'},
  {title: 'Игра на программирование', icon: IconReceiptTax, color: 'cyan', link: '/programming-game'},
  {title: 'Игра торговец', icon: IconReport, color: 'pink', link: '/traider-game'}
]

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)'
    }
  }
}))

export function ActionsGrid() {
  const {classes, theme} = useStyles()

  const items = mockdata.map(item => (
    <UnstyledButton key={item.title} className={classes.item}>
      <NavLink to={item.link}>
        <item.icon color={theme.colors[item.color][6]} size={32} />
        <Text size="xs" mt={7}>
          {item.title}
        </Text>
      </NavLink>
    </UnstyledButton>
  ))

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}>Игры</Text>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  )
}
