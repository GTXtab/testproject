import type { AppProps } from 'next/app'
import { Header } from '../components/Header/Header'
import '../../public/styles/App.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Header/>
  <Component {...pageProps} />
  </>
}