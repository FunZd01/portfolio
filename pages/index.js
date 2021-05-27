import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>portfolio</title>
        <meta name="description" content="Domingo Funez: portafolio que demuestra habilidades y tecnicas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         DOMINGO FUNEZ!
        </h1>
      </main>

      <footer className={styles.footer}>
        &copy;funzd 2021
      </footer>
    </div>
  )
}
