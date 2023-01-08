import {PageTemplate} from '@/ui'
import {TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button} from '@mantine/core'
import {useSelector} from 'react-redux'

export function AuthenticationPage() {
  const language = useSelector(state => state.language.language.pages.login)

  return (
    <PageTemplate>
      <Container size={420} my={40}>
        <Title align="center" sx={theme => ({fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900})}>
          {language.title}
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          {language.description}{' '}
          <Anchor href="#" size="sm" onClick={event => event.preventDefault()}>
            {language.textRegistration}
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label={language.inputs.email} placeholder={language.inputs.emailPlaceholder} required />
          <PasswordInput
            label={language.inputs.password}
            placeholder={language.inputs.passwordPlaceholder}
            required
            mt="md"
          />
          <Group position="apart" mt="lg">
            <Checkbox label={language.inputs.remember} sx={{lineHeight: 1}} />
            <Anchor onClick={event => event.preventDefault()} href="#" size="sm">
              {language.inputs.forgot}
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            {language.inputs.signIn}
          </Button>
        </Paper>
      </Container>
    </PageTemplate>
  )
}
