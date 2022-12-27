import {createStyles, Header, Group, Burger, Container, Button, Transition, Paper} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import {NavLink} from 'react-router-dom'

const HEADER_HEIGHT = 56

const useStyles = createStyles(theme => ({
  header: {
    backgroundColor: '#131514',
    borderBottom: 0,
    margin: 0
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    backgroundColor: '#131514',

    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  linksMobile: {
    display: 'none'
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
        0.1
      )
    }
  },
  linkLabel: {
    marginRight: 5
  }
}))

export function HeaderMenu() {
  const links = [
    {link: '/', label: 'Домой'},
    {link: '/games', label: 'Игры'}
  ]
  const [opened, {toggle}] = useDisclosure(false)
  const {classes} = useStyles()

  const items = links.map(link => {
    return (
      <NavLink key={link.label} to={link.link} className={classes.link}>
        {link.label}
      </NavLink>
    )
  })

  return (
    <Header height={56} className={classes.header} mb={4}>
      <Container>
        <div className={classes.inner}>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Group className={classes.hiddenMobile}>
            <NavLink to="/login">
              <Button variant="default">Log in</Button>
            </NavLink>
            <Button>Sign up</Button>
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" color="#fff" />
          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {styles => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </div>
      </Container>
    </Header>
  )
}
