export const kyrgyzstan = {
  header: {
    links: ['Home', 'Games'],
    login: 'Log in',
    registration: 'Sign up'
  },
  pages: {
    mainpage: {
      text: 'Welcome!'
    },
    games: {
      list: [
        'Stone game',
        'Room game',
        'Cows and bulls',
        'Nim numbers',
        'Number systems',
        'Programming game',
        'Trade game'
      ],
      title: 'games',
      tabs: ['Games', 'Leaderboard'],
      leaderboard: {
        name: 'name',
        score: 'score'
      }
    },
    login: {
      title: 'Welcome back!',
      description: 'Do not have an account yet?',
      textRegistration: 'Create account',
      inputs: {
        email: 'Email',
        password: 'Password',
        emailPlaceholder: 'you@mantine.dev',
        passwordPlaceholder: 'Your password',
        signIn: 'Sign in',
        remember: 'Remember Me',
        forgot: 'Forgot password?'
      }
    }
  }
}
