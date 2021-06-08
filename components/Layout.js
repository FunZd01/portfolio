import Navbar from './Navbar';
import Head from "next/head";
import styles from '../styles/Home.module.css'

const Layout = ({children}) => (
    <>
        <Head>
            <title>portfolio</title>
            <meta name="description" content="Domingo Funez: portafolio que demuestra habilidades y tecnicas"/>
        </Head>
        <div className={styles.container}>
            <Navbar/>
            {children}
            <footer className={styles.footer}>
                    &copy; funzd 2021
            </footer>
        </div>
    </>
)

export default Layout;
