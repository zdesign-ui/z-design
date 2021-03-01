// import App from "next/app";
import dynamic from 'next/dynamic'
import type { AppProps /*, AppContext */ } from 'next/app'
import Layout from '../components/layout'
import '../styles/globals.scss'
import 'nprogress/nprogress.css'

const TopProgressBar = dynamic(
  () => {
    return import('../components/TopProgressBar')
  },
  { ssr: false }
)

function App({ Component, pageProps }: AppProps) {
  return (
    // <Layout>
    <>
      <TopProgressBar />
      <Component {...pageProps} />
    </>  
    // </Layout>
  )
}

export default App
