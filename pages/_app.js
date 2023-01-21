import '../styles/globals.css'
import {UserContextProvider} from "../contexts/UserContext";
import {RouteGuard} from "../adapter/Helper/RouterGuard/RouteGuard";
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })


function MyApp({ Component, pageProps }) {
  return (
      <UserContextProvider>
        {/*<RouteGuard>*/}
          <main className={inter.className}>
            <Component {...pageProps} />
          </main>
        {/*</RouteGuard>*/}
      </UserContextProvider>
  )
}

export default MyApp
