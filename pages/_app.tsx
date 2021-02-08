// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
