import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  console.log('test2')
  return <Component {...pageProps} />
}

export default MyApp
