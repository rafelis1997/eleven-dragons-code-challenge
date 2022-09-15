import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

import { UserListContextProvider } from '../context/UsersListContext'

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      

      <UserListContextProvider>
        <Component {...pageProps} />
      </UserListContextProvider>
      

    </Container>
  )
}
