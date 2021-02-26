// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import Router from 'next/router'
import Layout from '../components/layout'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress
import '../styles/globals.scss'

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }: AppProps) {
  return (
    // <Layout>
      <Component {...pageProps} />
    // </Layout>
  )
}

export default App
