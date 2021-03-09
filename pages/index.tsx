import Head from 'next/head'
import styles from '../styles/home/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Z-Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        Hello World
      </main>
    </div>
  )
}
