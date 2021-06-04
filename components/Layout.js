import Navbar from './Navbar';
import Head from "next/head";
import styles from '../styles/Home.module.css'

const Layout = ({children}) => (
    <>
        <Head>
            <title>portfolio</title>
            <meta name="description" content="Domingo Funez: portafolio que demuestra habilidades y tecnicas"/>
        </Head>
        <div classname={styles.container}>
            <Navbar/>
            {children}
            <footer className={styles.footer}>
                <div className="text-right">
                    &copy; funzd 2021
                </div>
            </footer>
        </div>
    </>
)

export default Layout;
