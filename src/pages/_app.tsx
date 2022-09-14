import type { AppProps } from 'next/app'
import Image from 'next/image'
import { globalStyles } from '../styles/global'
import { Container, Header, NewUserButton} from '../styles/pages/app'
import logo from '../assets/logo.svg'


globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Container>
    <Header>
      <Image src={logo} alt="" />

      <NewUserButton>Criar novo usuário</NewUserButton>
    </Header>

    <Component {...pageProps} />

  </Container>
)
}
